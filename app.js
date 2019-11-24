const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');

// Error controller
const errorController = require('./controllers/error');

// Views template with EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Body-Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Public static assets
app.use(express.static(path.join(__dirname, 'public')));

// Routes with filtering paths
app.use('/admin', adminRoutes);
app.use('/', shopRoutes);

// Handling Errors
// Error 404 status for 'Page not found'
app.use(errorController.get404);

// Server Port/Domain
app.listen(3000, () => {
    console.log('Server listening to port 3000');
});