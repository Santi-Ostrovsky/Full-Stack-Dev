// Un componente de clase es una clase de javascript que extiende la clase Component de React. Este nos permite guardar su estado y controlar lo que ocurre durante su ciclo de vida, exponiéndonos métodos como componentDidMount o componentWillUnmount .


// class Biology extends React.Component


// class Biology extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             professor: "Franco Cuarterolo"
//             students: props.numberOfStudents
//         }
//     }

//     componentDidMount(){
//         this.startAssignment()
//     }

//     componentWillUnmount(){
//         this.finishAssignment()
//     }

//     render(){
//         return(
//         <div> Biology, Professor: {this.state.professor} </div>
//         )
//     }

// }