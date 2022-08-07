/*

ACTIONS

Las acciones son un bloque de información que envía datos desde la aplicación al store. Son la única fuente de información para le store, y se envían al mismo a través del método 'store.dispatch()'.

    - SIEMPRE TIENEN UNA PROP 'TYPE'

--------------------------------------------------------------------

ACTION CREATORS

Son funciones que devuelven una ACCIÓN.

En el caso del ejemplo, si se quisiera que los depósitos y los retiros no sean de $10 fijos, puede usarse un ACTION CREATOR para que 'dispatch()' envíe al reducer un valor personalizado (en este caso 'amount') y que reducer lo tome como tal para hacer cambios en el estado (en este caso, account: state.account +/- action.amount).
*/

function addMoney(amount) {
  // action creator --> función creadora de acciones. Por lo general empiezan con 'add'
  return { type: "INCREMENT", amount };
}

// Wallet.jsx
function Wallet() {
  // MODIFICA EL ESTADO GLOBAL
  return (
    <div>
      <button onClick={() => dispatch(addMoney(10))}>Deposit $10</button>
      <button onClick={() => dispatch(addMoney(-10))}>Withdraw $10</button>
    </div>
  );
}

// --------------------------------------------------------------------

/*
ACTION --> {type: 'INCREMENT', [...]}

ACTION CREATOR --> increment()
*/
