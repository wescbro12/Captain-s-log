require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const Log = require('./models/caplog');


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

app.use(methodOverride('_method'))

//INDEX\\
app.get('/caplog', (req, res) => {
    // res.render('Index')
    Log.find({}, (err, foundLogs) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.render('Index', {
                caplog: foundLogs
            })
        }
    })
});

//NEW\\
app.get('/caplog/new', (req, res) => {
    res.render('New')
})


//DELETE\\

app.delete('/caplog/:id', (req, res) => {
    Log.findByIdAndDelete(req.params.id, (err, deletedLogs) => {
        if (!err) {
            res.redirect('/caplog')
        } else {
            res.status(400).send(err)
        }
    })
})

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

    Log.create(req.body, (err, createdLogs) => {
        if (err) {
            res.status(403).send(err)
        } else {
            console.log(createdLogs)
            res.redirect('/caplog')
        }
    })
    // res.send(req.body)

})




//EDIT\\

app.get('/caplog/:id/edit', (req, res) => {
    Log.findById(req.params.id, (err, foundLogs) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.render('Edit', {
                caplog: foundLogs
            })
        }
    })
})

//SHOW\\
app.get('/caplog/:id', (req, res) => {
    Log.findById(req.params.id, (err, foundLogs) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.render('Show', {
                caplog: foundLogs
            })
        }
    })
})


app.listen(PORT, () => {
    console.log('Coming to you live from 3001')
});