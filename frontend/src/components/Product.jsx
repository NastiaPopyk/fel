import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { useSelector } from "react-redux";

import './p.css'; // імпортуйте ваш CSS файл

const Product = ({ product }) => {
  const { serverUrl } = useSelector((state) => state.app);

  return (
    <div className="h-100 d-flex align-items-stretch">
      <Card className="my-3 p-3 rounded shadow-sm">
        <Link to={`product/${product._id}`}>
          <div className="card-img-container">
            <div className="clas1">
              <Card.Img
              className="rounded card-img-top"
              src={serverUrl + product.image}
              alt={product.name}
            />

          <Card.Body as="div" className="b">
          <Card.Title as="div">
            {product.name}
          </Card.Title>
          <Card.Text as="div">
            <div className="my-3">
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color={"#f8e825"}
              />
            </div>
          </Card.Text>
          <Card.Text as="h3">
            <i className="my-4 fa-solid fa-dollar-sign"></i>
            {product.price}
          </Card.Text>
        </Card.Body>
            </div>



            
            <div className="clas2">
            <Card.Img
              className="product-image-hover"
              src={serverUrl + product.image2}
              alt={product.name}
            />              
            <Card.Body as="div" className="b">
                      <Card.Title as="div">
                        {product.name}
                      </Card.Title>
                      <Card.Text as="div">
                        <div className="my-3">
                          <Rating
                            value={product.rating}
                            text={`${product.numReviews} reviews`}
                            color={"#f8e825"}
                          />
                        </div>
                      </Card.Text>
                      <Card.Text as="h3">
                        <i className="my-4 fa-solid fa-dollar-sign"></i>
                        {product.price}
                      </Card.Text>
                    </Card.Body>


            
            </div>
            
          </div>
        </Link>
       
      </Card>
    </div>
  );
};

export default Product;
