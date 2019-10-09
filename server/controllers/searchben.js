const searchBen = (req, res, pool) => {
    const {  
        input
    } = req.body;

    //Add this form  validation in the front end please
    // if ( !input )
    // {
    //     return res.status(400).json('Incorrect form submission');
    // }
      
    console.log('Search for',req.body[0].input ,'made by', req.connection.remoteAddress);
    
    search_query = req.body;
    format = '%'+search_query[0].input+'%'

    
   query_run = `
   select 
    a.Registration_Group_ID,  a.beneficiary_name, a.gender, a.FDP_Site, b.account_no 
   from beneficiary_data a
   inner join beneficiary_data_bank b on a.Registration_Group_ID = b.Registration_Group_ID
   where
   a.beneficiary_name like ?
     or a.Registration_Group_ID like ?
     or a.beneficiary_name like ?
     or b.account_no like ? `;

  
    pool.query(query_run, [format, format, format, format], function (error, results, fields) {
      if (error) throw error;
      if (results.length) {
            res.json (results);
            }
      else {
        res.status(404).json('Not found');
        }      
    })
}
  module.exports = {
    searchBen 
  }


  