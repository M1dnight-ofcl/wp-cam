const express = require('express')
const app = express()
const port = 6942

app.get('/', (req, res) => {
  res.send('hello, world')
})
// app.get('/test', (req, res) => {
//   res.send('Hello World!')
//   res.redirect('nzxt-cam://action/load-web-integration?url=google.com');
// })

app.listen(port, () => console.log(`> listening on port ${port}`))