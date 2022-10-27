const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const courseName = require('./data/courseName')
const course = require('./data/course')
// const news = require('./data/news')
app.use(cors())
dotenv.config();

app.get('/', (req, res) => {
    res.status(200).send('This is home route')
})
// course name
app.get('/course-name', (req, res) => {
    res.send(courseName);
})
//  get all course
app.get('/course', (req, res) => {
    res.send(course);
})
// get singal course
app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const data = course.find(c => c._id === id)
    res.send(data)
})



// set 404 route
app.use((req, res, next) => {
    res.status(404).send("Page was not found")
})
// set default error handlers 
app.use((err, req, res, next) => {
    if (err) {
        console.log(err)
    }
})
// set server port
app.listen(process.env.SERVER_PORT || 8000, (error) => {
    if (!error) {
        console.log(`Server is listen port ${process.env.SERVER_PORT}`)
    }
})