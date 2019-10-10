import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import React from "react";
import {withRouter, Redirect} from "react-router-dom";
import '../stylesheet/signup.css';

class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <Container fluid = {true} className="sign-form" >
                {/*<div className="sign-form">*/}
                    <h1 className="text-center">HonestLook Sign Up Form</h1>
                    <Row>
                        <Col xs="4"></Col>
                        <Col xs="4">
                            <Form>
                                <FormGroup>
                                    <Label for="name">Name</Label>
                                    <Input type="text" name="name" id="name" placeholder="name"
                                           // style={{"width":"50%"}}
                                        // onChange={this.handleChange.bind(this)}
                                    />
                                </FormGroup>
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
                                <FormGroup>
                                    <Label for="phone">Phone</Label>
                                    <Input type="text" name="phone" id="phone" placeholder="phone number"
                                        // onChange={this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" /> Are you over 18?
                                    </Label>
                                </FormGroup>

                                <Button className="signupbtn">Sign Up</Button>
                            </Form>
                        </Col>
                        <Col xs="4"></Col>
                    </Row>
                {/*</div>*/}
            </Container>
        );
    }
}


export default withRouter(SignUp);
