import React from "react";
import { Row, Col, Container } from 'reactstrap'

const FooterPage = () => {
    return (
        <div style={{
            background: 'black', marginTop:'20px', color: 'white' }}>
            <Container>
            <Row>
                    <Col><h5 className="title" style={{
                        marginTop:'20px', color: 'white' }}>Footer Content</h5>
                    <p>
                        Here you can use rows and columns here to organize your footer
                        content.
                    </p>
                </Col>
                <Col><h5 className="title">Links</h5>
                    <h5 className="title">Links</h5>
                    <ul>
                        <li className="list-unstyled">
                            <a href="#!">Link 1</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Link 2</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Link 3</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Link 4</a>
                        </li>
                    </ul>
                </Col>
                    <Col></Col>


            </Row>

            </Container>
        </div>
    )
};
export default FooterPage;