//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/magsnow'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/magsnow/'}),
);

// Start the app by listening on the default Heroku port
//app.listen(process.env.PORT || 8080);
app.listen(process.env.ALWAYSDATA_HTTPD_PORT, process.env.ALWAYSDATA_HTTPD_IP, function(){
  console.log("Server is started");
  //console.log(process.env.ALWAYSDATA_HTTPD_PORT);
  //console.log(process.env.ALWAYSDATA_HTTPD_IP);
  
  });