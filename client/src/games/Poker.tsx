import React from 'react';
import { ChatMessage, ChatState, LoginMessage, CardMessage } from '../types';
import { ChatContext } from '../ChatContext';
import * as PIXI from 'pixi.js';
import myImage from '../assets/cards.png';
import {CardSheet} from '../commons/Resource';
import Game from './Game';
import PokerPlayer from '../users/PokerPlayer';
import getHistory from '../commons/history';

class Poker extends Game {
  static contextType = ChatContext;

  public Players: any = [];
  
  public bunny: any = null;
  public state: any = {app: null}
  constructor(props:any) {
    super(props);
    
  }

  componentDidMount () {

    super.componentDidMount();
    // initiate socket connection
    this.context.init();

    const observable = this.context.onMessage();

    observable.subscribe((m: ChatMessage) => {
      // let messages = this.state.messages;
      console.log(m);
      // messages.push(m);
      // this.setState({ messages: messages });
    });
    let initMessage = getHistory().location.state.message;
    console.log(initMessage);
    this.InitWith(initMessage);
  }
  public Init()
  {
    // itit stuff
     
    
  }

  public InitWith(message: CardMessage)
  {   

    let yourPlayer = new PokerPlayer(message.position, message.cards);
    yourPlayer.setPosition(this.canvasApp.screen.width / 2 - 100 ,this.canvasApp.screen.height - 100);
    this.canvasApp.stage.addChild(yourPlayer.avatar);
    
  }

  public loadResource()
  {

  }

  public Update(delta:any)
  {
    // this.bunny.rotation += 0.1 * delta;
    // console.log('');
  }

  componentWillUnmount () {
    this.context.disconnect();
  }

render() {
    return super.render();
  }
}

export default Poker;
