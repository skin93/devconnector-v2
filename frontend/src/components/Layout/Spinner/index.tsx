import { Fragment } from 'react';
import * as S from './Spinner.style';
import spinner from './spinner.gif';

const Spinner = () => (
  <Fragment>
    <S.StyledSpinner src={spinner} alt='Loading...' />
  </Fragment>
);

export default Spinner;
