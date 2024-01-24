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

    fs.readdir(path.resolve(__dirname, "files-copy"),{
        withFileTypes: true}, (err, files) => { 
      if (err) 
        console.log(err); 
      else { 
        files.forEach(file => {
            let filePath = file.path + "\\" + file.name;
            fs.unlink(path.resolve(__dirname, filePath), (err) => {
                if (err) {
                    console.log("Error Found:", err);
                }
                else {
                    console.log("deleted file")
                }
            });
        }) 
      } 
    }) 

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

function copy (){ 
    //console.log(path.join(__dirname, 'files-copy'))
    function rm (){
        console.log('if')
        fs.rmdir(path.join(__dirname, 'files-copy'), { recursive: true }, (err) =>{ 
            console.log(err); 
        })
    }
   
      
    // fs.promises.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }).then(function() { 
    //     console.log('Directory created successfully'); 
    // }).catch(function() { 
    //     console.log('failed to create directory'); 
    // }); 
    
    fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, (err) =>{ 
            if(err){console.log(err)}
            else{
                console.log('created')
            }; 
      });

fs.promises.readdir(path.resolve(__dirname, "files"),{
    withFileTypes: true}).then((files) => {
        files.forEach(file => {
              let filePath = file.path + "\\" + file.name;
              fs.promises.copyFile(path.resolve(__dirname, filePath), path.resolve(__dirname, "files-copy" + "\\" + file.name))
              });
          }) 
        } 


copyDir()




