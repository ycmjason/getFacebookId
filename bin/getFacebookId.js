var getFacebookId = require('../index');

var usernames = process.argv.slice((process.argv[0] == 'get-facebook-id')? 1: 2);

var NOT_FOUND_MSG = (username) => `\`${username}\` not found`;

var ids = {};

var output = () => {
  usernames.forEach((username) => {
    console.log(ids[username] || NOT_FOUND_MSG(username));
  });
};

var count = 0;
usernames.forEach((username) => {
  getFacebookId(username, (id) => {
    count += 1;
    ids[username] = id;
    if(count == usernames.length) output();
  });
});
