const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3001; // You can choose a different port

app.use(cors());
app.use(express.json());

// Define your API endpoint to retrieve the list of trades
app.get('/api/trades', (req, res) => {
  fs.readFile('trades.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading trades.json: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    const trades = JSON.parse(data);
    res.json(trades);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
