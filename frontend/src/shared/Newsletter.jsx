import React from "react";
import "./newsletter.css";
import { Container, Col, Row } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Berlangganan sekarang untuk info liburan</h2>

              <div className="newsletter__input">
                <input type="email" placeholder="Masukkan Email" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus ut obcaecati
                voluptas eos laudantium odio possimus quidem. Alias reiciendis ipsa laboriosam
                excepturi dolor quis voluptatum sunt veniam tenetur cumque.
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
