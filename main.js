const fileUpload = require('express-fileupload');
const sqlite3 = require('sqlite3').verbose();
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

let db = new sqlite3.Database('db.db', (err) => {if (err) throw err;});
db.run("CREATE TABLE IF NOT EXISTS medias (id id, title text, author text, description text, class text)")

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

app.get('/media/:mediaID', (req, res) => {
    const mediaID = req.params.mediaID;
    const media = fs.readdirSync(path.join(__dirname, `public/medias`)).filter(media => media.split('.')[0] === mediaID)[0];
    db.get("SELECT * FROM medias WHERE id=?", [mediaID], (err, row) => {
        if (err) throw err;
        if (!media || !row) {
            res.status(404).render('media', {error: true});
        } else {
            row.url = path.join('../medias', media);
            res.render('media', {error: false, media: row});
        }
    });
});

app.get('/add', (req, res) => {
    res.render('add');
});

app.post('/add', (req, res) => {
    if ([req.files.media, req.body.title, req.body.description, req.body.author, req.body.class].includes(undefined)) {
        console.log('bruh');
        return res.status(400).send('missing parameters');
    }
    const id = Date.now();
    const ext = req.files.media.name.split('.').pop();
    req.files.media.mv(path.join(__dirname, 'public/medias', `${id}.${ext}`), (err) => {if (err) throw err});
    db.run("INSERT INTO medias (id, author, title, description, class) VALUES (?, ?, ?, ?, ?)", [id, req.body.author, req.body.title, req.body.description, req.body.class], (err) => {if (err) throw err});
    res.send({message: 'ok', 'id': id});
});

app.listen(config.port, () => {
    console.log('-> http://localhost:' + config.port);
});