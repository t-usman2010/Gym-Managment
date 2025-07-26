const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = 3001;

// ✅ Replace with your actual MongoDB URI
const MONGO_URI = 'mongodb+srv://taha2010:islamabad%4012731@myfirstproject.0xlsew1.mongodb.net/gymDB?retryWrites=true&w=majority&appName=MyFirstProject';

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Schema & Model
const memberSchema = new mongoose.Schema({
  user: {
    Name: String,
    UserId: String,
    Pass: String,
    Email: String,
    Package: String,
    Since: String,
    Started: String,
    Expird: String
  }
});

const Member = mongoose.model('Member', memberSchema);

// 🟩 Admin login (basic)
app.post('/admin-login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin123') {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// 🟩 Add a new member
app.post('/add-member', async (req, res) => {
  try {
    const newMember = new Member({ user: req.body });
    await newMember.save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Error adding member' });
  }
});

// 🟩 Get all members - FIXED
app.get('/members', async (req, res) => {
  try {
    console.log('Getting members...');
    const members = await Member.find();
    console.log('Found members:', members.length);
    
    // Set proper headers to prevent download
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    res.json(members);
  } catch (err) {
    console.log('Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// 🟩 Get single member by ID (needed for edit button)
app.get('/member/:userId', async (req, res) => {
  try {
    console.log('Getting member:', req.params.userId);
    const member = await Member.findOne({ 'user.UserId': req.params.userId });
    
    if (!member) {
      return res.status(404).json({ error: 'Member not found' });
    }
    
    res.json(member);
  } catch (err) {
    console.log('Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// 🟩 Delete a member
app.delete('/delete-member/:userId', async (req, res) => {
  try {
    await Member.deleteOne({ 'user.UserId': req.params.userId });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting member' });
  }
});

// 🟩 Edit a member
app.put('/edit-member/:userId', async (req, res) => {
  try {
    const updateData = req.body;
    
    // Don't update password if it's "unchanged"
    if (updateData.Pass === 'unchanged') {
      delete updateData.Pass;  // Remove password from update
      
      // Use $set for non-password fields only
      const fieldsToUpdate = {};
      Object.keys(updateData).forEach(key => {
        fieldsToUpdate[`user.${key}`] = updateData[key];
      });
      
      await Member.updateOne(
        { 'user.UserId': req.params.userId },
        { $set: fieldsToUpdate }
      );
    } else {
      // Update all fields including password
      await Member.updateOne(
        { 'user.UserId': req.params.userId },
        { $set: { user: updateData } }
      );
    }
    
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Error updating member' });
  }
});

// 🟩 Serve index.html for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});