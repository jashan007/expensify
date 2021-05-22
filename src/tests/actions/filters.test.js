import moment from "moment";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "../../actions/filters";

test("test for setting start date", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("test for setting end date", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

test("teset for seeting text filter", () => {
  const text = "something";
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text,
  });
});

test("test for setting default text filter", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});

test("test for checking sortbydate", () => {
  expect(sortByDate()).toEqual({
    type: "SORT_BY_DATE",
  });
});

test("test for checking sort by amount", () => {
  expect(sortByAmount()).toEqual({
    type: "SORT_BY_AMOUNT",
  });
});
