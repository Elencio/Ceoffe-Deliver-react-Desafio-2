import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  Coffecart,
  ContainerCardHome,
  ContainerOptionsHome,
  Containercard,
  HeaderContainerHome,
  HeaderContentHome,
  Packagecart,
  Shoppingcart,
  Timercart,
} from './stytes'
import imagem from '../../../assets/imagem.svg'

export function Header() {
  return (
    <HeaderContainerHome>
      <HeaderContentHome>
        <strong>Encontre o café perfeito para qualquer hora do dia</strong>
        <span>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </span>
        <ContainerOptionsHome>
          <Containercard>
            <ContainerCardHome>
              <Shoppingcart>
                <ShoppingCart />
              </Shoppingcart>
              <span>Compra simples e segura</span>
            </ContainerCardHome>
            <ContainerCardHome>
              <Timercart>
                <Timer />
              </Timercart>
              <span>Entrega rápida e rastreada</span>
            </ContainerCardHome>
          </Containercard>
          <Containercard>
            <ContainerCardHome>
              <Packagecart>
                <Package />
              </Packagecart>
              <span>Embalagem mantém o café intacto</span>
            </ContainerCardHome>
            <ContainerCardHome>
              <Coffecart>
                <Coffee />
              </Coffecart>
              <span>O café chega fresquinho até você</span>
            </ContainerCardHome>
          </Containercard>
        </ContainerOptionsHome>
      </HeaderContentHome>
      <img src={imagem} alt="" />
    </HeaderContainerHome>
  )
}
