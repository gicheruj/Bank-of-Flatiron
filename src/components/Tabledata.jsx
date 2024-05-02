import React from 'react';
import { grey } from '@mui/material/colors';
import FormData from './Formdata';

class ExpenseTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [
        { date: '2024-04-29', category: 'Food', amount: 20, description: 'Lunch at the cafe' },
        { date: '2024-04-28', category: 'Transportation', amount: 15, description: 'Bus fare' },
        { date: '2024-04-27', category: 'Entertainment', amount: 30, description: 'Movie tickets' }
      ],
      searchTerm: ''
    };
  }

  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleAddData = (formData) => {
    this.setState(prevState => ({
      expenses: [...prevState.expenses, formData]
    }));
  };

  render() {
    const { expenses, searchTerm } = this.state;
    const filteredExpenses = expenses.filter(expense =>
      Object.values(expense).some(value =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    return (
      <div className="App" style={{ backgroundColor: grey, width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div className="expense-table-container" style={{ width: '90%', maxWidth: '800px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px', marginBottom: '20px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Royal Bank of Flatiron</h2>
          <input type="text" placeholder="Search expenses..." value={searchTerm} onChange={this.handleSearch} style={searchStyles} />
          <FormData onAddData={this.handleAddData} />
          <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '5px', overflow: 'hidden' }}>
            <thead style={{ backgroundColor: '#4CAF50', borderBottom: '2px solid #4CAF50' }}>
              <tr>
                <th style={tableHeaderStyles}>Date</th>
                <th style={tableHeaderStyles}>Category</th>
                <th style={tableHeaderStyles}>Amount</th>
                <th style={tableHeaderStyles}>Description</th>
              </tr>
            </thead>
            <tbody>
              {filteredExpenses.map((expense, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={tableDataStyles}>{expense.date}</td>
                  <td style={tableDataStyles}>{expense.category}</td>
                  <td style={{ ...tableDataStyles, textAlign: 'right' }}>${expense.amount}</td>
                  <td style={tableDataStyles}>{expense.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const searchStyles = {
  width: '100%',
  padding: '10px',
  marginBottom: '20px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  boxSizing: 'border-box',
};

const tableHeaderStyles = {
  padding: '12px',
  textAlign: 'left',
};

const tableDataStyles = {
  padding: '12px',
  textAlign: 'left',
};

export default ExpenseTable;