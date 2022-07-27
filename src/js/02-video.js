
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

    
player.on('timeupdate', throttle(function () {
    localStorage.setItem('videoplayer-current-time', 'seconds')
}, 1000));
const saveTime = localStorage.getItem('videoplayer-current-time')
if (saveTime !== null) {
    player.setCurrentTime(saveTime)
}
    

    







            
