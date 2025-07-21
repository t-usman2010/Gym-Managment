// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

const users = [
  {
    user: {
      Name: "Taha",
      UserId: "t.usman",
      Pass: "1234",
      Package: "Deluxe",
      Since: "19/2/2025",
      Email: "taha@example.com",
      City: "Islamabad"
    }
  },
  {
    user: {
      Name: "Ali",
      UserId: "ali123",
      Pass: "5678",
      Package: "Standard",
      Since: "10/1/2024",
      Email: "ali@example.com",
      City: "Lahore"
    }
  }
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
