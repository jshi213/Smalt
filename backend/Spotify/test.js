
const axios = require('axios');
const query = require("../db/queries");
const spotify = require("../Spotify/spotifyHandler")

const token = "BQBL5o6eiixDgnBDjVLzKRzUeSly2T_y3OJe40m0uJLRWAdu6BgqbJbd8t_8r5_fTNB-59S0SsH2vkky8RwrjbyUdRw4Y-F6Xgy9LxL2opHN2KSjyU7VptUHixubjEfTODEE8hksE0Ff7L9J3z3dF9pYZQzklJTaUjB8GQK6ggtBlb21XJfHLVMaCuuzOFevIkc";


spotify.getDevices(token);
spotify.playSong(token,"2yI8xyHgyhCXyw0Vq98twb","ffe2a691d09d7e1dcfa8780260a7477738b84d86")