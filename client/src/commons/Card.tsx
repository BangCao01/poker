import * as PIXI from 'pixi.js';
import {CardSheet} from '../commons/Resource';
import GameObject from './GameObject';
class Card extends GameObject
{
    private avatar: any = null;
    private value: string = '';
    constructor(_value: string)
    {
       super();
       this.setValue(_value);
       this.Init();
    }

    private  Init()
    {
        let cardNumber: number = this.getCardNumberFrom(this.value[2]);
        let cardType: number = parseInt(this.value[3]);
        let cardIndex = ((cardType-1)*13) + cardNumber - 1;
        console.log('cardIndex :' + cardIndex);
        console.log('cardNumber :' + cardNumber);
        console.log('cardType :' + cardType);


        this.avatar = PIXI.Sprite.from(CardSheet[cardIndex]);
        this.avatar.anchor.set(1);
        this.avatar.scale.x = 0.8;
        this.avatar.scale.y = 0.8;
    }

    private getCardNumberFrom(_num: any)
    {
        if(_num === 'a')
        return 10;
        else if(_num === 'b')
        return 11;
        else if(_num === 'c')
        return 12;
        else if(_num === 'd')
        return 13;
        else
        return parseInt(_num);
    }

    public setPosition(x:number, y:number)
    {
        this.positionX = x;
        this.positionY = y;
        this.avatar.x = x;
        this.avatar.y = y;
    }
    public getAvatar()
    {
        return this.avatar;
    }

    

    public setAvatar(_avatar:any)
    {
        this.avatar = _avatar;
    }

    public getValue()
    {
        return this.value;
    }

    public setValue(_value:string)
    {
        this.value = _value;
    }


}

export default Card;
