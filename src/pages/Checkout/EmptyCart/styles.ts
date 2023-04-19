import styled from 'styled-components'

export const EmptyCartShopping = styled.div`
  text-align: justify;
  margin-top: 2.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 40px;
  gap: 24px;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;

  strong {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: ${(props) => props.theme['base-subtitle']};
  }

  a {
    text-decoration: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const BagShopping = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme['purple-dark']};
`
