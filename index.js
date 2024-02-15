const path = require('path')
const fs = require('fs')
const dirpath = path.join(__dirname,"crud")
const filepath = `${dirpath}/apple.txt`

fs.readFile(filepath,'utf8',(err,item)=>{
console.log(item);
})
fs.writeFileSync(folderpath,"this is apple")

fs.appendFile(filepath,"who are you",()=>{
    if(!err) console.log('file is updated');
})

fs.rename(filepath,`${dirpath}/fruit.txt`,(err)=>{
    if(!err) console.log('file has been renamed');
    
})

fs.unlinkSync(`${dirpath}/fruit.txt`,(err)=>{
    if(!err) console.log('file has been deleted');
    
})