const PDFDocument = require('pdfkit');
const fs = require('fs');

const pdfCreation = (req, res, pool) => {
    const {  
        input
    } = req.body;

    //Add this form  validation in the front end please
    // if ( !input )
    // {
    //     return res.status(400).json('Incorrect form submission');
    // }
      
    console.log('Post for',req.body[0].input ,'made by', req.connection.remoteAddress);
    
    search_query = req.body;
    // format = '%'+search_query[0].input+'%';
    console.log(search_query);

    
   query_run = `
   SELECT manifests_data.Assistance_Location, manifests_data.Registration_Group_ID, tbname.beneficiary_name AS beneficiary_name, tba.account_no AS account_no, manifests_data.Group_Size 
      FROM manifests_data INNER JOIN(SELECT DISTINCT(Registration_Group_ID), account_no FROM beneficiary_data_bank) tba ON manifests_data.Registration_Group_ID = tba.Registration_Group_ID INNER JOIN(SELECT Registration_Group_ID, beneficiary_name FROM beneficiary_data) tbname ON manifests_data.Registration_Group_ID = tbname.Registration_Group_ID 
      WHERE manifests_data.manifest_id = '481333863' 
      OR manifests_data.manifest_id = '172951826' 
      OR manifests_data.manifest_id = '173367114' 
      OR manifests_data.manifest_id = '195982358' 
      OR manifests_data.manifest_id = '395251355'
      OR manifests_data.manifest_id = '581496168'
      AND manifests_data.Group_Size != 0 AND manifests_data.status = 'active' ORDER BY manifests_data.Group_Size ASC limit 10`;


  
    // pool.query(query_run, [format, format, format, format], function (error, results, fields) {
    pool.query(query_run, function (error, results, fields) {
      if (error) throw error;
      if (results.length) {
            // res.json (results);
            const doc = new PDFDocument()
            let filename = 'manyanga';
            // Stripping special characters
            filename = filename + '.pdf'
            // Setting response to 'attachment' (download).
            // If you use 'inline' here it will automatically open the PDF
            res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"')
            res.setHeader('Content-type', 'application/pdf')
            const content = res.json (results)
            doc.y = 300
            doc.text(content, 50, 50)
            fs.createWriteStream('/file.pdf')
            doc.pipe(res)
            doc.end()
            }
      else {
        res.status(404).json('Not found');
        }      
    })
}
  module.exports = {
    pdfCreation 
  }


  