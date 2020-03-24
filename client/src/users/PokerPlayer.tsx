
import Player, {PlayerState} from './Player';
import { ChatMessage, ChatState, LoginMessage, CardMessage } from '../types';
import * as PIXI from 'pixi.js';
import {CardSheet, Avatars} from '../commons/Resource';
import Card from '../commons/Card';

class PokerPlayer extends Player
{
    public cards: any = [];
    constructor(_positionId: number, _card: string)
    {
        super(_positionId);
        this.avatar = PIXI.Sprite.from(Avatars[0]);
        this.avatar.anchor.set(0.5);
        this.avatar.scale.x = 0.3;
        this.avatar.scale.y = 0.3;
        this.Init(_card);

    }

    private Init(_card: string)
    {
        let cards = _card.split(',');
        cards.forEach(value => {
              
            let ca = new Card(value);
            this.cards.push(ca);
        });
        
    }

    public setPosition(x:number, y:number)
    {
        this.positionX = x;
        this.positionY = y;
        this.avatar.x = x;
        this.avatar.y = y;
        this.layoutCard();

    }

    public layoutCard()
    {
        for(let i = 0; i < this.cards.length; i++)
        {
            let card: Card = this.cards[i];
            card.setPosition(this.positionX + 100 + i*100, this.positionY -400); 
            if(this.avatar !== null && this.avatar !== undefined)
            this.avatar.addChild(card.getAvatar());  
        }
    }

    public fireCard()
    {

    }
    public onCardFired()
    {

    }

    public doCheck()
    {

    }

    public doCall()
    {

    }

    public doFold()
    {

    }

    public doRaise()
    {

    }

}

export default PokerPlayer;
