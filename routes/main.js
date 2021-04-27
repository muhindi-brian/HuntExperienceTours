const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
    // const data = res.context
    const data = {
        title: "Hunt Experience Tours & Travel...",
        desription1: "Experience the Kenya Outdoors in a different way",
        description: "Welcome to Hunt Expereince Tours & Travel... Experience Kenyan outdoors in Magical Way",
        whyus: "We help you make your Kenya Outdoor Experience Magical ",

    }

    // res.send('this in the main route!')
    res.render('home', data)
})


router.get('/blog', (req, res, next) => {

    // const data = res.context 
    const data = {
        title: "Hunt Experience Tours & Travel...",
        desription1: "Experience the Kenya Outdoors in a different way",
        description: "Welcome to Hunt Expereince Tours & Travel... Experience Kenyan outdoors in Magical Way",
        whyus: "We help you make your Kenya Outdoor Experience Magical ",

    }

    res.render('blog', data)

})

router.get('/about', (req, res, next) => {

    // const data = res.context 
    const data = {
        title: "Hunt Experience Tours & Travel...",
        desription1: "Experience the Kenya Outdoors in a different way",
        description: "Welcome to Hunt Expereince Tours & Travel... Experience Kenyan outdoors in Magical Way",
        whyus: "We help you make your Kenya Outdoor Experience Magical ",

    }

    res.render('about', data)

})

module.exports = router