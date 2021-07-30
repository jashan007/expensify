// Expenses Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
      //----------------OR-------------
      //return state.concat(action.expense);

      //action.push() changes current state which is not good .but action.concat and ...state returns new array.
      // It do not manipulate current state.But prefer spread operator then .Refer to Spread operator video
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
      //filter returns new array.
      //Or
      //return state.filter((expenses.id)=> { return expenses.id !== action.id } )
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        };
      });
    default:
      return state;
  }
};





//for referene only..means for imagining how state looks inside the mind

const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
