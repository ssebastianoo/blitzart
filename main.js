const fileUpload = require('express-fileupload');
const sqlite3 = require('sqlite3').verbose();
const config = require('./config.json');
const express = require('express');
const path = require('path');
const fs = require('fs');
const { prototype } = require('express-fileupload/lib/uploadtimer');
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
    if (req.query.media) {
        const media = fs.readdirSync(path.join(__dirname, `public/medias`)).filter(media => media.split('.')[0] === req.query.media)[0];
        db.get("SELECT * FROM medias WHERE id=?", [req.query.media], (err, row) => {
            if (err) throw err;
            if (!media || !row) {
                res.status(404).send('media not found')
            } else {
                row.url = path.join('medias', media);
                row.ext = media.split('.').pop().toLowerCase();
                res.render('index', {media: row});
            }
        });
    } else {
        res.render('index', {media: null});
    }
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
            res.status(404).send('media not found')
        } else {
            row.url = path.join('../medias', media);
            row.ext  = media.split('.').pop();
            res.send(row);
        }
    });
});

app.get('/manage', (req, res) => {
    db.all("SELECT * FROM medias", (err, rows) => {
        if (err) throw err;
        rows.forEach(row => {
            const media = fs.readdirSync(path.join(__dirname, `public/medias`)).filter(media => media.split('.')[0] === row.id.toString())[0];
            row.url = path.join('medias', media);
        });
        res.render('manage', {medias: rows});
    });
});

app.post('/add', (req, res) => {
    if ([req.files.media, req.body.title, req.body.description, req.body.author, req.body.class].includes(undefined)) {
        return res.status(400).send('missing parameters');
    }
    const id = Date.now();
    const ext = req.files.media.name.split('.').pop();
    req.files.media.mv(path.join(__dirname, 'public/medias', `${id}.${ext}`), (err) => {if (err) throw err});
    db.run("INSERT INTO medias (id, author, title, description, class) VALUES (?, ?, ?, ?, ?)", [id, req.body.author, req.body.title, req.body.description, req.body.class], (err) => {if (err) throw err});
    res.redirect('/?media=' + id);
});

app.post('/edit/:id', (req, res) => {
    const id = req.params.id;
    if ([req.body.title, req.body.description, req.body.author, req.body.class].includes(undefined)) {
        console.log('----')
        console.log([req.body.title, req.body.description, req.body.author, req.body.class])
        console.log(req.body);
        return res.status(400).send('missing parameters');
    }
    db.run("UPDATE medias SET title=?, description=?, author=?, class=? WHERE id=?", [req.body.title, req.body.description, req.body.author, req.body.class, id], (err) => {if (err) throw err});
    res.redirect('/manage');
});

app.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    db.run("DELETE FROM medias WHERE id=?", [id], (err) => {if (err) throw err});
    res.redirect('/manage');
});

const port = process.env.PORT || config.port;
app.listen(port, () => {
    console.log('-> http://localhost:' + port);
});