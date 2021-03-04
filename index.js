const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('client/build'));

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// });

const port = process.env.PORT || 3000;
const host = '192.168.178.26';

app.listen(port, host);
