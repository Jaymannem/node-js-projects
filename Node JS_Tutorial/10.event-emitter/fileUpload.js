const EventEmitter = require("events")

class FileUploader extends EventEmitter {
  upload(file) {
    console.log(`Starting upload for ${file}...`);

    let progress = 0; 

    const interval = setInterval(() => {
        progress += 20;
        this.emit('progress', progress)
        if(progress === 100) {
            clearInterval(interval);
            this.emit('done', `${file} uploaded successfully!`)
        }
    }, 1000)
  }
}

const uploader = new FileUploader();

uploader.on('progress', (percent)=> {
    console.log(`Upload progress: ${percent}%`)
})

uploader.on('done', (message)=> {
    console.log(message)
});

uploader.upload('myFile.txt');