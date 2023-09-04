import React from "react";
import { useEffect, useState } from "react";

import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

import cx from "./ProductDetail.module.scss";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] =  useState<any['null']>([]);
  console.log(id);

  useEffect(() => {
    //   const apiUrl = "https://fakestoreapi.com/products";

    fetch(`https://fakestoreapi.com/products/${id}`).then((responce) => {
      responce.json().then((result) => {
        setProduct(result);
        console.log(result);
      });
    });
  }, [id]);

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={`${cx.heading}`}>
                <h1>Product Details</h1>
              </div>
            </Col>
           
            <Col lg={3} md={12}>
              <div className={`${cx.productList}`}>
                <img src={product.image} alt="" />
              </div>
            </Col>

            <Col lg={5} md={12}>
              <div>
                <div className={`${cx.productDetail}`}>
                  <p className={`${cx.title}`}>{product.title}</p>
                  <p className={`${cx.category}`}>{product.category}</p>
                  <p className={`${cx.description}`}>{product.description}</p>
                  <p className={`${cx.price}`}> Price : {product.price}</p>
                  {/* <p className={`${cx.price}`}> Rating : {product.rating[rate]}</p> */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductDetail;
