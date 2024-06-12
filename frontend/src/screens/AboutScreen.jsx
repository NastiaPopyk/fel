import { useEffect, useState } from "react";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";


import { useTranslation } from 'react-i18next';
import "../i18n"
const AboutScreen = () => {
  
 
  return (
    <div className="page-screen">
    <div className="page-screen row d-flex justify-content-center align-items-center height-100">
   <Row className="shadow-lg p-3">
     <div className="d-flex justify-content-center"  style={{ marginTop: '5rem' }}>

  <h3>Abouy Us</h3>
   </div>
   
  <div className="d-flex justify-content-center" style={{ marginTop: '3rem' }}>
<h6>Welcome to the Beauty Cartel Distribution, your trusted partner 
  in the world of cosmetic distribution. With a passion for beauty and
   a commitment to excellence, we have established ourselves as a leading
    distributor of high-quality cosmetic products. As a pioneering force
     in the industry, we are proud to be the first and exclusive distributor
      of cosmetic products in the province of Andalusia and throughout Spain
      . Our team of experts has curated a diverse range of brands and products,
       from niche skincare lines to innovative makeup collections, to cater
        to the evolving needs of our customers. Our mission is to provide
        exceptional service, prompt delivery, and unparalleled product knowledge,
        ensuring that our clients can focus on what matters most - delivering 
        unparalleled beauty experiences to their customers.
</h6>

  </div>
  
<li className="mb1">
         <a href="">
           <i aria-hidden="true" className="fa fa-envelope"></i>
         </a>
         info@beautycarteldistribution.com
       </li>
       <li className="mb1">
         <a href="">
           <i aria-hidden="true" className="fa fa-phone"></i>
         </a>
         +34 681 907 280
       </li>
<div className="d-flex justify-content-center" style={{ marginTop: '3rem' }}>

<Col>
<img src="src/assets/ab-1.png" alt="" style={{ width: '125px', marginRight: '125px'  }} />

</Col>

<Col>
<img src="src/assets/ab-2.png" alt="" style={{ width: '125px', marginRight: '125px'  }} />

</Col>
<Col>
<img src="src/assets/ab-3.png" alt="" style={{ width: '125px', marginRight: '125px'  }} />

</Col>
<Col>
<img src="src/assets/ab-4.png" alt="" style={{ width: '125px', marginRight: '125px'  }} />

</Col>

</div>
<div className="d-flex justify-content-center" style={{ marginTop: '5rem' }}>

</div>
<Col>
<div style={{ marginTop: '12rem' }}>
</div>
<div>

<h6>With a strong presence in Andalusia and beyond, we are committed to bringing the latest trends and innovations from around the world to our customers. Our extensive network of relationships with leading manufacturers and suppliers allows us to source the best products and offer competitive pricing, ensuring that our clients can thrive in an ever-changing market. Whether you're a salon owner, spa manager, or e-commerce retailer, we are dedicated to providing personalized support and tailored solutions to meet your unique needs. At the Beauty Cartel Distribution, we believe that beauty should be accessible to everyone, and we strive to make it happen through our extensive range of products and exceptional service.</h6>
</div>
</Col>
<Col style={{ marginTop: '3rem' }}>
<img src="src/assets/ab.jpg" alt="" style={{ width: '500px', height: '500px'  }} />

</Col>
 
   </Row>
 </div>
 
 </div>
  );
};

export default AboutScreen;
