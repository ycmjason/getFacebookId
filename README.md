# getFacebookId.js

This module is the simplest implementation for retrieving facebook id by username.

## Preface

Since the API of Facebook removed support for look up of id by username, it became quite inconvenient when our app requires that functionality. So I have created this simple interface for doing that.

## Install

### Local

```
> npm install --save get-facebook-id
```

### Global (useful for command line interface)

```
> npm install -g get-facebook-id
```

## Command line interface

`get-facebook-id`/`get-facebook-ids`/`get-fb-id`/`get-fb-ids` could be called to retrieve an id given username.

For example:

```
> get-facebook-id ycm.jason
1311577170
```

Multiple ids could be fetch at once:

```
> get-facebook-id ycm.jason someotheruser
1311577170
1234567
```

## Using the API

The module exports a function that takes in a `username` and `callback`.

```javascript
getFacebookId = require('get-facebook-id');

getFacebookId('ycm.jason', function(id) {
  // If user is not found, id would be `false`
  console.log(id);
});
```

The result of the above script would be `1311577170` as expected.


## License
ISC
