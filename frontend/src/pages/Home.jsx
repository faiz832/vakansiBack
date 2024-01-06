import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";
import Subtitle from "./../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/FeaturedTour/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Cari tahu sebelum kau pergi"} />
                  <img src={worldImg} alt="img" />
                </div>
                <h1>
                  Vakansi membuka pintu <span className="highlight">ingatan</span>
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quo vitae cum
                  laborum nobis laboriosam consequatur quasi, voluptatibus itaque architecto quidem
                  corrupti delectus non, neque dolorem. Praesentium maxime laudantium natus.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="img" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} alt="video" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="img" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">Pelayanan kami</h5>
              <h2 className="services__title">Menawarkan pelayanan terbaik</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Jelajahi"} />
              <h2 className="featured__tour-title">Tempat unggulan kami</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Pengalaman"} />
                <h2>
                  Dengan pengalaman kami <br />
                  kami akan melayani sepenuh hati
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                  Vero repudiandae ad accusamus nisi optio molestiae, saepe repellendus itaque
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Perjalanan Berhasil</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Pelanggan</h6>
                </div>
                <div className="counter__box">
                  <span>1</span>
                  <h6>Tahun pengalaman</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Galeri"} />
              <h2 className="gallery__title">kunjungi galeri tur pelanggan kami</h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Testimoni"} />
              <h2 className="testimonial__title">Apa kata mereka</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      <Newsletter />
    </>
  );
};

export default Home;
