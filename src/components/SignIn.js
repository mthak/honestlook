import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import React from "react";
import {withRouter, Redirect} from "react-router-dom";
import '../stylesheet/signup.css';

class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return (
            <Container fluid = {true} className="sign-form" >
                    <h1 className="text-center">HonestLook Sign In</h1>
                    <Row>
                        <Col xs="4"></Col>
                        <Col xs="4">
                            <Form>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="email"
                                        // onChange={this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input type="password" name="password" id="examplePassword" placeholder="password"
                                        // onChange={this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                                <Button className="signinbtn">Sign In</Button>
                                <Button className="consentbtn">Consent</Button>
                            </Form>
                        </Col>
                        <Col xs="4"></Col>
                    </Row>
            </Container>
        );
    }
}

export default withRouter(SignIn);
