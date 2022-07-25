
import Player from '@vimeo/player';
import lodash from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
    let realTime = player.timeupdate;
    console.log('played the video!');
});


player.getVideoTitle().then(function (title) {
    console.log('title:', title);
});

localStorage.setItem("videoplayer-current-time", "realTime");

player.setCurrentTime(30.456).then(function (seconds) {

}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:

            break;
    }
});

document.addEventListener('iframe', lodash(player.setCurrentTime, 600));