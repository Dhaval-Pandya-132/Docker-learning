const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});
client.set('visits', 0);

app.get('/', (req, resp) => {
    // resp.send('Number of visits' + 100);
    client.get('visits', (error, visits) => {
        resp.send('Number of visits' + visits);
        client.set('visits', parseInt(visits) + 1)
    })
})

app.listen(8081, () => {
    console.log('Listening on port 8081')
});