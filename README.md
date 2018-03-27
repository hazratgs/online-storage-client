## online-storage
[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/online-storage)

The library for working with online storage is similar to localStorage

### Features
 - Create token
 - Refresh token
 - Get value of a property from the storage
 - Get all storage data
 - Set key/value
 - Remove element it storage
 - Delete storage
 - Get backup list
 - Restoring the vault from a backup

## Install

    npm install online-storage --save

#### Browser
online-storage work on all browsers.

#### Using

    import onlineStorage from 'online-storage'

## API

#### Creating a token:
```js
onlineStorage.create()
```

 <details>
  <summary>View Response</summary>

```js 		 
{
  "status":  true,
  "data":{
    "token": "002cac23-aa8b-4803-a94f-3888020fa0df",
    "connect": "5bf365e0-1fc0-11e8-85d2-3f7a9c4f742e",
    "refreshToken": "5bf365e0-1fc0-11e8-85d2-3f7a9c4f742e"
  }
}
```
</details>

#### Writing data to storage:
```js
onlineStorage.set({
  name: 'hazratgs',
  age: 25,
  city: 'Derbent'
  skills: ['javascript', 'react+redux', 'nodejs', 'mongodb']
})
```

 <details>
  <summary>View Response</summary>

```js 		 
{
  "status":  true,
  "message": "Successfully added"
}
```
</details>

#### Get property
```js
onlineStorage.get('name')
```

 <details>
  <summary>View Response</summary>

```js 		 
{
  "status":  true,
  "data": "hazratgs"
}
```
</details>

#### Get all storage
```js
onlineStorage.getAll()
```

 <details>
  <summary>View Response</summary>

```js 		 
{
  "status":  true,
  "data": {
    name: 'hazratgs',
    age: 25,
    city: 'Derbent'
    skills: ['javascript', 'react+redux', 'nodejs', 'mongodb']
  }
}
```
</details>

#### Remove property
```js
onlineStorage.remove('name')
```

 <details>
  <summary>View Response</summary>

```js 		 
{
  "status":  true,
  "message": "Successfully deleted"
}
```
</details>


#### Delete storage
```js
onlineStorage.delete()
```

 <details>
  <summary>View Response</summary>

```js 		 
{
  "status":  true,
  "message": "Storage deleted"
}
```
</details>


#### Get backup list storage
```js
onlineStorage.backup()
```

 <details>
  <summary>View Response</summary>

```js 		 
{
  "status":  true,
  "data": ['Sun Mar 04 2018 19:39:42 GMT+0300 (MSK)']
}
```
</details>

#### Restoring the vault from a backup
```js
onlineStorage.backupRestore('Sun Mar 04 2018 19:39:42 GMT+0300 (MSK)')
```

 <details>
  <summary>View Response</summary>

```js 		 
{
  "status":  true,
  "message": "Successfully restored"
}
```
</details>


## License
MIT
