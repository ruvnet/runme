const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api', (req, res) => {
  res.send('Hello from the backend CLI!');
});

app.listen(port, () => {
  console.log(`Backend CLI listening at http://localhost:${port}`);
});
