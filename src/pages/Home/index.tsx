import {
  Coffee,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  Timer,
} from 'phosphor-react'
import imagem from '../../assets/imagem.svg'
import { useContext, useState } from 'react'
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
import Imagem1 from '../../assets/Cofee1.svg'
import { CoffeeContext } from '../../contexts/context'
import { MenuCoffes } from '../../db/DB'

export function Home() {
  const { removeFromCart, addToCart, CountNUmbers } = useContext(CoffeeContext)

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
          {MenuCoffes.map((item) => (
            <>
              <CoffeeContainer key={item.id}>
                <img src={item.image} alt="" />
                <h2>{item.type}</h2>
                <h2>{item.type1}</h2>
                <h2>{item.type2}</h2>
                <span>{item.title}</span>
                <p>{item.description}</p>
                <ChooseCoffee>
                  <p>
                    R$
                    <span>{item.price}</span>
                  </p>
                  <ButtonsChooseCoffee>
                    <AddandKeepOutCoffee>
                      <Plus onClick={() => addToCart(item)} />
                      <span>{CountNUmbers(item)}</span>
                      <Minus onClick={() => removeFromCart(item)} />
                    </AddandKeepOutCoffee>
                    <ShoppingCoffee>
                      <ShoppingCart />
                    </ShoppingCoffee>
                  </ButtonsChooseCoffee>
                </ChooseCoffee>
              </CoffeeContainer>
            </>
          ))}
        </CoffeeMenuHome>
      </ContainerMenuHome>
    </div>
  )
}
