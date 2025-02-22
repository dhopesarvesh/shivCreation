// src/App.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';
import './home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





const Home = () => {
  const cards = [
    {
        id: 1,
        img: "/assets/Samai.jpg",
        title: "Card Title 1",
        text: "This is a slightly longer card.",
        link: "",
      },
   
    {
      id: 2,
      img: "/assets/Samai.jpg",
      title: "Card Title 3",
      text: "This is a slightly longer card.",
      link: "",
    },
    {
        id: 3,
        img: "/assets/Samai.jpg",
        title: "Card Title 3",
        text: "This is a slightly longer card.",
        link: "",
      },
    

  ];
  const cards1 = [
    {
        id: 1,
        img: "/assets/Samai.jpg",
        title: "Card Title 3",
        text: "This is a slightly longer card.",
        link: "",
      },
      {
        id: 2,
        img: "/assets/Samai.jpg",
        title: "Card Title 3",
        text: "This is a slightly longer card.",
        link: "",
      },
      {
        id: 3,
        img: "/assets/Samai.jpg",
        title: "Card Title 3",
        text: "This is a slightly longer card.",
        link: "",
      },
     
  ];

  const card2 = [
    {
        id: 1,
        img: "/assets/Samai.jpg",
        title: "Card Title 3",
        text: "This is a slightly longer card.",
        link: "",
      },
      {
        id: 2,
        img: "/assets/Samai.jpg",
        title: "Card Title 3",
        text: "This is a slightly longer card.",
        link: "",
      },
      {
        id: 3,
        img: "/assets/Samai.jpg",
        title: "Card Title 3",
        text: "This is a slightly longer card.",
        link: "",
      },
  ];

  const card3 = [
    {
        id: 1,
        img: "/assets/Samai.jpg",
        title: "Card Title 3",
        text: "This is a slightly longer card.",
        link: "",
      },
      {
        id: 2,
        img: "/assets/Samai.jpg",
        title: "Card Title 3",
        text: "This is a slightly longer card.",
        link: "",
      },
      {
        id: 3,
        img: "/assets/Samai.jpg",
        title: "Card Title 3",
        text: "This is a slightly longer card.",
        link: "",
      },,
  ];

  const card4 = [
    {
        id: 1,
        img: "/assets/Samai.jpg",
        title: "Card Title 3",
        text: "This is a slightly longer card.",
        link: "",
      },
      {
        id: 2,
        img: "/assets/Samai.jpg",
        title: "Card Title 3",
        text: "This is a slightly longer card.",
        link: "",
      },
      {
        id: 3,
        img: "/assets/Samai.jpg",
        title: "Card Title 3",
        text: "This is a slightly longer card.",
        link: "",
      },
  ];
  const navigate = useNavigate();

  return (
    <>
    
      <div>
        
        
        
        <div className="banner">
      <img 
        src="https://t4.ftcdn.net/jpg/05/06/47/83/360_F_506478367_PKcJr3mZMnZHwROfO4v70EOWiKiY9lVn.jpg" 
        alt="Banner" 
        className="banner-image" 
      />
      <div className="banner-content">
        <h1> Welcome!  </h1>
        <p>  Shiv Creations </p>
        <button onClick={() => navigate("/shopall")}> Shop All </button>
      </div>
    </div>
    
    <div className='enter'>
     <div className="shop">
       <h2> Shop Rangoli by Categories </h2>
     </div>
     <div className="cardss">
       <MDBCard onClick={() => navigate("")}className="clickable-card" >
         <MDBCardImage src='/assets/Samai.jpg' alt='Daily use rangolis' className='imagess' position='top' />
         <MDBCardBody>
           <MDBCardText>
             Daily Use Rangolis
           </MDBCardText>
         </MDBCardBody>
       </MDBCard>
       <MDBCard onClick={() => navigate("")} className="clickable-card">
         <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/182.webp' alt='...' position='top' />
         <MDBCardBody>
           <MDBCardText>
             Pooja Collections
           </MDBCardText>
         </MDBCardBody>
       </MDBCard>
       <MDBCard onClick={() => navigate("")} className="clickable-card">
         <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/182.webp' alt='...' position='top' />
         <MDBCardBody>
           <MDBCardText>
             Diwali Collections
           </MDBCardText>
         </MDBCardBody>
       </MDBCard>
       
       <MDBCard onClick={() => navigate("")} className="clickable-card">
         <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/182.webp' alt='...' position='top' />
         <MDBCardBody>
           <MDBCardText>
             Flower Design
           </MDBCardText>
         </MDBCardBody>
       </MDBCard>
      
       <MDBCard onClick={() => navigate("")} className="clickable-card">
         <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/182.webp' alt='...' position='top' />
         <MDBCardBody>
           <MDBCardText>
             Border / Corner Collections
           </MDBCardText>
         </MDBCardBody>
       </MDBCard>
       
       

     </div>
     </div>
     <div className="slider-container">
       <h2>Daily Use Rangolis </h2>

       <Swiper
         slidesPerView={3} 
         spaceBetween={20}
         navigation={false} 
         pagination={{ clickable: true }} 
         loop={true} 
         modules={[Navigation, Pagination]}
         className="mySwiper"
         breakpoints={{
           320: { slidesPerView: 1 }, 
           768: { slidesPerView: 2 }, 
           1024: { slidesPerView: 3 }, 
         }}
       >
         {cards.map((card) => (
           <SwiperSlide key={card.id}>
             <a href={card.link} className="card clickable-card">
               <img src={card.img} className="card-img-top" alt={card.title} />
               <div className="card-body">
                 <h5 className="card-title">{card.title}</h5>
                 <p className="card-text">{card.text}</p>
               </div>
             </a>
           </SwiperSlide>
         ))}<br></br><br></br><br></br>
       </Swiper>
     </div><br></br>
        </div>
    
        <div className="slider-container">
       <h2> Pooja Collections </h2>

       <Swiper
         slidesPerView={3} 
         spaceBetween={20}
         navigation={false} 
         pagination={{ clickable: true }} 
         loop={true} 
         modules={[Navigation, Pagination]}
         className="mySwiper"
         breakpoints={{
           320: { slidesPerView: 1 }, 
           768: { slidesPerView: 2 }, 
           1024: { slidesPerView: 3 }, 
         }}
       >
         {cards1.map((card) => (
           <SwiperSlide key={card.id}>
             <a href={card.link} className="card clickable-card">
               <img src={card.img} className="card-img-top" alt={card.title} />
               <div className="card-body">
                 <h5 className="card-title">{card.title}</h5>
                 <p className="card-text">{card.text}</p>
               </div>
             </a>
           </SwiperSlide>
         ))}<br></br><br></br><br></br>
       </Swiper>
     </div><br></br>
     <div className="slider-container">
       <h2> Diwali Collections </h2>

       <Swiper
         slidesPerView={3} 
         spaceBetween={20}
         navigation={false} 
         pagination={{ clickable: true }} 
         loop={true} 
         modules={[Navigation, Pagination]}
         className="mySwiper"
         breakpoints={{
           320: { slidesPerView: 1 }, 
           768: { slidesPerView: 2 }, 
           1024: { slidesPerView: 3 }, 
         }}
       >
         {card2.map((card) => (
           <SwiperSlide key={card.id}>
             <a href={card.link} className="card clickable-card">
               <img src={card.img} className="card-img-top" alt={card.title} />
               <div className="card-body">
                 <h5 className="card-title">{card.title}</h5>
                 <p className="card-text">{card.text}</p>
               </div>
             </a>
           </SwiperSlide>
         ))}<br></br><br></br><br></br>
       </Swiper>
     </div><br></br>

     <div className="slider-container">
       <h2> Flower Design </h2>

       <Swiper
         slidesPerView={3} 
         spaceBetween={20}
         navigation={false} 
         pagination={{ clickable: true }} 
         loop={true} 
         modules={[Navigation, Pagination]}
         className="mySwiper"
         breakpoints={{
           320: { slidesPerView: 1 }, 
           768: { slidesPerView: 2 }, 
           1024: { slidesPerView: 3 }, 
         }}
       >
         {card3.map((card) => (
           <SwiperSlide key={card.id}>
             <a href={card.link} className="card clickable-card">
               <img src={card.img} className="card-img-top" alt={card.title} />
               <div className="card-body">
                 <h5 className="card-title">{card.title}</h5>
                 <p className="card-text">{card.text}</p>
               </div>
             </a>
           </SwiperSlide>
         ))}<br></br><br></br><br></br>
       </Swiper>
     </div><br></br>

     <div className="slider-container">
       <h2> Border / Corner Designs </h2>

       <Swiper
         slidesPerView={3} 
         spaceBetween={20}
         navigation={false} 
         pagination={{ clickable: true }} 
         loop={true} 
         modules={[Navigation, Pagination]}
         className="mySwiper"
         breakpoints={{
           320: { slidesPerView: 1 }, 
           768: { slidesPerView: 2 }, 
           1024: { slidesPerView: 3 }, 
         }}
       >
         {card4.map((card) => (
           <SwiperSlide key={card.id}>
             <a href={card.link} className="card clickable-card">
               <img src={card.img} className="card-img-top" alt={card.title} />
               <div className="card-body">
                 <h5 className="card-title">{card.title}</h5>
                 <p className="card-text">{card.text}</p>
               </div>
             </a>
           </SwiperSlide>
         ))}<br></br><br></br><br></br>
       </Swiper>
     </div><br></br>
        
        
        

     


    </>
  );
}

export default Home;