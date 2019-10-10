import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import React from "react";
import {withRouter, Redirect} from "react-router-dom";
import '../stylesheet/signup.css';
import axios from "axios";
import Swal from "sweetalert2";
import Stepper from "react-stepper-horizontal";

class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleChange(event){
        let values = this.state;
        values[event.target.name] = event.target.value;
        this.setState(values);
    }

    handleSignin(){
        let that = this;
        axios.get('http://34.212.178.4:5000/getuser/'+this.state.name)
            .then(function (response) {
                if(response.data.name === that.state.name && response.data.password === that.state.password){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully signed in',
                        type: 'success',
                        confirmButtonText: 'Next'
                    })
                        .then(()=>{
                            window.location.assign('http://localhost:3000/videos')
                        })
                }else{
                    Swal.fire({
                        title: 'Error!',
                        text: response.data.message,
                        type: 'error',
                        confirmButtonText: 'Wrong email or password'
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    render(){
        return (
            <Container fluid = {true} className="sign-form" >
                    <h1 className="text-center">HonestLook Sign In</h1>
                    <div>
                        <Stepper steps={ [{title: 'Sign Up'}, {title: 'Consent'}, {title: 'Finish'}] } activeStep={ 2 } />
                    </div>
                    <Row>
                        <Col xs="4"></Col>
                        <Col xs="4">
                            <Form>
                                <FormGroup>
                                    <Label for="exampleEmail">Name</Label>
                                    <Input type="email" name="name" id="email" placeholder="name"
                                        onChange={this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input type="password" name="password" id="password" placeholder="password"
                                        onChange={this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                                <Button className="signinbtn"
                                        onClick={this.handleSignin.bind(this)}
                                >Sign In</Button>
                                <Button className="consentbtn"
                                        // onClick={()=>{
                                        //     docuSignClick.Clickwrap.render({
                                        //         environment: 'https://demo.docusign.net',
                                        //         accountId: 'aac8309d-b03d-49a9-8e60-9030f783691b',
                                        //         clickwrapId: '5dd120eb-3bdf-4493-a69f-f1c0b51eff48',
                                        //         clientUserId: 'UNIQUE_USER_ID'
                                        //     }, '#ds-clickwrap');
                                        // }}
                                >Consent</Button>
                            </Form>
                        </Col>
                        <Col xs="4"></Col>
                    </Row>
            </Container>
        );
    }
}

export default withRouter(SignIn);
