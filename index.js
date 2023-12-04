var express = require('express');
const rateLimit = require('express-rate-limit');
function fibonacci(n) {
    if (n === 0 || n === 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
var app = express();
// app.use(
//     rateLimit({
//         windowMs: 60000, // 1 minute
//         max: 10, // 10 requests per minute
//     })
// );
let worker_name = Math.random().toString(36).substring(7);
app.get('/', function (req, res) {
    // wait for 100 ms
    setTimeout(function () {
        console.log(worker_name, fibonacci(41));
        res.send('Hello From Express!');
    }, 1000);
});
app.listen(3000, function () {
    console.log('Listening on port 3000...');
});
