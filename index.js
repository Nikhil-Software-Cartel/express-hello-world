var express = require('express');
var app = express();
let worker_name = Math.random().toString(36).substring(7);
app.get('/', function (req, res) {
    // wait for 100 ms
    setTimeout(function() {
        res.send('Hello From Express!');
        console.log(worker_name);
    }, 100);

    console.log(worker_name);
});
app.listen(3000, function () {
    console.log('Listening on port 3000...');
});
