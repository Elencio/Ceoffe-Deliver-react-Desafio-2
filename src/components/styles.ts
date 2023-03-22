import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    background-color: ${(props) => props.theme['yellow-light']};
    border-radius: 6px;
    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    width: 10rem;
    height: 2.5rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme['purple-light']};
    border-radius: 6px;
    color: ${(props) => props.theme['purple-dark']};
  }
`
