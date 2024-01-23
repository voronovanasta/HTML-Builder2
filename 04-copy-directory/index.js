const fs = require('fs'); 
const path = require('path'); 

function copyDir (){
    fs.mkdir(path.join(__dirname, 'files-copy'),
    { recursive: true },
    (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('Directory created successfully!');
    });

fs.readdir(path.resolve(__dirname, "files"),{
    withFileTypes: true}, (err, files) => { 
  if (err) 
    console.log(err); 
  else { 
    files.forEach(file => {
        let filePath = file.path + "\\" + file.name;
        fs.copyFile(path.resolve(__dirname, filePath), path.resolve(__dirname, "files-copy" + "\\" + file.name), (err) => {
            if (err) {
                console.log("Error Found:", err);
            }
            else {
                console.log("success")
            }
        });
    }) 
  } 
}) 
}
copyDir()