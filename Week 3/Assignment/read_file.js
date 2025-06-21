 let fs=require('fs');

function read_file(filepath,callback){
    fs.readFile(filepath,'utf8',(err,data)=>{
        if(err){
            return callback(err,null);
        }
        callback(null,data);
    });
}

read_file('example.txt',(err,content)=>{
    if(err){
        console.error('Error reading file:',err.message);
    }else{
        console.log('File content: \n',content);
    }
});
