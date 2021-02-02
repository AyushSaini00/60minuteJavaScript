//Api
const api = 'https://coderadio-admin.freecodecamp.org/api/live/nowplaying/coderadio';

//DOM Elements
const songTitleElement = document.querySelector('.track-title');
const songArtistElement = document.querySelector('.track-artist');
const playerElement = document.getElementById('player');
const selectBitrateElement = document.getElementById('select-bitrate');

const song = {
    bitrate : {},
    url : {}
};

function getSong(){
    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            song.title = data.now_playing.song.title;
            song.artist = data.now_playing.song.artist;

            song.bitrate.high = data.station.mounts[0].bitrate;
            song.url.high = data.station.mounts[0].url;

            song.bitrate.low = data.station.mounts[1].bitrate;
            song.url.low = data.station.mounts[1].url;
        })
        .then(() => {
            displayInfo();
        })
        .catch(error =>{
            songTitleElement.innerText = error.message;
        });
}

function displayInfo(){
    songTitleElement.innerText = song.title;
    songArtistElement.innerText = song.artist;
    let link = changeBitrate();
    if(playerElement.getAttribute('src') != link){
        playerElement.pause();
        playerElement.setAttribute('src', link);
        playerElement.load();
        playerElement.play();
    }
}

function changeBitrate(){
    switch(selectBitrateElement.value){
        case 'normal-128' :
            return song.url.high;
        case 'normal-64' :
            return song.url.low;
        default :
            return;        
    }
}
getSong();
selectBitrateElement.addEventListener('change', getSong);