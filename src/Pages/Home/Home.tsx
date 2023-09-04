import React from "react";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import cx from "./Home.module.scss";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = "https://fakestoreapi.com/products";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  const navigate = useNavigate();
  function redirectToAnotherPage(id: string) {
    navigate(`${id}`);
  }

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={`${cx.heading}`}>
                <h1>Product List </h1>
              </div>
            </Col>
            {data.map((item: any) => (
              <Col lg={4} md={6} sm={12} className="mb-4">
                <div
                  className={`${cx.product}`}
                  key={item.id}
                  onClick={() => {
                    redirectToAnotherPage(item.id);
                  }}
                >
                  <img src={item.image} alt="" />

                  <div   className={`${cx.productDetails}`}>
                    <p  className={`${cx.title}`}>{item.title}</p>
                    <span>{item.category}</span>
                    <p  className={`${cx.description}`} >{item.description}</p>
                  </div>
                  <div  className={`${cx.price}`}>
                    <p> Price : {item.price}</p>
                    <span> Rating : {item.rating.rate} ⭐</span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
