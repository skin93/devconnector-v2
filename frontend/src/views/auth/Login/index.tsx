import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';

import { Link, Redirect } from 'react-router-dom';
import { FormDataType } from '../../../types/FormDataType';
import * as F from '../../../components/shared/Form/Form.style.';

import { FaUser } from 'react-icons/fa';
import { login, authState } from '../../../features/auth/authSlice';

const Login = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector(authState);
  const [formData, setFormData] = useState<FormDataType>({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <Fragment>
      <F.FormHeading>Sign In</F.FormHeading>
      <F.FormLead>
        <FaUser /> Sign Into Your Account!
      </F.FormLead>
      <F.Form onSubmit={(e) => handleSubmit(e)}>
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
        <F.InputSubmit type='submit'>Login</F.InputSubmit>
      </F.Form>
      <F.FormParagraph>
        Don't have an account? <Link to='/register'>Sign Up</Link>
      </F.FormParagraph>
    </Fragment>
  );
};

export default Login;
