import styled from 'styled-components'

export const CheckingOutTheOptions = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 24px;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;

  @media (max-width: 768px) {
    padding: 20px;
    gap: 12px;
  }
`
export const CardCheckingOut = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CardOut = styled.div`
  display: flex;
  flex-direction: row;
  width: 368px;
  height: 80px;

  justify-content: space-between;
  align-items: center;

  padding-bottom: 3rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 1rem;
    padding-bottom: 7rem;
    width: auto;
    gap: 0.5rem;
    align-items: center;
  }
`
export const Card = styled.div`
  display: flex;
  gap: 1.125rem;
  align-items: center;
  width: 255px;
  height: 64px;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`

export const AddandKeepOut = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 0.5rem;
  width: 72px;
  height: 32px;
  color: ${(props) => props.theme.purple};
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
`

export const OptionsCard = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    display: flex;
  }
`

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  strong {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['base-text']};
  }
`
export const DeleteCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 0.25rem;
  cursor: pointer;
  width: 91px;
  height: 32px;
  color: ${(props) => props.theme.purple};
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};
  }
`

export const TotalPrices = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
  }

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    display: flex;
    align-items: center;
    text-align: right;
    color: ${(props) => props.theme['base-text']};
  }

  strong {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    display: flex;
    align-items: center;
    text-align: right;
    color: ${(props) => props.theme['base-text']};
  }
`
export const ButtonComponent = styled.button`
  width: 368px;
  height: 46px;
  background: ${(props) => props.theme.yellow};
  border-radius: 6px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;
  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  font-stretch: 100;
  border: none;
  transition: background 0.2s;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }

  @media (max-width: 768px) {
    font-size: 14px;
    max-width: 270px;
  }
`
export const Price = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  display: flex;
  margin-top: -2rem;
  color: ${(props) => props.theme['base-text']};

  @media (max-width: 768px) {
    margin-top: 0;
  }
`
