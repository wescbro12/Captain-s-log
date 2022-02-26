require('dotenv').config()
const express = require('express');
const mongoose  = require('mongoose');
const app = express()


//MVC SETUP\\
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())

const PORT = 3001


//MODELS\\
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


//MIDDLEWARE\\
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
    console.log(req.body)
    next()
})



//INDEX\\


//NEW\\
app.get('/caplog/new', (req, res) => {

    res.render('New')
})


//DELETE\\



//UPDATE\\



//CREATE\\
app.post('/caplog', (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
        console.log('i am true')
    } else {
        req.body.shipIsBroken = false
        console.log('i am false')
    }
    // res.send('received')
})


//EDIT\\



//SHOW\\
app.get('/caplog/:id', (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.render('Show', {
                log: foundLog
            })
        }
    })
})


app.listen(PORT, () => {
    console.log('Coming to you live from 3001')
});