var express = require('express');
const axios = require('axios');
const query = require("../db/queries");
const spotify = require("../Spotify/spotifyHandler")


var router = express.Router();

router.post("/login", async (req, res) => {
    console.log(`authrequest recieved: ${req.body.authCode}`);
    var accessAndRefreshTokens = await spotify.fetchAccessToken(
      req.body.authCode
    );
    console.log("gotaccessTokens");
    console.log(accessAndRefreshTokens);
    var hostUserName = await spotify.getUsername(accessAndRefreshTokens.accessToken);
    var host = await query.createNewHost(accessAndRefreshTokens,hostUserName);
    console.log(host);
    if (host) {
      console.log(host);
      res.status(200).send(hostUserName);
    }
  });

  router.post("/new", async (req, res) => {
      console.log("zinger")
      console.log(req.body);
      hostUsername = req.body.userName;
      console.log(hostUsername);
      host_id = await query.getHostById(hostUsername);
      code = await query.createNewRoom(host_id, req.body.name)
      res.status(200).send(code);
  });

  router.post("/play", async (req, res) => {
    
    console.log(req.body);
    room = req.body.room;
    const song =await query.highestVotedSong(room)
    console.log(song);
    const token = await query.getAccessToken(room);

    await spotify.playSong(token,song);

});

  module.exports = router;