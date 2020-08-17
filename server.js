const express = require('express');

const app = express();



app.get('/', (req, res) => {
    const user = {
        name: 'Sally',
        hobby: 'soccer',
        age: '18'
    }
    res.send(user);
});

app.get('/', (req, res) => {
    res.send("getting root");
});
app.get('/profile', (req, res) => {
    res.send("getting profile");
});
app.listen(3000);

git push origin -- delete <branch>
git branch -- delete <branch>
git branch -- delete -- remote <remote>/<branch>

