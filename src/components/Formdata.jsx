import React from 'react';

class FormData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      category: '',
      amount: '',
      description: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAddData(this.state);
    this.setState({
      date: '',
      category: '',
      amount: '',
      description: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={formStyles}>
        <input type="text" name="date" value={this.state.date} onChange={this.handleChange} placeholder="Date" style={inputStyles} />
        <input type="text" name="category" value={this.state.category} onChange={this.handleChange} placeholder="Category" style={inputStyles} />
        <input type="text" name="amount" value={this.state.amount} onChange={this.handleChange} placeholder="Amount" style={inputStyles} />
        <input type="text" name="description" value={this.state.description} onChange={this.handleChange} placeholder="Description" style={inputStyles} />
        <button type="submit" style={buttonStyles}>Add Data</button>
      </form>
    );
  }
}

const formStyles = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px'
};

const inputStyles = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc'
};

const buttonStyles = {
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

export default FormData