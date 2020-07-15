import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  response.json({ users: 'user-2' })
})

app.listen(3333);