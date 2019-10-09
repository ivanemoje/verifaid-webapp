const latestEntries = (req, res, pool) => {
      
    console.log('Latest entries requested by', req.connection.remoteAddress);
  
    query_run = `SELECT 
              a.manifest_name,  a.settlement,  a.fdp, a.area, a.field, a.modality, a.begin_date, a.end_date, a.servedHH, a.servedPopn, 
              a.plannedHH, a.plannedPopn, a.percent_HH, a.percent_Popn, a.hostname,
              a.cycle, a.cycle_year,   a.entry_date 
              FROM gdt_extract a 
              LEFT OUTER JOIN gdt_extract b 
              ON a.manifest_name = b.manifest_name 
              AND a.entry_date < b.entry_date 
              WHERE b.manifest_name IS NULL ORDER BY a.entry_date desc`;
  
    pool.query(query_run, function (error, results, fields) {
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
    latestEntries 
  }


  