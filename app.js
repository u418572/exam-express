const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')


app.engine('handlebars',exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})
// showPage
app.get('/:option', (req, res) => {
  const option = req.params.option
  // 建立三個選項
  const options = [
    {
      id: 1,
      title: 'About'
    },
    {
      id: 2,
      title: 'Portfolio'
    },
    {
      id: 3,
      title: 'Contact'
    },

  ]
  const showPage = options.find(item => item.title.toLowerCase() === option)

  res.render('show',{showPage:showPage})
})


app.listen(port, () => {
  console.log(`app is running on http://localhost:${port}`)
})