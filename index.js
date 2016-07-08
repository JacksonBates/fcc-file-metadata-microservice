var express = require( 'express' );
var multer = require( 'multer' );
var upload = multer( { dest: 'uploads/'} );

var app = express();

app.set( 'port', ( process.env.PORT || 5000 ));

app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'ejs' );

app.get( '/' , function ( req, res ) {
  res.render( 'index' );
});



app.listen( app.get( 'port' ), function() {
  console.log( 'Node app is running on port ', app.get( 'port' ));
});
