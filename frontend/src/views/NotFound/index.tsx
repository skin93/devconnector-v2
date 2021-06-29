import { Fragment } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

import * as N from './NotFound.style';

const NotFound = () => {
  return (
    <Fragment>
      <N.Heading>
        <FaExclamationTriangle /> Page Not Found
      </N.Heading>
      <N.Paragraph>
        Sorry, this page does not exist
      </N.Paragraph>
    </Fragment>
  );
};

export default NotFound;
