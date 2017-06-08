// Load the module dependencies
const config = require('./config');
const mongoose = require('mongoose');

// Define the Mongoose configuration method
module.exports = function() {
	// Use Mongoose to connect to MongoDB
	const d_b = mongoose.connect(config.d_b);

	// Load the 'User' model
	require('../server/models/user.server.model');

	// Return the Mongoose connection instance
	return d_b;
};
