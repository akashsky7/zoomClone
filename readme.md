ZOOM CLONE

things I did in sequence:
1. server.js
2. room.ejs
3. create room id
4. ability to view our own video
5. ability to allow others to stream video
6. styling
7. ability to create messages
8. add mute button
9. add stop video button

*****************************************************************


server.js - localhost:3030

used uuid v4 to create room id

navigator.mediaDevices.getUserMedia was used for the permissions and ability to view our own video

for ability for other to stream video:
    we used socket.io so that several people can connect to one channel
    user will join via roomid we created using uuid
    we used peer.js to generate userid
    when a user will join the room, his userid will be known

