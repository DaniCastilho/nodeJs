const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((request, response) => {
  const file = fs.readFile(path.join(__dirname, 'public', 'index.html')
  if(request.url === '/'){
     file , (err, content) => {
      if (err) throw err

      response.end(content)
    })
  }
}).listen(5000, () => console.log('Server is running'))