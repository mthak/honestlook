import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import React from "react";
import {withRouter, Redirect} from "react-router-dom";
import '../stylesheet/signup.css';
import axios from 'axios';
import Swal from 'sweetalert2';

class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isOver18: false,
            isConsent: false,
        };
    }

    handleChange(event) {
        let values = this.state;
        values[event.target.name] = event.target.value;
        this.setState(values);
    }

    handleSignup(){
        let payload = {"data": this.state};
        axios.post('http://34.212.178.4:5000/adduser', payload)
            .then(function (response) {
                if(response.status === 200){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully created',
                        type: 'success',
                        confirmButtonText: 'Next'
                    })
                        .then(()=>{
                            window.location.assign('http://localhost:3000/signin')
                        })
                } else{
                    Swal.fire({
                        title: 'Error!',
                        text: response.data.message,
                        type: 'error',
                        confirmButtonText: 'Try again'
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    checkAge(){
        if(! this.state.isOver18){
            Swal.fire({
                title: 'Error!',
                text: 'You need to be over 18 to continue.',
                type: 'error',
                confirmButtonText: 'Go back'
            })
        }
    }

    render(){
        return (
            <Container fluid = {true} className="sign-form" >
                {/*<div className="sign-form">*/}
                    <h1 className="text-center">HonestLook Sign-Up Form</h1>
                    <Row>
                        <Col xs="4"></Col>
                        <Col xs="4">
                            <Form>
                                <FormGroup>
                                    <Label for="name">Name</Label>
                                    <Input type="text" name="name" id="name" placeholder="name"
                                        onChange={this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="email"
                                        onChange={this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input type="password" name="password" id="examplePassword" placeholder="password"
                                           onChange={this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="phone">Phone</Label>
                                    <Input type="text" name="phone" id="phone" placeholder="phone number"
                                        onChange={this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" id="age"
                                        onClick={()=> document.getElementById("age").checked == true &&
                                        this.setState({isOver18: true})}
                                        /> Are you over 18?
                                    </Label>
                                </FormGroup>

                                <Button
                                    onClick={this.state.isOver18 ? this.handleSignup.bind(this) : this.checkAge.bind(this) }
                                    className="signupbtn">Sign Up
                                </Button>
                                <div style={{"paddingLeft": "70%"}}>
                                    <a href="http://localhost:3000/signin"> Already have an account? </a>
                                </div>
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
