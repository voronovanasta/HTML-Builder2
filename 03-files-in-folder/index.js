const fs = require('fs'); 
const path = require('path'); 
  
fs.readdir(path.resolve(__dirname, "secret-folder"),{
    withFileTypes: true}, (err, files) => { 
  if (err) 
    console.log(err); 
  else { 
    files.forEach(file => {
        if(file.isFile()){
            let result = file.name.split('.')[0] + " - " + path.extname(file.name).slice(1) + " - ";
            //let filePath = file.path + "\\" + file.name;
            let filePath = path.join(__dirname, 'secret-folder', file.name);
        fs.stat(filePath, (err, stats) => {
            if (err) {
              console.error(err);
            }
           result += stats.size;
           console.log(result);
          })
        }              
    }) 
  } 
}) 