import express from 'express';  //module variant
// const express = require('express') //common js variant ==> diff bw module and common js?

const app = express();

app.get('/jokes', (req, res) => {
    const jokes = [
  {
    id: 1,
    title: "Debugging Diet",
    content: "I told my code I needed a break, and it responded with a stack overflow."
  },
  {
    id: 2,
    title: "Server Mood",
    content: "Why did the server go to therapy? It had too many unresolved requests."
  },
  {
    id: 3,
    title: "Client Drama",
    content: "The client said the app was slow, so I told it to clear its browser cache. It replied: 'I don’t have a cache, I have feelings.'"
  },
  {
    id: 4,
    title: "404 Humor",
    content: "Why did the joke get a 404? Because the punchline was not found."
  },
  {
    id: 5,
    title: "API Friend",
    content: "An API walks into a bar. The bartender asks, 'What can I get you?' The API says, 'Just a JSON response, anything else would be too formatted.'"
  }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 4000; //for prod always use env never use or

app.listen(port, () => {
    console.log(`Serving at https://localhost/${port}`)
})