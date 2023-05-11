
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'
const Cart = () => {
    const products = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const removeProduct = (id) => {
        dispatch(remove(id));
    }
    const cards = products?.map((prod) => {
        return (
            <div >
                <Card style={{ width: '18rem', margin: "10px" }}>
                    <Card.Img variant="top" src={prod.image} style={{height: "130px", width: "50%", alignSelf: 'center'}}/>
                    <Card.Body>
                    <Card.Title style={{ fontSize: "14px"}} >{prod.title}</Card.Title>
                    <Card.Text>
                        INR: {prod.price}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary" onClick={() => removeProduct(prod.id)}>Remove</Button>
                    </Card.Footer>
                </Card>
          </div>
        )
      })
    return ( 
        <>
        {products.length > 0 ? 
            <div style={{display:"flex", flexWrap: "wrap"}}>{cards}</div>
            :
            <div>Cart is empty</div>
        }
        </>
     );
}
 
export default Cart;