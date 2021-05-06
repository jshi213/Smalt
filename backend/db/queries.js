var Room = require("./schema.js");

exports.createNewRoom = async function (token, hostName) {
  codee = makeCode(6);
  const room = new Room({
    host: {
      userName: hostName,
      Tokens: token,
    },
    code: codee,
    playlist: {
      songs: [],
    },
  });

  await addData(room);
  return codee;
};

exports.addSongToPool = async function (song, roomId) {
  room = await getRoomById(roomId);
  room.playlist.songs.push(song);
  await room.save();
};

exports.addUserToRoom = async function (user, roomId) {
  room = await getRoomById(roomId);
  room.users.push(user);
  room.save();
};

exports.clearDB = async function () {
  const roomsGone = await Room.deleteMany({});
  console.log(`Cleared database (removed ${roomsGone.deletedCount} rooms).`);
};

async function addData(room) {
  const result = await room.save();
  console.log(`Added room to the database.`);
  console.log(` host- ${result.host} (code: ${result.code})`);
}

function makeCode(length) {
  var result = [];
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result.push(
      characters.charAt(Math.floor(Math.random() * charactersLength))
    );
  }
  return result.join("");
}

async function getRoomById(roomId) {
  const room = await Room.findOne({ code: roomId });
  return room;
}

exports.getRoomById = async function (roomId) {
  const room = await Room.findOne({ code: roomId });
  return room;
}

//Retrieves song by spotify id
async function getSongBySpotifyID(roomId){
  const room = await getRoomById(roomId);
  const spotifyid = await room.playlist.songs.spotifyid;
  return spotifyId;
}

//Query to remove song from playlist by Spotify id
exports.removeSongfromPool = async function (id, roomId) {
  room = await getRoomById(roomId);
  room.playlist.songs.deleteOne(id);
  await room.save();
};


