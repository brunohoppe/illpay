const paymentRoutes = require('./payment-route');

module.exports = function(app, db){
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../index.html'));
    });
    paymentRoutes(app,db);
}