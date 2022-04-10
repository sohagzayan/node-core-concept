const Upload = require('./Upload');

const upload = new Upload();
upload.on('uploadFinish', ({ fastPart, secondPart }) => {
    console.log(`finish ${fastPart} and ${secondPart} you can save it`);
});

upload.startUpload();
