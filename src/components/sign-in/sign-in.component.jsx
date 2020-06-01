import React from 'react';

import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';

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
        <h2 className='title'>Already have an account?</h2>
        <span className='subtitle'>Sign in using your email and password.</span>
        <form>
          <FormInput
            required
            type='email'
            name='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='Email'
          />
          <FormInput
            required
            type='password'
            name='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='Password'
          />
          <input type='submit' value='Sign In' />
        </form>
      </div>
    );
  }
}

export default SignIn;
