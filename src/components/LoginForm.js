import React, {Component} from 'react';
import {Button, Card, CardSection, Input} from './common';

class LoginForm extends Component{

    state = { email: '', password: ''};

    render(){
        return(
            <Card>
                <CardSection>
                  <Input
                  secureTextEntry = {false}
                  label = "Email"
                  placeholder = "user@gmail.com"                  
                   value = {this.state.email}
                   onChangeText = {text => this.setState({email: text})}
                   style={{height:20, width:100}}
                   />
                </CardSection>

                <CardSection>
                  <Input
                   secureTextEntry = {true}                                    
                   label = "Password"
                   placeholder = "password"
                   value = {this.state.password}
                   onChangeText = {text => this.setState({password: text})}
                   style={{height:20, width:100}}
                   />
                </CardSection>

                <CardSection >
                    <Button>
                        Log in
                    </Button>
                </CardSection>

            </Card>
        );
    }
};

export default LoginForm;