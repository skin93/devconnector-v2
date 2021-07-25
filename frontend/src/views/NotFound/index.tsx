import {Container} from '../../styles/GlobalStyle'
import { FaExclamationTriangle } from 'react-icons/fa';

import * as N from './NotFound.style';

const NotFound = () => {
  return (
    <Container>
      <N.Heading>
        <FaExclamationTriangle /> Page Not Found
      </N.Heading>
      <N.Paragraph>
        Sorry, this page does not exist
      </N.Paragraph>
    </Container>
  );
};

export default NotFound;
