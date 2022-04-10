const EventEmitter = require('events');

class Upload extends EventEmitter {
    startUpload() {
        console.log('start uploded file ');

        setTimeout(() => {
            this.emit('uploadFinish', {
                fastPart: '30GB',
                secondPart: '60GB',
            });
        }, 3000);
    }
}

module.exports = Upload;
