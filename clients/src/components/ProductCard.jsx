import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router";
import '../assets/css/index.css';
const ProductCard = ({article}) => {
    const navigate= new useNavigate();
  return (
    <Card style={{ width: '25rem', height:'45rem' }}>
         <Card.Img style={{height:'10rem'}} variant="top" src={article.image} />
          <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <br/>
          <Card.Text>
            <b>Description:</b>{article.description}
          </Card.Text>
          <Card.Text><b>Category: </b>{article.category}</Card.Text>
          <Card.Text><b>Price: Rs. </b>{article.price}</Card.Text>
          <Card.Text><b>Rating: </b>{article.rating.rate}</Card.Text>
          <Card.Text><b>Rating Count: </b>{article.rating.count}</Card.Text>
          <Button value="Submit" type="submit" onClick={()=>navigate(`/addtocart/${article.id}`)}>Add to Cart</Button>
        </Card.Body>
    </Card>
  )
}

export default ProductCard;