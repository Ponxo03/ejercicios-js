const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

function gamers$$(){
    const key = document.getElementById('streamerInput').value;
    const gamers$$ = streamers.filter(streamer => 
    streamer.name.toLowerCase().includes(key.toLowerCase));
    console.log(gamers$$);
}
