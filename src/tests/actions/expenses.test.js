import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";
import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("123abc", { note: "new note value" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: { note: "new note value" },
  });
});

// test("should setup add expense action object with provided values", () => {
//   const action = addExpense({
//     description: "hello",
//     note: "new note",
//     amount: 789,
//     createdAt: 456,
//   });
//   expect(action).toEqual({
//     type: "ADD_EXPENSE",
//     expense: {
//       id: expect.any(String),
//       description: "hello",
//       note: "new note",
//       amount: 789,
//       createdAt: 456,
//     },
//   });
// });
//OR
test("should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "hello",
    note: "new note",
    amount: 789,
    createdAt: 456,
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      ...expenseData,
    },
  });
});

test("should setup add expense action object with provided values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
    },
  });
});

//for objects and arrays ,we use toequal and for all other things we use tobe
