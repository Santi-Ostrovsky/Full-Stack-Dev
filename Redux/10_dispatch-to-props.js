/*
MAP DISPATCH TO PROPS

Recibe como parámetro el método 'dispatch()' (callback) y retorna un objeto cuyas propiedades van a ser los cambios necesarios de estado en el componente, y los valores van a ser un llamado a 'store.dispatch([prop])'.

- Quiero hacer algún cambio en el Store? (Y)
    [opción 1] --> mapDispatchToProps()
        - recibe: dispatch --> retorna: {f() {dispatch([action/action-creator])}}
    [opción 2] --> mapDispatchToProps()
        - recibe: dispatch --> retorna: bindActionCreators([action-creators], dispatch)

*/

// CASO DE UN CONTADOR

/* REDUCER
const initialState = { count: 0, loading: false, post: {} }

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }
    case 'DECREMENT':
      return { ...state, count: state.count - 1 }
    case 'RESET':
      return { ...state, count: 0 }
    default:
      return {...state}
  }
}       */

// COMPONENTE CONTADOR
const mapDispatchToProps = (dispatch) => {
  return {
    increment: function () {
      dispatch(increment());
    },
    // SI INCREMENT TOMARA UN VALOR, SE PARA POR PARÁMETRO 'N'
    // increment: function (n) {
    //   dispatch(increment(n));
    // },
    decrement: function () {
      dispatch(decrement());
    },
    reset: function () {
      dispatch(reset());
    },
  };
};

// --------------------------------------------------------------------
