import { useEffect, useState } from "react";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoading } from "../store/Slices/App/AppSlice";
import Product from "../components/Product";
import Loader from "../components/loader";
import Toastify from "../components/Toastify";
import listProducts from "../store/Slices/Product/ProductFunctions";
import ErrorImage from "../assets/ErrorBadRequest.svg";
import { AiFillCar } from "react-icons/ai";
import { RiMoneyDollarCircleLine, Ri24HoursFill } from "react-icons/ri";
import HomeProductCard from "../components/HomeProductCard";
import { getAllCategoriesList } from "../network/endpoints/Products";
import { FaCartArrowDown } from "react-icons/fa";

import { Link } from 'react-router-dom';
import { userLogout } from '../store/Slices/User/UserSlice';
import { allUsersReset } from '../store/Slices/AllUsers/AllUsersSlice';


import { useTranslation } from 'react-i18next';
import "../i18n"
const HomeScreen = () => {
  
  const{t}=useTranslation();
  const [allCategories, setAllCategories] = useState([]);
  const { products, error } = useSelector((state) => state.productList);
  const app = useSelector((state) => state.app);

  
 const { userInfo } = useSelector((state) => state.user);
 const logoutHandler = () => {
  dispatch(toggleLoading(true));
  dispatch(userLogout());
  dispatch(userRegisterRemove());
  dispatch(resetCartItems());
  dispatch(resetShippingAddress());
  dispatch(orderDetailsReset());
  dispatch(allUsersReset());
  setTimeout(() => dispatch(toggleLoading(false)), 2000);
};

  const dispatch = useDispatch();

  const Load = async () => {
    await getAllCategoriesList().then((response) => {
      setAllCategories(response.data);
    });
    await listProducts(dispatch, "All");
    setTimeout(() => {
      dispatch(toggleLoading(false));
    }, 500);
  };

  const getCategory = async (category) => {
    dispatch(toggleLoading(true));
    await listProducts(dispatch, category);
    setTimeout(() => {
      dispatch(toggleLoading(false));
    }, 2000);
  };
  useEffect(() => {
    if (userInfo) {
      dispatch(toggleLoading(true));
      // Clear old location state
      window.history.replaceState(null, '', location.pathname);
      dispatch(toggleLoading(false));
    }
  }, [userInfo]);

  const categoryTranslations = allCategories.reduce((acc, category) => {
    acc[category] = t(category);
    return acc;
  }, {});
  
  const filteredProducts = userInfo.isProfessional ? products.filter(product => product.isProfesional) : products;

  return (
    <div className="page-screen">
      {app.isLoading ? (
        <Loader />
      ) : error ? (
        <>
          {Toastify(error, "error")}
          <img className="error-image" src={ErrorImage} alt="" />
        </>
      ) : (


        
        <Row>         
          <Container fluid>
            <Row >
              <Col className="h-100">
              <Image fluid src="src/assets/gd.jpg" />
                
              </Col>
              <Col className="h-100">
              <Image fluid src="src/assets/gd2.jpg" />
                
              </Col>
            </Row>
            
          </Container>
          <h3 className="mt-5 mb-4">
          {t('featuredProducts.title')}<FaCartArrowDown />
          </h3>
          <Row>
            <Col sm className="d-flex justify-content-center">
              <Button
                variant="outline-primary"
                className="my-3 category-button "
                value="All"
                onClick={(e) => getCategory(e.target.value)}
              >
                {t('categories.all')}
              </Button>
            </Col>

            {allCategories.map((element) => (
              <Col sm className="d-flex justify-content-center" key={element}>
              <Button
                variant="outline-primary"
                className="my-3 category-button"
                 value={element}
                 onClick={(e) => getCategory(e.target.value)}
                 style={{ backgroundColor: 'transparent', border: '1px solid red' }}
               >
              {categoryTranslations[element]}
              </Button>
               </Col>
))}
          </Row> 
            { userInfo.isProfessional && (
    <Row className="mt-4 mb-4">
      {products.map((product) => (
        product.isProfesional && (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        )
      ))}
    </Row>
  )}
  {userInfo && !userInfo.isProfessional && (
  <Row className="mt-4 mb-4">
    {products.map((product) => (
      !product.isProfesional && (
        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
          <Product product={product} />
        </Col>
      )
    ))}
  </Row>
)}
 
         
          <section className="bg-white text-center p-5 mt-4">
            <div className="container p-3">
              <h3 className="text-black">{t('subscribe.title')}</h3>
              <form action="#" method="Post">
                <Row>
                  <Col md className="margin-auto my-3 ">
                    <Button
                      type="button"
                      variant="outline-secondary"
                      className="py-2 text-black"
                    >
                        {t('subscribe.button')}<i className="mx-3 fa fa-envelope text-black"></i>
                    </Button>
                  </Col>
                </Row>
              </form>
            </div>
          </section>
        </Row>
      )}
    </div>
  );
};

export default HomeScreen;
