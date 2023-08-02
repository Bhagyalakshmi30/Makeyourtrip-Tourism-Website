

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  Button, Form } from 'react-bootstrap';
import { Col,  Row, Container, Card} from "react-bootstrap";

function Login()  {

    return (
        <div>
            <h1>Make yout Trip - Your travel partner</h1>
            <h2 >Don't have an account register here</h2>
            
            <div className="mt-5 mb-5">
                <Container>
                    <Row className="vh-50 d-flex justify-content-center align-items-center">
                        <Col md={8} lg={6} xs={12}>
                            <div className="border border-3 border-primary"></div>
                            <Card className="shadow">
                                <Card.Body>
                                    <div className="mb-3 mt-md-4">
                                        <h2 className="fw-bold mb-2 text-uppercase ">SIGN UP</h2>
                                        <p className=" mb-3">Please enter your login and password!</p>
                                        <div className="mb-3">
                                            <Form>
                                                <Form.Group className="mb-3 ms-5 me-5" controlId="formBasicEmail">
                                                    <Form.Label className="text">
                                                        Email address
                                                    </Form.Label>
                                                    <Form.Control type="email" placeholder="Enter email" />
                                                </Form.Group>

                                                <Form.Group
                                                    className="mb-3 ms-5 me-5"
                                                    controlId="formBasicPassword"
                                                >
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control type="password" placeholder="Password" />
                                                </Form.Group>
                                                
                                                <div className="d-grid ">
                                                    <Button variant="primary" type="submit">
                                                        Login
                                                    </Button>
                                                </div>
                                            </Form>
                                            
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Link to="/" >
                <button>Back to Home Page</button>
            </Link>

            
            
        </div>
    );
};

export default Login;
