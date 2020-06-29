import React, {useState, useEffect, useContext } from 'react'
import Button from '@material-ui/core/Button';
import Card from 'react-bootstrap/Card'
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';


//Context API:
import { ItemInCartContext } from './ItemInCartContext'


export default function ItemInCart() {
    const { itemInCart, SetItemInCart } = useContext(ItemInCartContext);
    const [totalPrice, SetTotalPrice] = useState(0)

    useEffect(() => {
        let total = 0
        if (itemInCart.length === 0) {
            SetTotalPrice(0)
        }
        for (let i = 0; i < itemInCart.length; i++) {
            total += itemInCart[i].price * itemInCart[i].num
            SetTotalPrice(total)
        }
    }, [itemInCart])

    const RemoveFromCart = (index) => {
        itemInCart.splice(index,1)
        SetItemInCart([...itemInCart])
    }
    return (
        <div>
            {console.log(totalPrice)}
            <h2 className="title">Items In Cart</h2> &nbsp;
            {
                itemInCart.map((item,index) =>
                    <span key={item.id}>
                        {`${item.num} ${item.name} Priced at ${item.num * item.price}$`}
                        <ClearOutlinedIcon style={{
                            marginLeft: '10px',
                            marginBottom: '-3px',
                            fontSize: '1em'
                        }}
                        onClick={()=>RemoveFromCart(index)}
                         />
                        <br />
                    </span>

                )
            }
            {itemInCart.length === 0 ? '' : <h4>Total Price: {totalPrice}</h4>}
        </div>
    )
}
