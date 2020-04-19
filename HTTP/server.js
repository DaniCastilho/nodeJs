const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((request, response) => {
  const file = request.url === '/' ? 'index.html' : request.url
  const filePath = path.join(__dirname, 'public', file)

  fs.readFile(filePath, (err, content) => {
    if (err) throw err
    response.end(content)
  })

}).listen(5000, () => console.log('Server is running'))