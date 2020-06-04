import React from 'react';

import FormInput from '../form-input/form-input.component';
import Btn from '../btn/btn.component';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }

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
          <div className='btns'>
            <Btn type='submit'>Sign In</Btn>
            <Btn type='button' color='blue' onClick={signInWithGoogle}>
              Sign in with Google
            </Btn>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
