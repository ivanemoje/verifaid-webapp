const allEntries = (req, res, db) => {
      
    console.log('Entries requested by', req.connection.remoteAddress);
  
      db.select('*').from('gdt_extract')
          .then(entry => {
              if (entry.length) {
                  res.json(entry)
              } else {
                  res.status(404).json('Not found');
              }
          })
          .catch(err => res.status(400).json("Error getting entries"))
      
  }

  module.exports = {
    allEntries 
  }


  