var str = 'hello world';

console.log( str )

( function ( global ) {

   console.log( global );
   console.log('test bug merge -2')

} )(new function (checkout) {

   var a = 123;
    this.checkout = checkout + 'master:123456'


} );

