import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 0;
  border-bottom: solid 1px ${({ theme }) => theme.colors.primaryColor};
  opacity: 0.9;
  ${({ theme }) => theme.palette.dark}

  ul {
    display: flex;
  }

  a {
    color: #fff;
    padding: 0.45rem;
    margin: 0 0.25rem;

    &:hover {
      color: ${({ theme }) => theme.colors.primaryColor};
    }
  }

  @media (max-width: 700px) {
    display: block;
    text-align: center;

    ul {
      text-align: center;
      justify-content: center;
    }

    h1 {
      margin-bottom: 1rem;
    }
  }
`;

export const NavContainer = styled.ul`
  text-align: center;
  justify-content: center;
`;

export const NavItems = styled.ul``;
export const NavItem = styled.li``;
export const NavLink = styled(Link)``;
export const Icon = styled.i``;
export const StyledSpan = styled.span`
  @media (max-width: 700px) {
    display: none;
  }
`;
