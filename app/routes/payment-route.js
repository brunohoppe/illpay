module.exports = function(app, db) {
  app.get('/payment', (req, res)=> {
    db.collection('payments').find().toArray((err, result) => {
      if(err){
        res.send({'error': err});
      } else {
        res.send(result);
      }
    });
  });
  app.post('/payment', (req, res) => {
    const payment = req.body;
    db.collection('payments').insert(payment, (err,result) => {
      if(err) {
        res.send({'error': err});
      } else {
        res.send(result.ops[0]);
      }
    });
  });
}