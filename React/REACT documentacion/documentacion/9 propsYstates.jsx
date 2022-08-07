
                    //    PROPIEDADES

// Las props son la colección de datos que un componente recibe del contenedor padre, y que pueden usarse para definir los elementos de React que retornará el componente. En términos prácticos, si un componente necesita recibir información para funcionar, la recibe vía props.

// SON DE SOLO LECTURA
// SON INMUTABLES
// VAN DE PADRE A HIJO
// SE PUEDE ENVIAR CUALQUIER TIPO DE DATOS


//////////////////////////////////////////////////////////////////////////////////
                        // ESTADOS

// Un estado en React es un almacén de datos mutable de componentes y que además son autónomos. O sea, el estado pertenece una clase autónoma que cualquiera pueda importar y usar en su aplicación.

// Las propiedades y los estados son ambos atributos de una clase, por eso puedes utilizar this.state y/o this.pros, pero  tienen propósitos diferentes: mientras las propiedades son inmutables, los valores de los estados pueden cambiar. Son mutables.

// Entonces tenemos que, por un lado los estados actúan en el contexto del componente y por otro, las propiedades  crean una instancia del componente cuando le pasas un nuevo valor desde un componente padre.

// Los valores de las propiedades los pasas de padres a hijos y los valores de los estados los defines en el componente, no se inician en el componente padre, y ni puedes llamar setState() en el render().

// La típica utilización de los estados sería en tu componente de reloj, en que necesitas actualizar periódicamente la vista con los segundos.

// Para acceder al estado, debes hacerlo por el nombre del estado, que es una propiedad de objeto del objeto this.state. Algo muy parecido a como hacías con las propiedades

// EJEMPLO:
// this.state.valorCampo  (en las propiedades harías this.props.varlorCampo)

// ¿Cómo establezco los valores iniciales?

// Como hemos visto anteriormente, para iniciar el estado, lo haces mediante this.state y este debe ser ser un objeto que está en el constructor(). Además, es importante invocar a super() con las props. Si no, no funciona la lógica en el padre. Es una forma de asegurar que el constructor() del padre se ejecute.

// ¿Un ejemplo?
// constructor(props){

//  super(props)

//  this.state = {horaActual: (new date()).toLocaleString()}

// }

// ¿Cómo actualizo los estados?
// Actualizar los estados es tan sencillo como declarar this.setState(data, callback). Solamente debes recordar que React fusiona los datos con los estados existentes y posteriormente llama el render().

// Además, hay que tener en cuenta que setState() funciona de forma asíncrona - this.state no está inmediatamente disponible después de llamar setState(),- por eso es importante tener el callback en el setState(). Es una forma de asegurar que el nuevo estado está disponible.

// Por cierto, cambiar el estado sin utilizar setState() está considerado antipatrón. 

// ¿Qué más debería saber?
// setState() actualiza solamente el estado que quieres. No siempre actualiza todo el objeto. Por ejemplo, si en un objeto tienes diferentes estados, como el nombre, apellido, edad y solamente quieres actualizar la edad, lo único que tienes que hacer es algo como this.setState({edad:24}); Los demás valores quedarán igual.

// ¿Debo utilizar siempre los estados?
// Te he hecho leer todo esto para llegar hasta aquí y decirte que no. Y hay más aún; suena contradictorio, pero según lo que he leído, lo ideal, la forma preferida en React es utilizar lo máximo posible componentes sin estados.  

// ¿Y eso? :-/
// Pues, los componentes sin estados son más predecibles y más “declarativos”. Seguro que tendrás una aplicación con muchos componentes. Esto te permite mayor flexibilidad y mejor diseño. ¿Estás de acuerdo?