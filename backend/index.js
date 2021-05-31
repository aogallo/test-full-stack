var express = require('express');
var cors = require('cors');
var app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors());

app.use(require('./src/routes/cliente'));
app.use(require('./src/routes/proyecto'));
app.use(require('./src/routes/reunion'));

app.listen(80, function(){
    console.log('Server listen in port 3000')
});
