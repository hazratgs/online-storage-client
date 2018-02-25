import axios from 'axios'

export class OnlineStorage {
  constructor () {
    // Server address onlineStorage
    this.host = 'http://localhost:3199'

    // Token for access to the storage
    this.token = null

    // Property to update token
    this.refreshToken = null
  }

  // Method for setting parameters
  config ({ host, token } = {}) {
    if (host) this.host = host
    if (token) this.token = token
  }

  // Server address with a token
  url () {
    return `${this.host}/${this.token}`
  }

  // Method for verifying the correctness of the token
  checkingToken () {
    if (!this.token) throw new Error('Token not specified')
  }

  // Creating a token
  async create (domains = false, backup = false) {
    try {
      // Request to create a token
      const response = await axios.post(`${this.host}/create`, { domains: domains, backup: backup })

      // In case of error forming a token
      if (!response.data.status) throw new Error(response.data.description)

      // Save the token to gain access to the repository
      this.token = response.data.data.token

      // Set refreshToken
      this.refreshToken = response.data.data.refreshToken

      return response
    } catch (e) {
      console.log(e.message)
    }
  }

  // Update token
  async updateToken () {
    try {
      this.checkingToken()
      const response = await axios.post(`${this.url()}/refresh`, { refreshToken: this.refreshToken })

      // Update token
      this.token = response.data.data

      return response
    } catch (e) {
      console.log(e.message)
    }
  }

  // Method for obtaining value by key
  async get (key) {
    try {
      this.checkingToken()
      const response = await axios.get(`${this.url()}/get/${key}`)

      return response.data.data
    } catch (e) {
      console.log(e.message)
    }
  }

  // We completely fill the storage
  async getAll () {
    try {
      this.checkingToken()
      const response = await axios.get(`${this.url()}/getAll`)

      return response.data.data
    } catch (e) {
      console.log(e.message)
    }
  }

  // Writing data to the repository
  async set (data = {}) {
    try {
      this.checkingToken()
      const response = await axios.post(`${this.url()}/set`, data)

      // Data was not received
      if (!response.data.status) throw new Error(response.data.description)

      return response.data.data
    } catch (e) {
      console.log(e.message)
    }
  }

  // Deleting a property from the storage
  async remove (key) {
    try {
      this.checkingToken()
      const response = await axios.delete(`${this.url()}/remove/${key}`)

      return response.data.status
    } catch (e) {
      console.log(e.message)
    }
  }

  // Cleaning storage
  async delete () {
    try {
      this.checkingToken()
      const response = await axios.delete(`${this.url()}/delete`)

      return response.data.status
    } catch (e) {
      console.log(e.message)
    }
  }

  // We get the list of backup copies
  async backup () {
    try {
      this.checkingToken()
      const response = await axios.post(`${this.url()}/backup`)

      return response.data.data
    } catch (e) {
      console.log(e.message)
    }
  }

  // Restoring the vault from a backup
  async backupRestore (key) {
    try {
      this.checkingToken()
      const response = await axios.post(`${this.url()}/backup/${key}`)

      return response.data.data
    } catch (e) {
      console.log(e.message)
    }
  }
}

const onlineStorage = new OnlineStorage()
export default onlineStorage
