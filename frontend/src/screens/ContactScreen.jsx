import { useEffect, useState } from "react";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import { GoogleMap, LoadScript, Marker as GoogleMarker } from '@react-google-maps/api';
import { MapContainer, TileLayer, Marker as LeafletMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const containerStyle = {
    width: '100%',
    height: '400px'
  };
  
  const center = {
    lat: 36.5114,
    lng: -4.8825
  };
  
import { useTranslation } from 'react-i18next';
import "../i18n"
const ContactScreen = () => {
  
 
  return (
    <div className="page-screen">
       <div className="page-screen row d-flex justify-content-center align-items-center height-100">
      <Row className="shadow-lg p-3">
        <div className="d-flex justify-content-center">

     <h3>Contact us</h3>
      </div>
      <div className="d-flex justify-content-center" style={{ marginTop: '1rem' }} >
        
     <h5>Customer Service</h5>
      </div>
     <div style={{ marginTop: '3rem' }}>
<h6>Located in the heart of Marbella, our company is perfectly situated to take advantage of the thriving cosmetology industry in this picturesque coastal town. Marbella is renowned for its stunning beaches, vibrant nightlife, and luxurious lifestyle, making it an ideal destination for beauty enthusiasts and professionals alike. With its mild climate and stunning scenery, Marbella provides the perfect backdrop for our team to develop and grow their skills, and offer our clients exceptional services and products that cater to their unique needs and preferences. Although we are based in Marbella, we can ship our products and services throughout the province of Andalusia, Spain, as well as globally, ensuring that our high-quality cosmetology offerings are accessible to clients worldwide.
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
<div style={{ marginTop: '3rem' }}  >

<MapContainer center={[36.5114, -4.8825]} zoom={13} style={{ width: '100%', height: '400px' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LeafletMarker position={[36.5114, -4.8825]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </LeafletMarker>
          </MapContainer>
</div>




      </Row>
    </div>
    
    </div>
  );
};

export default ContactScreen;
