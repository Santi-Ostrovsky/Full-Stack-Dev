// JSX es una extension de la sintaxis de javascript.
// Produce elementos de React.



// En el ejemplo a continuación, declaramos una variable llamada name y luego la usamos dentro del JSX envolviéndola dentro de llaves:

// const name = 'Josh Perez';
// const element = <h1>Hello, {name}</h1>;




// Puedes poner cualquier expresión de JavaScript dentro de llaves en JSX. Por ejemplo, 2 + 2, user.firstName, o formatName(user) son todas expresiones válidas de Javascript.

// En el ejemplo a continuación, insertamos el resultado de llamar la función de JavaScript, formatName(user), dentro de un elemento <h1>.

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };

// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );


// Después de compilarse, las expresiones JSX se convierten en llamadas a funciones JavaScript regulares y se evalúan en objetos JavaScript.

// Esto significa que puedes usar JSX dentro de declaraciones if y bucles for, asignarlo a variables, aceptarlo como argumento, y retornarlo desde dentro de funciones:

// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, {formatName(user)}!</h1>;
//   }
//   return <h1>Hello, Stranger.</h1>;
// }
