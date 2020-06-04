import React from 'react';

import '../sign-in/sign-in.styles.scss';
import './sign-up.styles.scss';

import Btn from '../btn/btn.component';
import FormInput from '../form-input/form-input.component';

import { auth, saveUserToDB } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await saveUserToDB(user, { displayName });

      // resets input values
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value }); // adds input value in state
  };

  render() {
    return (
      <div className='sign-up'>
        <h2 className='title'>Need a new account?</h2>
        <span className='subtitle'>Register using an email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            required
            type='text'
            name='displayName'
            value={this.state.displayName}
            handleChange={this.handleChange}
            label='Name'
          />

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

          <FormInput
            required
            type='password'
            name='confirmPassword'
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            label='Confirm Password'
          />

          <div className='btns'>
            <Btn type='submit'>Sign Up</Btn>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
