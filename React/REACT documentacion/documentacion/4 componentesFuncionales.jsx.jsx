


// Un componente funcional es una función que recibe el objeto Props y retorna un ReactNode (un ReactNode puede ser un elemento html, un string, un booleano, entre otros tipos de datos.)
// Estas son simplemente funciones de JavaScript. 

// Estas funciones solo reciben y retornan, por eso tienen que utilizar React Hooks (useState para el estado, useEffect para los ciclos de vida) para imitar las cualidades de un componente de clase.

// const Biology = (props) => { return(<ReactNode />) }


// const Biology = (props) => {
//     const [professor, setProfessor] = React.useState("Franco Cuarterolo");
//     const [students, setStudents] = React.useState(props.numberOfStudents);

//     React.useEffect(()=>{
//             startAssignment()
//             return () => {
//                 finishAssignment()
//             }
//         })

//     return <div> Biology, Professor: {professor} </div>
// }



// Si queremos construir un componente mínimo, simple y sin estado, esto lo ayudará a reducir la cantidad de código utilizado y a aplicar el principio DRY más fácilmente. El componente funcional es una función de JavaScript que devuelve uno o más elementos Jxs.

// Veamos este ejemplo de un Componente de Bulb (Bombilla).

// import React from 'react'

// export default function Bulb({ lampState }) {
//   return lampState ?
//     (<span>
//       <img src={'https://cdn2.iconfinder.com/data/icons/flat-icons-19/512/Light_bulb.png'} width={50} />
//     </span>) :
//     (<span>
//       <img src={'https://img.icons8.com/ios/1600/light-on.png'} width={50} />
//     </span>)
// }
// Aquí, tenemos una función regular, recibe un objeto desestructurado con una propiedad llamada lampState, este se convierte en una variable local y evaluamos si es verdadero o falso para devolver una etiqueta img diferente .

// Ahora, podemos usarlo en el componente Lamp para mostrar cómo pueden funcionar bien juntos.


// import React from 'react'
// import Bulb from 'Bulb'

// export default class Lamp extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       isTurnedOn : false
//     }
//   }

//   switchLight = () => {
//     this.setState({
//       isTurnedOn : !this.state.isTurnedOn
//     })
//   }

//   render() {
//     return (
//       <div>
//         <Bulb lampState={this.state.isTurnedOn} />
//         <p>The lamp is <b>{this.state.isTurnedOn ? 'on' : 'off'}</b></p>
//         <button onClick={this.switchLight}>switch</button>
//       </div>
//     )
//   }
// }
// Eso es todo, cuando hacemos clic en el botón del interruptor, la imagen de la bombilla encendida cambia.