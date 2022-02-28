const express = require('express')
const router = express.Router()
const Log = require('../models/caplog');

//this router's base route is /caplog

//INDEX\\
router.get('/', (req, res) => {
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
router.get('/new', (req, res) => {
    res.render('New')
})


//DELETE\\

router.delete('/:id', (req, res) => {
    Log.findByIdAndDelete(req.params.id, (err, deletedLogs) => {
        if (!err) {
            res.redirect('/caplog')
        } else {
            res.status(400).send(err)
        }
    })
})

//UPDATE\\
router.put('/:id', (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
        console.log('i am true')
    } else {
        req.body.shipIsBroken = false
        console.log('i am false')
    }

    Log.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedLogs) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.redirect(`/caplog/${req.params.id}`)
        }
    })
})


//CREATE\\
router.post('/', (req, res) => {
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

router.get('/:id/edit', (req, res) => {
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
router.get('/:id', (req, res) => {
    Log.findById(req.params.id, (err, foundLogs) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.render('Show', {
                caplog: foundLogs //this is the "props"
            })
        }
    })
})

module.exports = router;