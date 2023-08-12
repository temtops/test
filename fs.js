const fs = require('fs');
const {resolve} = require('path')
const {EOL,userInfo} = require('os');
const { encode } = require('punycode');
// fs.appendFileSync(resolve('./resources/names.txt'), `\n` + 'Temitope')
// fs.appendFile(resolve('./resources/course.txt'),EOL + "HTML" + EOL + "CSS", (err) => console.log(err?.message || "File Appended"))
// console.log(fs.readFileSync(resolve('resources','names.txt'), 'utf-8'))
// console.log(fs.readFile(resolve('./resources/names.txt'), 'utf-8', (err, data)=>console.log(err?.message || data)))
// fs.mkdir('./resources/images',(err)=>{console.log(err?.message||"Folder Created")})
// fs.writeFile(resolve('resources','programmes.txt',), EOL +'Front web Development', {flag: 'a'}, (e)=>console.log(e?.message || "File written Successfully"))
fs.open(resolve('resources', 'programmes.txt'), 'r', (err,fd)=>{
    console.log(err?.message)||fs.read(fd, (err,num,buffer)=> console.log(buffer.toString('utf-8')))
})
fs.unlinkSync(resolve('resources','course.txt'))
// console.log(userInfo())