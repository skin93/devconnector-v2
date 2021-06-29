import styled from 'styled-components';

export const Heading = styled.h1`
  ${({ theme }) => theme.texts.xLarge}
  ${({ theme }) => theme.texts.textPrimary}
`;

export const Paragraph = styled.p`
  ${({ theme }) => theme.texts.lead}
`;
