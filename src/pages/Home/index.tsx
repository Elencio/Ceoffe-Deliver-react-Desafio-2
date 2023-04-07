import {
  Coffee,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  Timer,
} from 'phosphor-react'
import imagem from '../../assets/imagem.svg'
import {
  AddandKeepOutCoffee,
  ButtonsChooseCoffee,
  ChooseCoffee,
  Coffecart,
  CoffeeContainer,
  CoffeeMenuHome,
  Containercard,
  ContainerCardHome,
  ContainerMenuHome,
  ContainerOptionsHome,
  DescriptionCoffee,
  HeaderContainerHome,
  HeaderContentHome,
  Packagecart,
  Shoppingcart,
  ShoppingCoffee,
  Timercart,
} from './styles'
import { useState } from 'react'
import Imagem1 from '../../assets/Cofee1.svg'

export function Home() {
  return (
    <div>
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

      <ContainerMenuHome>
        <strong>Nossos cafés</strong>

        <CoffeeMenuHome>
          <CoffeeContainer>
            <img src={Imagem1} alt="" />
            <h2>Tradicional</h2>
            <span>ADSADFA</span>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <ChooseCoffee>
              <p>
                R$
                <span>EWTER</span>
              </p>
              <ButtonsChooseCoffee>
                <AddandKeepOutCoffee>
                  <Plus />
                  <span></span>
                  <Minus />
                </AddandKeepOutCoffee>
                <ShoppingCoffee>
                  <ShoppingCart />
                </ShoppingCoffee>
              </ButtonsChooseCoffee>
            </ChooseCoffee>
          </CoffeeContainer>
        </CoffeeMenuHome>
      </ContainerMenuHome>
    </div>
  )
}
