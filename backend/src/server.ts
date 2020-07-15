import express from 'express';

const app = express();

const users = [
  'Diego',
  'Felipe',
  'Cleiton',
  'Mayk'
]

app.get('/users', (request, response) => {
  response.json(users)
})

app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id);

  const user = users[id];

  return response.json(user);
})

app.listen(3333);