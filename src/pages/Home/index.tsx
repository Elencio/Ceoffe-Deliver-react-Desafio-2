import { Coffee } from './Coffees'
import { Header } from './Header'
import styled from 'styled-components'

const Container = styled.div`
  padding: 1rem;
`

export function Home() {
  return (
    <Container>
      <Header />
      <Coffee />
    </Container>
  )
}
