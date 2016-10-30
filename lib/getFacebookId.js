var https = require('https');

module.exports = function(username, cb) {
  var options = {
    hostname: 'www.facebook.com',
    port: 443,
    path: `/${username}`,
    method: 'GET',
    headers: {
      'accept': 'text/html,application/json,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36',
      'Host': 'www.facebook.com',
      'Connection': 'Keep-Alive',
      'Accept-Language': 'en-GB,en-US;q=0.8,en;q=0.6'
    }
  };

  var req = https.request(options, res => {
    res.setEncoding('utf8');

    var id = false;

    res.on('data', d => {
      var m = d.match(/"entity_id":"(\d*)"/);
      if(m && m[1]){
        id = m[1];
        req.abort();
        cb(id);
      }
    });

    res.on('end', () => !id && cb(false));

  });

  req.end();
}
