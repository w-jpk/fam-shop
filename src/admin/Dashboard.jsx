  import React from "react";
  import Helmet from "../components/Helmet/Helmet";
  import { Container, Row, Col } from "reactstrap";
  import useGetData from "../custom-hooks/useGetData";

  import "../styles/dashboard.css";

  const Dashboard = () => {
    const { data: products } = useGetData("products");
    const { data: users } = useGetData("users");
    const { data: orders } = useGetData("orders");

    return (
      <Helmet title={"Статистика"}>
        <section>
          <Container>
          <Row>
            <Col>
              <h1 className="article__title">Статистика за все время</h1>
            </Col>
          </Row>
            <Row>
              <Col className="lg-3">
                <div className="revenue__box">
                  <h5>Всего заработано</h5>
                  <span>4604.41₽</span>
                </div>
              </Col>
              <Col className="lg-3">
                <div className="order__box">
                  <h5>Всего заказов</h5>
                  <span>{orders.length}</span>
                </div>
              </Col>
              <Col className="lg-3">
                <div className="products__box">
                  <h5>Всего товаров</h5>
                  <span>{products.length}</span>
                </div>
              </Col>
              <Col className="lg-3">
                <div className="users__box">
                  <h5>Всего пользователей</h5>
                  <span>{users.length}</span>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    );
  };

  export default Dashboard;
