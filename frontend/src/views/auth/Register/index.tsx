import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';

import { Link, Redirect } from 'react-router-dom';
import { FormDataType } from '../../../types/FormDataType';
import * as F from '../../../components/shared/Form/Form.style.';

import { FaUser } from 'react-icons/fa';
import { register, authState } from '../../../features/auth/authSlice';
import { setAlert } from '../../../features/alert/alertSlice';

const Register = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector(authState);
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== password2) {
      dispatch(setAlert({ msg: 'Password do not match', alertType: 'danger' }));
    } else {
      dispatch(register({ name, email, password }));
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <Fragment>
      <F.FormHeading>Sign Up</F.FormHeading>
      <F.FormLead>
        <FaUser /> Create Your Account
      </F.FormLead>
      <F.Form onSubmit={(e) => handleSubmit(e)}>
        <F.FormGroup>
          <F.FormInput
            onChange={(e) => handleChange(e)}
            type='text'
            placeholder='Name'
            name='name'
            value={name}
          />
        </F.FormGroup>
        <F.FormGroup>
          <F.FormInput
            onChange={(e) => handleChange(e)}
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
          />
          <F.FormText>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </F.FormText>
        </F.FormGroup>
        <F.FormGroup>
          <F.FormInput
            onChange={(e) => handleChange(e)}
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            minLength={6}
          />
        </F.FormGroup>
        <F.FormGroup>
          <F.FormInput
            onChange={(e) => handleChange(e)}
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            minLength={6}
          />
        </F.FormGroup>
        <F.InputSubmit type='submit'>Register</F.InputSubmit>
      </F.Form>
      <F.FormParagraph>
        Already have an account? <Link to='/login'>Sign In</Link>
      </F.FormParagraph>
    </Fragment>
  );
};

export default Register;
