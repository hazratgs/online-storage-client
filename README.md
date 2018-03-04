## kurtuba-client
💡Official JavaScript client [kurtuba-storage](https://github.com/hazratgs/kurtuba-storage)


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

    npm install kurtuba-client --save

#### Browser
kurtuba-client work on all browsers.

#### Using

    import onlineStorage from 'kurtuba-client'

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

## License
MIT
