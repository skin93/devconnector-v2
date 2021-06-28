import styled from 'styled-components';
import { colors } from '../../styles/GlobalStyle';

export const Alert = styled.div`
  padding: 0.8rem;
  margin: 1rem 0;
  opacity: 0.9;
  ${(props) => {
    switch (props.theme) {
      case 'primary':
        return `background: ${colors.primaryColor}; color: #fff;`;
      case 'dark':
        return `background: ${colors.darkColor}; color: #fff;`;
      case 'danger':
        return `background: ${colors.dangerColor}; color: #fff;`;
      case 'success':
        return `background: ${colors.successColor}; color: #fff;`;
      case 'white':
        return `background: #fff; color: #333; border: #ccc solid 1px;`;
      default:
        return `background: ${colors.lightColor}; color: #333;`;
    }
  }}
`;
