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

export const RounedCoffeeCount = styled.div`
  top: 1.5rem;
  left: 79rem;
  width: 1.25rem;
  height: 1.25rem;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: ${(props) => props.theme['yellow-dark']};
  position: absolute;
  color: ${(props) => props.theme.white};
`
