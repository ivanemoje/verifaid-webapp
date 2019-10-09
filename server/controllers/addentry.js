const addEntry =  (req, res, db) => {
    const {  
          manifest_name,
          begin_date,
          end_date,
          servedHH,
          servedPopn,
          plannedHH,
          plannedPopn,
          percent_HH,
          percent_Popn,
          hostname, 
          settlement,
          cycle, 
          cycle_year,
          fdp,
          modality,
          area,
          field
    } = req.body;
  
    // console.log(req.body);
  
  
    if (  !manifest_name ||
          !begin_date ||
          !end_date ||
          !hostname ||
          !settlement ||
          !cycle ||
          !cycle_year ||
          !fdp ||
          !modality ||
          !servedHH ||
          !servedPopn ||
          !plannedHH ||
          !plannedPopn ||
          !percent_HH ||
          !percent_Popn ||
          !area ||
          !field 
          )
    {
      return res.status(400).json('Incorrect form submission');
    }
  
    db.transaction ( trx => {
      trx.insert ({
        manifest_name : manifest_name,
        begin_date : begin_date,
        end_date : end_date,
        servedHH : servedHH,
        servedPopn : servedPopn,
        plannedHH : plannedHH,
        plannedPopn : plannedPopn,
        percent_HH : percent_HH,
        percent_Popn : percent_Popn,
        hostname : hostname, 
        settlement : settlement, 
        cycle : cycle, 
        cycle_year : cycle_year, 
        fdp : fdp, 
        modality : modality,
        area : area,
        field : field,
        entry_date : new Date()
      })
      .into('gdt_extract')
      .then(trx.commit)
      .then(trx.rollback)
    })
     .catch (err => res.status(400).json("Unable to Add Entry"));
     console.log('Entries submitted by', req.connection.remoteAddress);
  
     return res.status(200).json ("Entry submitted").end();
  
}


  module.exports = {
    addEntry
  }


