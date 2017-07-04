const http = require('http');

function get(title, done) {
  const req = http.get(`http://getmovie.cc/api/kinopoisk.json?id=${title}&token=5dc2716dbb68073ad7d6e12ab9a79800`, res => {
    if (res.statusCode !== 200) {
      done(new Error(`Ошибка: ${res.statusMessage} (${res.statusCode})`));
      res.resume();
      return;
    }

    res.setEncoding('utf-8');

    let body = '';

    res.on('data', data => body += data);

    res.on('end', () => {
      let result;

      try{
        result = JSON.parse(body);
      } catch(error) {
        done(error);
      }
      
      done(null, result);

    });
  });

  req.on('error', error => done(error));
}

module.exports = {
  get
}
