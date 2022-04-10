const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('uploadFinish', ({ fastPart, secondPart }) => {
    console.log(`finish ${fastPart} and ${secondPart} you can save it`);
});

setTimeout(() => {
    emitter.emit('uploadFinish', {
        fastPart: '30GB',
        secondPart: '60GB',
    });
}, 3000);
