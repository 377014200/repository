var str = 'hello world';

console.log( str )

( function ( global ) {

   console.log( global );


} )(new function (checkout) {

    this.checkout = checkout + 'master:123456'

} );

