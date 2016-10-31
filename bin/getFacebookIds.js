#!/usr/bin/env node
var getFacebookIds = require('../index');

var usernames = process.argv.slice((process.argv[0] == 'get-facebook-id')? 1: 2);

var NOT_FOUND_MSG = (username) => `\`${username}\` not found`;

getFacebookIds(usernames, (ids) => {
  ids.forEach((id, i) => console.log(id || NOT_FOUND_MSG(usernames[i])));
});
