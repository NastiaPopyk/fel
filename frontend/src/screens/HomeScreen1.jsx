import React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoading } from "../store/Slices/App/AppSlice";
import listProducts from "../store/Slices/Product/ProductFunctions";
import { getAllCategoriesList } from "../network/endpoints/Products";
import { Container, Row } from 'react-bootstrap'; // Доданий імпорт Row
import { Link } from "react-router-dom";
import HomeScreen2 from "../screens/HomeScreen2";
const HomeScreen1 = () => {

  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      dispatch(toggleLoading(true));
      // Clear old location state
      window.history.replaceState(null, '', location.pathname);
      dispatch(toggleLoading(false));
    }
  }, [userInfo]);


  return (
    <div className="page-screen">
      <header className="header">
        <Container>
          <Row>
            <div className="header-content">
            
            
              <nav><img className="h1log" src="src/assets/h1.jpg" alt="" style={{ width: '100px', marginRight: '100px'  }} />
              {userInfo ? (
                  <>
                    <Link className="link-color-black " to="/shop">
                      Shop
                    </Link>
                    
                  </>
                ) : (
                  <>
                    <Link className="link-color-black " to="/explore">
                      Explore
                    </Link>
                    <Link className="link-color-black " to="/login">
                      Login
                    </Link>
                    <Link to="/about">About</Link>
                    
                    <Link to="/contact">Contact</Link>
                  </>
                )}
                 </nav>
            </div>
          </Row>
        </Container>
      </header>
      <Row> 
        <Container fluid>
          <div className="video-bg">
            <video className="video" src="src/assets/bg.mp4" type="video/mp4" autoPlay muted loop></video>
            
            <div className="text-overlay">
              <div className="text-center mt-5">
                <h1 className="display-2 font-weight-bold">LEADING ONLINE STORE FOR COSMETOLOGIST WE SELL BEAUTY</h1>
                <div className="d-flex justify-content-center align-items-center" style={{ height: "30vh" }}>
                  {userInfo ? (
                    <div className="button-container">
                      <Link className="link-color-black important-link" to="/home">
                        Shop
                      </Link> 
                    </div>
                  ) : (
                    <Link className="link-color-black important-link" to="/explore">
                      Explore
                    </Link> 
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Row>
    </div>
  );
};

export default HomeScreen1;
