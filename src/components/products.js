import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useDispatch } from 'react-redux'
import { add } from '../store/cartSlice'

const Products = () => {
  const [products, setProducts] = useState()
    const dispatch = useDispatch();
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((data) => data.json())
      .then((result) => setProducts(result))
  }, []);

  const addToCart = (product) => {
    dispatch(add(product));
  }

  const cards = products?.map((prod) => {
    return (
        <div >
            <Card style={{ width: '18rem', margin: "10px" }}>
                <Card.Img variant="top" src={prod.image} style={{height: "130px", width: "50%", alignSelf: 'center'}}/>
                <Card.Body>
                <Card.Title className='descriptionTruncate' style={{ fontSize: "14px"}} >{prod.title}</Card.Title>
                <Card.Text>
                    INR: {prod.price}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" onClick={() => addToCart(prod)}>Add to Cart</Button>
                </Card.Footer>
            </Card>
      </div>
    )
  })

  return (
    <>
      <div>Products Component</div>
      <div style={{display:"flex", flexWrap: "wrap"}}>{cards}</div>
    </>
  )
}

export default Products
