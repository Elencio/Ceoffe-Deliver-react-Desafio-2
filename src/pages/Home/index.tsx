import {
  Coffee,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  Timer,
} from 'phosphor-react'
import imagem from '../../assets/imagem.svg'
import Cofee1 from '../../assets/Coffee1.svg'
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
            <img src={Cofee1} alt="" />
            <h2>Tradicional</h2>
            <span>Expresso Tradicional</span>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <ChooseCoffee>
              <p>
                R$
                <span> 9,90</span>
              </p>
              <ButtonsChooseCoffee>
                <AddandKeepOutCoffee>
                  <Plus />
                  <span>1</span>
                  <Minus />
                </AddandKeepOutCoffee>
                <ShoppingCoffee>
                  <ShoppingCart />
                </ShoppingCoffee>
              </ButtonsChooseCoffee>
            </ChooseCoffee>
          </CoffeeContainer>
          <CoffeeContainer>
            <img src={Cofee1} alt="" />
            <h2>Tradicional</h2>
            <span>Expresso Americano</span>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <ChooseCoffee>
              <p>
                R$
                <span> 9,90</span>
              </p>
              <ButtonsChooseCoffee>
                <AddandKeepOutCoffee>
                  <Plus />
                  <span>1</span>
                  <Minus />
                </AddandKeepOutCoffee>
                <ShoppingCoffee>
                  <ShoppingCart />
                </ShoppingCoffee>
              </ButtonsChooseCoffee>
            </ChooseCoffee>
          </CoffeeContainer>
          <CoffeeContainer>
            <img src={Cofee1} alt="" />
            <h2>Tradicional</h2>
            <span>Expresso Cremoso</span>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <ChooseCoffee>
              <p>
                R$
                <span> 9,90</span>
              </p>
              <ButtonsChooseCoffee>
                <AddandKeepOutCoffee>
                  <Plus />
                  <span>1</span>
                  <Minus />
                </AddandKeepOutCoffee>
                <ShoppingCoffee>
                  <ShoppingCart />
                </ShoppingCoffee>
              </ButtonsChooseCoffee>
            </ChooseCoffee>
          </CoffeeContainer>
          <CoffeeContainer>
            <img src={Cofee1} alt="" />
            <DescriptionCoffee>
              <h2>Tradicional</h2>
              <h2>Gelado</h2>
            </DescriptionCoffee>
            <span>Expresso Gelado</span>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <ChooseCoffee>
              <p>
                R$
                <span> 9,90</span>
              </p>
              <ButtonsChooseCoffee>
                <AddandKeepOutCoffee>
                  <Plus />
                  <span>1</span>
                  <Minus />
                </AddandKeepOutCoffee>
                <ShoppingCoffee>
                  <ShoppingCart />
                </ShoppingCoffee>
              </ButtonsChooseCoffee>
            </ChooseCoffee>
          </CoffeeContainer>
          <CoffeeContainer>
            <img src={Cofee1} alt="" />
            <DescriptionCoffee>
              <h2>Tradicional</h2>
              <h2>com leite</h2>
            </DescriptionCoffee>
            <span>Cafe com Leite</span>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <ChooseCoffee>
              <p>
                R$
                <span> 9,90</span>
              </p>
              <ButtonsChooseCoffee>
                <AddandKeepOutCoffee>
                  <Plus />
                  <span>1</span>
                  <Minus />
                </AddandKeepOutCoffee>
                <ShoppingCoffee>
                  <ShoppingCart />
                </ShoppingCoffee>
              </ButtonsChooseCoffee>
            </ChooseCoffee>
          </CoffeeContainer>
          <CoffeeContainer>
            <img src={Cofee1} alt="" />
            <DescriptionCoffee>
              <h2>Tradicional</h2>
              <h2>com leite</h2>
            </DescriptionCoffee>
            <span>Latte</span>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <ChooseCoffee>
              <p>
                R$
                <span> 9,90</span>
              </p>
              <ButtonsChooseCoffee>
                <AddandKeepOutCoffee>
                  <Plus />
                  <span>1</span>
                  <Minus />
                </AddandKeepOutCoffee>
                <ShoppingCoffee>
                  <ShoppingCart />
                </ShoppingCoffee>
              </ButtonsChooseCoffee>
            </ChooseCoffee>
          </CoffeeContainer>
          <CoffeeContainer>
            <img src={Cofee1} alt="" />
            <DescriptionCoffee>
              <h2>Tradicional</h2>
              <h2>com leite</h2>
            </DescriptionCoffee>
            <span>Capuccino</span>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <ChooseCoffee>
              <p>
                R$
                <span> 9,90</span>
              </p>
              <ButtonsChooseCoffee>
                <AddandKeepOutCoffee>
                  <Plus />
                  <span>1</span>
                  <Minus />
                </AddandKeepOutCoffee>
                <ShoppingCoffee>
                  <ShoppingCart />
                </ShoppingCoffee>
              </ButtonsChooseCoffee>
            </ChooseCoffee>
          </CoffeeContainer>
          <CoffeeContainer>
            <img src={Cofee1} alt="" />
            <DescriptionCoffee>
              <h2>Tradicional</h2>
              <h2>com leite</h2>
            </DescriptionCoffee>
            <span>Macchiato</span>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <ChooseCoffee>
              <p>
                R$
                <span> 9,90</span>
              </p>
              <ButtonsChooseCoffee>
                <AddandKeepOutCoffee>
                  <Plus />
                  <span>1</span>
                  <Minus />
                </AddandKeepOutCoffee>
                <ShoppingCoffee>
                  <ShoppingCart />
                </ShoppingCoffee>
              </ButtonsChooseCoffee>
            </ChooseCoffee>
          </CoffeeContainer>
          <CoffeeContainer>
            <img src={Cofee1} alt="" />
            <DescriptionCoffee>
              <h2>Tradicional</h2>
              <h2>com leite</h2>
            </DescriptionCoffee>
            <span>Mocaccino</span>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <ChooseCoffee>
              <p>
                R$
                <span> 9,90</span>
              </p>
              <ButtonsChooseCoffee>
                <AddandKeepOutCoffee>
                  <Plus />
                  <span>1</span>
                  <Minus />
                </AddandKeepOutCoffee>
                <ShoppingCoffee>
                  <ShoppingCart />
                </ShoppingCoffee>
              </ButtonsChooseCoffee>
            </ChooseCoffee>
          </CoffeeContainer>
          <CoffeeContainer>
            <img src={Cofee1} alt="" />
            <DescriptionCoffee>
              <h2>Especial</h2>
              <h2>com leite</h2>
            </DescriptionCoffee>
            <span>Chocolate Quente</span>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <ChooseCoffee>
              <p>
                R$
                <span> 9,90</span>
              </p>
              <ButtonsChooseCoffee>
                <AddandKeepOutCoffee>
                  <Plus />
                  <span>1</span>
                  <Minus />
                </AddandKeepOutCoffee>
                <ShoppingCoffee>
                  <ShoppingCart />
                </ShoppingCoffee>
              </ButtonsChooseCoffee>
            </ChooseCoffee>
          </CoffeeContainer>
          <CoffeeContainer>
            <img src={Cofee1} alt="" />
            <DescriptionCoffee>
              <h2>Especial</h2>
              <h2>Alcoolico</h2>
              <h2>Gelado</h2>
            </DescriptionCoffee>
            <span>Cubano</span>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <ChooseCoffee>
              <p>
                R$
                <span> 9,90</span>
              </p>
              <ButtonsChooseCoffee>
                <AddandKeepOutCoffee>
                  <Plus />
                  <span>1</span>
                  <Minus />
                </AddandKeepOutCoffee>
                <ShoppingCoffee>
                  <ShoppingCart />
                </ShoppingCoffee>
              </ButtonsChooseCoffee>
            </ChooseCoffee>
          </CoffeeContainer>
          <CoffeeContainer>
            <img src={Cofee1} alt="" />
            <h2>Especial</h2>
            <span>Havaino</span>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <ChooseCoffee>
              <p>
                R$
                <span> 9,90</span>
              </p>
              <ButtonsChooseCoffee>
                <AddandKeepOutCoffee>
                  <Plus />
                  <span>1</span>
                  <Minus />
                </AddandKeepOutCoffee>
                <ShoppingCoffee>
                  <ShoppingCart />
                </ShoppingCoffee>
              </ButtonsChooseCoffee>
            </ChooseCoffee>
          </CoffeeContainer>
          <CoffeeContainer>
            <img src={Cofee1} alt="" />
            <h2>Especial</h2>
            <span>Arabe</span>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <ChooseCoffee>
              <p>
                R$
                <span> 9,90</span>
              </p>
              <ButtonsChooseCoffee>
                <AddandKeepOutCoffee>
                  <Plus />
                  <span>1</span>
                  <Minus />
                </AddandKeepOutCoffee>
                <ShoppingCoffee>
                  <ShoppingCart />
                </ShoppingCoffee>
              </ButtonsChooseCoffee>
            </ChooseCoffee>
          </CoffeeContainer>
          <CoffeeContainer>
            <img src={Cofee1} alt="" />
            <DescriptionCoffee>
              <h2>Especial</h2>
              <h2>Alcoolico</h2>
            </DescriptionCoffee>
            <span>irlandes</span>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <ChooseCoffee>
              <p>
                R$
                <span> 9,90</span>
              </p>
              <ButtonsChooseCoffee>
                <AddandKeepOutCoffee>
                  <Plus />
                  <span>1</span>
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
