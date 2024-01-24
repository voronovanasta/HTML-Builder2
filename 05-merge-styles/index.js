const fs = require('fs'); 
const path = require('path'); 
const arr = []
const output = fs.createWriteStream(path.join(__dirname, "project-dist", "bundle.css"));
  
fs.readdir(path.resolve(__dirname, "styles"),{
    withFileTypes: true}, (err, files) => { 
  if (err) 
    console.log(err); 
  else { 
    files.forEach(file => {
        if(file.isFile() && path.extname(file.name).slice(1) === "css"){
            let filePath = path.join(__dirname, 'styles', file.name);
           console.log(file.name);
           let input = fs.createReadStream(filePath, "utf-8");
           input.pipe(output);


  }
})
        }              
    }) 
