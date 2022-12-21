import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 640px) {
    display: ${({ isHome }) => (!isHome ? 'none' : 'flex')};
    flex-direction: column;
  }
`;

export const Header = styled.div`
  padding: 2rem;
  display: flex;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 300px;
  margin-right: 1rem;
  border-radius: 5px;
  @media (max-width: 640px) {
      width: 100%;
  }
`;

export const ViewResumeLink = styled.a`
    display: inline-block;
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    font-weight: bold;
    align-items: center;
    margin-top: 1rem;
    border: 2px solid #111;
    background-color: #333;
    transition: 0.3s;
    color: #fff;
    border-radius: 5px;
    &:hover {
        border: 2px solid #111;
        background: transparent;
        color: #333;
    }
    svg {
      position: relative;
      top: 3px;
    }
`;