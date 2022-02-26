require('dotenv').config()
const express = require('express')
const app = express()


//MVC SETUP\\
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())

const PORT = 3001


//INDEX\\


//NEW\\
app.get('/caplog/new', (req, res) => {
    res.render('New')
})


//DELETE\\



//UPDATE\\



//CREATE\\



//EDIT\\



//SHOW\\
app.get('/caplog/:id', (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.render('Show', {
                log:foundLog
            })
        }
    })
})


app.listen(PORT, () => {
    console.log('Coming to you live from 3001')
});