const express = require("express");

const app = express();

app.get('/', (req, resp) => {
    resp.send('hi there')
});


app.listen(8080, () => {
    console.log('Listening to port 8080');
})