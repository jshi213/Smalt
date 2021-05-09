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
  var host = await query.createNewHost(accessAndRefreshTokens, hostUserName);
  console.log(host);
  if (host) {
    console.log(host);
    res.status(200).send(hostUserName);
  }
});

router.post("/new", async (req, res) => {
  console.log("endpoint req");
  hostUsername = req.body.userName;
  console.log(hostUsername);
  var host_id = await query.getHostById(hostUsername);
  var code = await query.createNewRoom(host_id, req.body.name);
  var trackToBePlayed = {
    id: "0",
  };
  console.log("code");
  console.log(code);
  var accessToken = await query.getAccessToken(code);
  console.log(accessToken);
  await spotify.pollPlayback(accessToken, trackToBePlayed);
  //var playbackPoller = window.setInterval(spotify.pollPlayback, 1000, "accesstoken", trackToBePlayed);
  res.status(200).send(code);
});

module.exports = router;