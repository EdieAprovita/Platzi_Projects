import React from 'react';

class BadgeForm extends React.Component {
  handleChange = (e) => {
    console.log({ name: e.target.name, value: e.target.value });
  };

  handleClick = (e) => {
    console.log('Buttom was clicked');
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form was submit');
  };
  render() {
    return (
      <div>
        <h1>New Attendat</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>First Name</label>
            <input
              onChange={this.handleChange}
              className='form-control'
              type='text'
              name='firstName'
            />
          </div>
          <button onClick={this.handleClick} className='btn btn-primary'>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
