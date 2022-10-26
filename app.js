const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.get('/', (req, res) => {
    res.status(200).send('This is home route')
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