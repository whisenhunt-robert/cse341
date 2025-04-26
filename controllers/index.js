// Controller function that handles GET requests to the root route.
// Displays the name of someone I know and I'm dating.
const strongPrettyWoman = (req, res, next) => {
    res.send('Marlana Pokorny')
};

// Exports the controller function so it can be used in the routes.
module.exports = { strongPrettyWoman };