import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Card from 'react-bootstrap/Card'

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

//context API:
import { ItemInCartContext } from './ItemInCartContext'


export default function Items(props) {

    const {itemInCart, SetItemInCart} = useContext(ItemInCartContext);
    const [numItem, SetNumItem] = useState({
        '1': 1,
        '2': 1,
        '3': 1,
        '4': 1,
        '5': 1,
        '6': 1,
        '7': 1,
        '8': 1,
        '9': 1
    })




    const AddItem = (item) => {
        numItem[item.id] += 1;
        SetNumItem({...numItem})
    }

    const RemoveItem = (item) => {
        if (numItem[item.id] !== 1) {
            numItem[item.id] -= 1;
        SetNumItem({...numItem})
        }
    }
    
    const sendData = (item) =>{
        item.num = numItem[item.id]
        SetItemInCart([...itemInCart,item])
    }

    return (
        <div>
            {
                props.data.map((item) =>
                    <Card key={item.id} style={{ float: 'right' }} >
                        <Card.Img variant="top" src={item.img} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                Price: {item.price}$
                                 </Card.Text>
                            <AddIcon style={{ height: '0.7em' }} onClick={() => AddItem(item)} />
                            {console.log(numItem[item.name])
                            }
                            <label style={{ margin: 20, fontSize: '20px' }}>{numItem[item.id]}</label>
                            <RemoveIcon style={{ height: '0.7em' }} onClick={() => RemoveItem(item)} />
                            <br />

                            <Button ovariant="primary" color='primary' onClick={() =>sendData(item)}>Add To Cart</Button>
                        </Card.Body>
                    </Card>
                )
            }
        </div>
    )
};