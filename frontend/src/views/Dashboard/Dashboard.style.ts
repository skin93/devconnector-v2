import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Heading = styled.h1`
  ${({ theme }) => theme.texts.large}
  ${({ theme }) => theme.texts.textPrimary}
`;

export const Lead = styled.p`
  ${({ theme }) => theme.texts.lead}
`;

export const CreateButton = styled(Link)`
  display: inline-block;
  background: ${({ theme }) => theme.palette.primary.background};
  color: ${({ theme }) => theme.palette.primary.color};
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin: ${({ theme }) => theme.margins.my1};
  transition: opacity 0.2s ease-in;
  outline: none;
`;
