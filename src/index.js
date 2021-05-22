import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./styles/styles.scss";
import "normalize.css/normalize.css";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

import AppRouter from "./routers/AppRouter";

const store = configureStore();

store.dispatch(addExpense({ description: "Water bill", amount: 4500 }));
store.dispatch(addExpense({ description: "Gas bill" }));
// store.dispatch(setTextFilter("water"));

// setTimeout(() => {
//     store.dispatch(setTextFilter("bill"));
// }, 3000);


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
// const Info=(props)=>(
//     <div>
//         <h1>Info</h1>
//         <p>The info is {props.h}</p>
//     </div>
// )

// const WithAdminWarning=(WrappedComponent)=>{
//     return(props)=>(
//         <div>
//             <p>this is private</p>
//             <WrappedComponent h={props.info}/>
//             <p>{props.info}</p>
//         </div>
//     )
// }
// const Admin=WithAdminWarning(Info);
// const user={
//     name:"jashan",
//     age:24
// }

// console.log({...user})

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
