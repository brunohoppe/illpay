module.exports = function(app, db) {
  app.get('/category', (req, res)=> {
    db.collection('category').find().toArray((err, result) => {
      if(err){
        res.send({'error': err});
      } else {
        res.send(result);
      }
    });
  });
  app.post('/category', (req, res) => {
    const category = req.body;
    db.collection('category').insert(category, (err,result) => {
      if(err) {
        res.send({'error': err});
      } else {
        res.send(result.ops[0]);
      }
    });
  });
}
