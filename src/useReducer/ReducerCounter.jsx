import { useReducer } from "react";

export const ReducerCounter = () => {
  // useReducer: state yönetiminin useState ile birlite yönetilmesi zor olduğu durumlarda kullanılır.
  // 2 parametre ister. 1-) reducer(fonksiyon): state'in nasıl değişeceğine karar veren fonksiyon 2-) initialState: Başlangıç değeri
  const initialState = {
    count: 0,
  };
  const reducer = (state, action) => {
    // console.log(action.type);
    // console.log(state);
    switch (action.type) {
      case "ARTTIR":
        return { ...state, count: state.count + 1 };
      case "AZALT":
        return { ...state, count: state.count - 1 };
      case "SIFIRLA":
        return { ...state, count: 0 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>useReducer ile Sayaç</h1>
      <div className="count">
        <button onClick={() => dispatch({ type: "ARTTIR" })}>Arttır</button>
        <span>{state.count}</span>
        <button onClick={() => dispatch({ type: "AZALT" })}>Azalt</button>
        <button onClick={() => dispatch({ type: "SIFIRLA" })}>Sıfırla</button>
      </div>
    </>
  );
};
