/*
MAP STATE TO PROPS

Recibe como parámetro al estado global, retornando un objeto que indica como propiedades, cuáles van a ser las variables a utilizarse en el componente, y como valores, los valores que van a tomar del estado en Store para inicializar tales variables.

- Quiero algo del store? (Y) --> mapStateToProps()
    - recibe: state --> retorna: {keys del estado que necesite}
*/

// CASO DE UN CONTADOR

const mapStateToProps = (state) => {
  return {
    counter: state.count,
  };
};

// --------------------------------------------------------------------
