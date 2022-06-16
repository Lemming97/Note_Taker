//required
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const allNotes = require('./db/db.json');


//port
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static('public'));


// Use apiRoutes
app.use('/api/notes', (req, res) => {
    res.json(allNotes.slice(1));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});