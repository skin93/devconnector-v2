import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { IFormData } from '../../../interfaces/IFormData';
import * as F from '../../../components/shared/Form/Form.style.';

import { FaUser } from 'react-icons/fa';

const Register = () => {
  const [formData, setFormData] = useState<IFormData>({} as IFormData);

  const { name, email, password, password2 } = formData;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log('Button clicked');
  };
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
