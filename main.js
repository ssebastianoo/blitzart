const fileUpload = require('express-fileupload');
const config = require('./config.json');
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.json({extended: true, limit: '2048mb'}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(fileUpload());

if (!fs.existsSync(path.join(__dirname, 'public/medias'))) {
    fs.mkdirSync(path.join(__dirname, 'public/medias'));
}

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/getMedias', (req, res) => {
    const medias = fs.readdirSync(path.join(__dirname, 'public/medias')).map(media => `/medias/${media}`);
    res.send(medias);
});

app.get('/add', (req, res) => {
    res.render('add');
})

app.post('/add', (req, res) => {
    const media = req.files.media;
    const ext = media.name.split('.').pop();
    media.mv(path.join(__dirname, 'public/medias', `${Date.now()}.${ext}`), (err) => {if (err) throw err});
    res.send('ok');
});

app.listen(config.port, () => {
    console.log('-> http://localhost:' + config.port);
});