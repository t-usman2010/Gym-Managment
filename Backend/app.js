// server.js (Express Admin Panel - With HTML Frontend)
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Hardcoded admin credentials
const ADMIN = { username: 'admin', password: 'admin123' };

// In-memory users list
let members = [
  {
    user: {
      Name: "Taha",
      UserId: "t.usman",
      Pass: "1234",
      Package: "Deluxe",
      Since: "19/2/2025",
      Email: "taha@example.com",
      Started: "19/2/2025",
      Expird: "19/3/2026"
    }
  }
];

// Admin login check (simple and fake session)
app.post('/admin-login', (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN.username && password === ADMIN.password) {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Get all members
app.get('/members', (req, res) => {
  res.json(members);
});

// Add new member
app.post('/add-member', (req, res) => {
  const newMember = req.body;
  members.push({ user: newMember });
  res.json({ success: true, members });
});

// Serve index.html as home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Admin panel backend running on http://localhost:${PORT}`);
});
