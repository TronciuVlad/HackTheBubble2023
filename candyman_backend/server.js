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

// Define an API endpoint to fetch more information about a specific trade
app.get('/api/trades/:id', (req, res) => {
    const tradeId = parseInt(req.params.id);
  
    fs.readFile('trades.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading trades.json: ', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
  
      const trades = JSON.parse(data);
      const selectedTrade = trades.find((trade) => trade.id === tradeId);
  
      if (!selectedTrade) {
        res.status(404).json({ error: 'Trade not found' });
        return;
      }
  
      res.json(selectedTrade);
    });
  });
  

// Define an API endpoint to add a new trade
app.post('/api/trades', (req, res) => {
    const newTrade = req.body; // Assuming the request body contains the new trade data
  
    fs.readFile('trades.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading trades.json: ', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
  
      const trades = JSON.parse(data);
  
      // Find the highest existing 'id' value and increment it
      const maxId = trades.reduce((max, trade) => (trade.id > max ? trade.id : max), 0);
      newTrade.id = maxId + 1;
  
      trades.push(newTrade);
  
      fs.writeFile('trades.json', JSON.stringify(trades, null, 2), (err) => {
        if (err) {
          console.error('Error writing trades.json: ', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }
  
        res.json({ message: 'Trade added successfully' });
      });
    });
  });
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
