// #### IMPORTS

// Importar CreateStore
const createStore = require("redux").createStore;
// Se importa en formato CommonJS ya que se está trabajando con Node

// Importar CombineReducers
const combineReducers = require("redux").combineReducers;

// -----------------------------------------------------------------

// #### ACTIONS

// Definir Actions

// BUY
const BUY_PS5 = "BUY_PS5";
const BUY_XBOX = "BUY_XBOX";
const BUY_POKEMON = "BUY_POKEMON";
const BUY_MARIO = "BUY_MARIO";

// RETURN
const RETURN_PS5 = "RETURN_PS5";
const RETURN_XBOX = "RETURN_XBOX";
const RETURN_POKEMON = "RETURN_POKEMON";
const RETURN_MARIO = "RETURN_MARIO";

// Definir Action-Creators
const buy_game = (game, cant) => {
  return {
    type: `BUY_${game.toUpperCase()}`,
    payload: cant,
  };
};

const return_game = (game, cant) => {
  return {
    type: `RETURN_${game.toUpperCase()}`,
    payload: cant,
  };
};

const buy_console = (console, cant) => {
  return {
    type: `BUY_${console.toUpperCase()}`,
    payload: cant,
  };
};

const return_console = (console, cant) => {
  return {
    type: `RETURN_${console.toUpperCase()}`,
    payload: cant,
  };
};

// -----------------------------------------------------------------

// #### REDUCERS

// Definir Estados Iniciales

// JUEGOS
const default_games_state = {
  pokemon: 10,
  mario: 10,
};

// CONSOLAS
const default_consoles_state = {
  ps5: 30,
  xbox: 30,
};

// Definir Reducers

// JUEGOS
const games = (state = default_games_state, action) => {
  switch (action.type) {
    // POKEMON
    case BUY_POKEMON:
      return {
        ...state,
        pokemon: state.pokemon - action.payload,
      };
    case RETURN_POKEMON:
      return {
        ...state,
        pokemon: state.pokemon + action.payload,
      };
    // MARIO
    case BUY_MARIO:
      return {
        ...state,
        mario: state.mario - action.payload,
      };
    case RETURN_MARIO:
      return {
        ...state,
        mario: state.mario + action.payload,
      };
    default:
      return { ...state };
  }
};

// CONSOLAS
const consoles = (state = default_consoles_state, action) => {
  switch (action.type) {
    // POKEMON
    case BUY_PS5:
      return {
        ...state,
        ps5: state.ps5 - action.payload,
      };
    case RETURN_PS5:
      return {
        ...state,
        ps5: state.ps5 + action.payload,
      };
    // MARIO
    case BUY_XBOX:
      return {
        ...state,
        xbox: state.xbox - action.payload,
      };
    case RETURN_XBOX:
      return {
        ...state,
        xbox: state.xbox + action.payload,
      };
    default:
      return { ...state };
  }
};

// Combinar Reducers
const rootReducer = combineReducers({
  games,
  consoles,
});

// -----------------------------------------------------------------

// #### STORE

// Definir Store
const store = createStore(rootReducer);

// Imprimir en consola el estado inicial
console.log(`Estado Inicial:`, store.getState());

// Imprimir en consola todos los cambios de estado
store.subscribe(() => console.log(`Nuevo Estado -→`, store.getState()));

// Mensaje a través de ACTIONS
store.dispatch(buy_game("pokemon", 3));
store.dispatch(return_game("pokemon", 2));
store.dispatch(buy_game("mario", 5));
store.dispatch(return_game("mario", 3));

store.dispatch(buy_console("ps5", 8));
store.dispatch(return_console("ps5", 1));
store.dispatch(buy_console("xbox", 6));
store.dispatch(return_console("xbox", 2));
