var str = 'hello world';

console.log( str )

( function ( global ) {

   console.log( global );
   console.log('test bug merge')

} )(new function (checkout) {

    this.checkout = checkout + 'master:123456'


} );

