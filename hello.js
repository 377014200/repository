var str = 'hello world';

console.log( str )

( function ( global ) {

   console.log( global );
   console.log('test bug merge -1')

} )(new function (checkout) {

    this.checkout = checkout + 'master:123456'


} );

