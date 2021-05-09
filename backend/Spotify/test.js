
const axios = require('axios');
const query = require("../db/queries");
const spotify = require("../Spotify/spotifyHandler")

const token = "BQCkYQE-oCGCR9vmZNZMya6im9CpNQX4zj-uc1LEcyQeBfbfDuo136OBu1iJSV7i36O0BgDT3kLf83SRlYYbipa0nSzFpE4lE1WBlVgw9YokLuDVcCA8F_ZDDgrPTQWIATuWIfNiz4_Sml1YS6jc4auxFvrRNgPbIHgIdFfu4jl8Q5L3SfAzP09H0OjfWYMebaaxS8-KQLUVCojlkMUEghH6OvOQ4yWe3xljrHLrZj-81-tpgNgbWZEoNMYZKzGcTujhkQ9YEVndYPSzeiznMw";


spotify.getDevices(token);
spotify.playSong(token,"7F8RNvTQlvbeBLeenycvN6")