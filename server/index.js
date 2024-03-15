const express = require('express');
const app = express();
const { google } = require('googleapis');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();


// Middleware
app.use(bodyParser.json());
app.use(cors());


const youtube = google.youtube({
    version: 'v3',
    auth: process.env.API_KEY
});

app.post('/', async (req, res) => {
// app.post('', async (req, res) => {
    const query = req.body.search;

    try{
        if(query==""){
            throw new Error('Please enter something')
        }

        const response = await youtube.search.list({
            part: 'snippet',
            q: `${query} song`,
            type: 'video',
            maxResults: 4
        });

        const videos = response.data.items.map(item => ({
            videoId: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.high.url
          }));
        //   console.log(videos);
        res.json(videos);
    }catch (error) {
        console.error('Error searching videos:', error);
        res.status(400).json({error : 'An error incurred while searching for videos'});
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT , () => {
    console.log('Server started at port',PORT);
})
