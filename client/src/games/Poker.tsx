import React from 'react';
import { ChatMessage, ChatState, LoginMessage, CardMessage, UserJoinRoomMessage } from '../types';
import { ChatContext } from '../ChatContext';
import * as PIXI from 'pixi.js';
import myImage from '../assets/cards.png';
import {CardSheet} from '../commons/Resource';
import Game from './Game';
import PokerPlayer from '../users/PokerPlayer';
import getHistory from '../commons/history';

class Poker extends Game {
  static contextType = ChatContext;

  public players: any = [];
  
  public numOfPlayer: number = 0;
  public myPlayer: any = null;
  public state: any = {app: null}
  constructor(props:any) {
    super(props);
    
  }

  componentDidMount () {

    super.componentDidMount();
    // initiate socket connection
    this.context.init();
    const observable = this.context.onJoinRoomMessage();

    observable.subscribe((m: UserJoinRoomMessage) => {
      console.log(m);
      this.updateUserInRoom(m.count);
      this.layoutPlayerPosition();
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

    
    
    let card = message.cards;
    let player = new PokerPlayer(message.positionId, card);
    this.players.push(player);
    this.canvasApp.stage.addChild(player.avatar);
    this.myPlayer = player;
    
    let num = '' + sessionStorage.getItem('numOfPlayer');
    let count = parseInt(num);
    console.log('count : ' + count);
    count = (message.count > count || num.length <=0 ) ? message.count: count;
    if(count > 1)
    {
      
      this.updateUserInRoom(count);
    } 
    this.layoutPlayerPosition();
    
    
  }

  public updateUserInRoom(count: number)
  {   

    let card = ',';
    for(let i: number = 1; i <= count; i++ )
    {
          if(i !== this.myPlayer.positionId)
          {
            let player = new PokerPlayer(i, card);
            this.players.push(player);
            this.canvasApp.stage.addChild(player.avatar);
          }

    }
    this.numOfPlayer = count;
    sessionStorage.setItem('numOfPlayer', this.numOfPlayer.toString()); 
  }

  public layoutPlayerPosition()
  {

    for(let i: number = 0 ; i < this.players.length; i++ )
      {
        this.players[i].setPosition(this.canvasApp.screen.width / 2 - 100 ,this.canvasApp.screen.height - 100 - i*100);
      }

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
