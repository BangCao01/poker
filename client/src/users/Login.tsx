import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { LoginMessage, LoginState, CardMessage } from '../types';
import { ChatContext } from '../ChatContext';
import { RouteComponentProps } from "react-router-dom";
import getHistory from '../commons/history'; 


interface PropsInterface extends RouteComponentProps<any> {}
const LoginForm: any = {};
class Login extends React.Component {
  static contextType = ChatContext;

  state: LoginState = {
    password: '',
    username: ''
  }

  componentDidMount () {
    

    //initiate socket connection
    this.context.init();

    const observable = this.context.onLoginMessage();
    // const { history } = this.props;
    // if(history) history.push('/home');

    observable.subscribe((m: CardMessage) => {
      console.log(m);
      // let messages = this.state.messages;

      // messages.push(m);
      // this.setState({ messages: messages });
      getHistory().push("/poker", ({message:m}));

    });
  }

  componentWillUnmount () {
    this.context.disconnect();
  }

  render () {

    const updateInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
      const name = e.target.name;
      const value = e.target.value;
      LoginForm[name] = value;
      this.setState({ password: LoginForm['password']});
      this.setState({ username: LoginForm['username']});
    }

    const handleMessage = (): void => {

      console.log(LoginForm);

      if (this.state.password !== '' && this.state.username !== '') {
        this.context.sendLogin({
          password: this.state.password,
          username: this.state.username
        });
        // this.setState({ input: '' });
      }
    };

    let msgIndex = 0;
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />

        
        <input
          className="username"
          name='username'
          placeholder="Type your name ..."
          onChange={updateInput}
          value={this.state.username}
        />


        <input
          className="password"
          name='password'
          type='password'
          placeholder="Password ..."
          onChange={updateInput}
          value={this.state.password}
        />
        <p>
          <button onClick={() => { handleMessage() }}>
            Login
          </button>
        </p>
      </div>
    );
  }
}

export default Login;
