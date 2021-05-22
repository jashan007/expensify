import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenselistFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseList/>
    <ExpenselistFilters/>
    This is from my dashboard component!
  </div>
);

export default ExpenseDashboardPage;
