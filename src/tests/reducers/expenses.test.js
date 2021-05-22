import expenseReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expenseReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense by if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: -1,
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});

//should add an expense
test("should add expense", () => {
  const expense = {
    id: 456,
    description: "demo",
    note: "demo1",
    amount: 789456,
    createdAt: 123,
  };
  const action = {
    type: "ADD_EXPENSE",
    expense,
  };
  const state = expenseReducer(expenses, action);
  // expect(state).toEqual([expenses[0], expenses[1], expenses[2], expense]);
  expect(state).toEqual([...expenses, expense]);
});

//should edit an expense
test("should edit an expense", () => {
  const amount = 789456;
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[0].id,
    updates: { amount },
  };
  const state = expenseReducer(expenses, action);
  expect(state[0].amount).toBe(amount);
});

//should not edit an expense if expenses not found

test("should not edit an expense if expenses not found", () => {
  const amount = 789456;
  const action = {
    type: "EDIT_EXPENSE",
    id: "789",
    updates: { amount },
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});