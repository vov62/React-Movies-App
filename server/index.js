const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const PORT = process.env.React_App_PORT || 4000;
const fetch = require('node-fetch');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello from server')
});

app.get('/movies', async (req, res) => {
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.React_App_API_KEY}&language=en-US`;
    const fetch_response = await fetch(apiUrl);
    const json = await fetch_response.json();
    res.json(json);
});

app.get('/movie/:searchText', async (req, res) => {
    const searchText = req.params.searchText;
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.React_App_API_KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`
    const response_fetch = await fetch(searchUrl);
    const json = await response_fetch.json();
    res.json(json);

});

