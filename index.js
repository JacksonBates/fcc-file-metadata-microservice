var express = require( 'express' );
var multer = require( 'multer' );
var upload = multer( { dest: 'uploads/'} );

var app = express();

app.set( 'port', ( process.env.PORT || 5000 ));

app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'ejs' );

app.get( '/' , function ( req, res ) {
  res.render( 'pages/index' );
});

app.post( '/', upload.single( 'uploadFile' ), function ( req, res ) {
  var response = req.file;
  console.log( response );
  res.end(JSON.stringify( { size: response.size }));
});

app.listen( app.get( 'port' ), function() {
  console.log( 'Node app is running on port ', app.get( 'port' ));
});
