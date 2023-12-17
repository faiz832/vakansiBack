import React, { useState } from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews } = tour;
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    userId: "01",
    userEmail: "example@gmail.com",
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const serviceFee = 10;
  const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee);

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/thank-you");
  };

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          IDR {price}K<span>/per orang</span>
        </h3>
        <span className="tour__rating d-flex align-items-center">
          <i className="ri-star-s-fill"></i>
          {avgRating === 0 ? null : avgRating}({reviews?.length})
        </span>
      </div>

      <div className="booking__form">
        <h5>Informasi</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Nama Lengkap"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Telepon"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input type="date" placeholder="" id="bookAt" required onChange={handleChange} />
            <input
              type="number"
              placeholder="guest"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>

      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              IDR {price}K <i className="ri-close-line mt-1"></i>1 orang
            </h5>
            <span>IDR {price}K</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Biaya operasional</h5>
            <span>IDR {serviceFee}K</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span>IDR {totalAmount}K</span>
          </ListGroupItem>
        </ListGroup>

        <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
          Pesan Sekarang
        </Button>
      </div>
    </div>
  );
};

export default Booking;
