import { useState, useEffect } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useCart } from './CartContext';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    // Mock API - replace with fakestoreapi.com/products
    fetch('https://fakestoreapi.com/products?limit=6')
      .then(res => res.json())
      .then(setProducts)
      .catch(() => setProducts([
        {id:1, title:'Product 1', price:10, image:'https://via.placeholder.com/150'},
        {id:2, title:'Product 2', price:20, image:'https://via.placeholder.com/150'},
      ]));
  }, []);

  return (
    <Row className="g-4">
      {products.map(product => (
        <Col md={4} key={product.id}>
          <Card className="h-100">
            <Card.Img variant="top" src={product.image} style={{height: '200px', objectFit: 'cover'}} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>${product.price}</Card.Text>
              <Button variant="primary" onClick={() => addToCart(product)}>
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
