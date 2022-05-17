let http = require('http');
let formidable = require('formidable');
let fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url == '/fileupload') {
        let form = new formidable.IncomingForm();
        form.parse(req,function (err, fields, files) {
            let oldpath = files.filetoupload.filepath;
            let newpath = 'C:/Users/laksh/' + files.filetoupload.originalFilename;
            fs.rename(oldpath, newpath, (err)=>{
                if(err) throw err;
                res.write('File Uploaded and moved');
                res.end();
            })
        })
    }

    else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write('<form action="fileupload" method = "post" enctype="multipart/form-data">');
        res.write(`<input style="color:tomato; font-size: 20px; margin:5px" type = "file" name="filetoupload"><br>`);
        res.write('<input type = "submit" style="color:red; font-size: 20px;">');
        res.write('</form>');
        return res.end();
    }
})

server.listen(8080);