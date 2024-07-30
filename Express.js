const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// POST route to create a new category
app.post('/api/categories', (req, res) => {
    const { name } = req.body;

    // Here you would typically save the new category to your database
    // For this example, let's assume you have a Category model

    Category.create({ name })
        .then(category => {
            res.status(201).json(category);
        })
        .catch(err => {
            res.status(400).json({ error: 'Failed to create category' });
        });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});