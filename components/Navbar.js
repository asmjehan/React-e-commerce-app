import Link from 'next/link'
import { Container, Menu, Icon, Label } from 'semantic-ui-react'
import { itemTotal } from '../helpers/cartHelper'
import { useCart } from './Cart'

export default function NavBar() {
    const items = useCart();
  return (
    <Container>
        <Menu secondary>
            <Link href={'/'}>
                <Menu.Item>
                    <img style={{ width: '50px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKf05WSJTQGwkECWbE-Vfb89-xivBJkzMgjQ&usqp=CAU' />
                </Menu.Item>
            </Link>
                           
            <Menu.Menu position='right'>
                <Link href={'/cart'}>
                    <Menu.Item>
                    <Label>
                        <img style={{ width: '50px' }} src='https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png' />
                    </Label>
                    <span color='Green' style={{width: '10px'}} class="cart-basket"> <b> {items.length}</b>
                    </span>
                    </Menu.Item>
                </Link>
                
                <Link href={'/orders'}>
                    <Menu.Item>
                    <img style={{ width: '50px' }} src='https://www.pinclipart.com/picdir/middle/53-531405_recipe-putting-on-line-order-list-icon-clipart.png' />
                    </Menu.Item>
                </Link>
            </Menu.Menu>
        </Menu>
    </Container>
  )
}
