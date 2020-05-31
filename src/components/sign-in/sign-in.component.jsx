import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }); // if name = email, then {email: value}, etc. So it can be dynamic
  };

  render() {
    return (
      <div className='sign-in' onSubmit={this.handleSubmit}>
        <h2 className='title'>Sing In</h2>
        <span className='sub-title'>
          Sign in using your email and password.
        </span>
        <form>
          <input
            required
            type='email'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label>Email</label>
          <input
            required
            type='password'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
          />
          <label>Password</label>
          <input type='submit' value='Sign In' />
        </form>
      </div>
    );
  }
}

export default SignIn;
