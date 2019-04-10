const express = require('express');

const app = express();

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: '1qaz@WSX',
      title: 'First server-side post',
      content: 'This is comming from the server'
    },
    {
      id: 'zaq1XSW@',
      title: 'Second server-side post',
      content: 'This is comming from the server!'
    }

  ];
  res.status(200).json({
    message: 'Posts fetched succesfully!',
    posts: posts
  });
});

module.exports = app;
