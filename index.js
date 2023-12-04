var express = require('express');
const rateLimit = require('express-rate-limit');

var app = express();
app.use(
    rateLimit({
        windowMs: 60000, // 1 minute
        max: 10, // 10 requests per minute
    })
);
let worker_name = Math.random().toString(36).substring(7);
app.get('/', function (req, res) {
    // wait for 100 ms
    setTimeout(function () {
        console.log(worker_name);
        res.send('Hello From Express!');
    }, 1000);
});
app.listen(3000, function () {
    console.log('Listening on port 3000...');
});
