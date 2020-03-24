import React from 'react';
import * as PIXI from 'pixi.js';
import myImage from '../assets/cards.png';
import {CardSheet} from '../commons/Resource';

export enum PlayerState
{
    WIN = 3,
    FAILED = 2,
    PLAYING = 1,
    NONE = 0,
}

export enum PlayerType
{
    YOUR = 1,
    ANOTHER = 2,
    VISITOR = 0,
}

abstract class Player
{

    public positionId: number = 0;
    public username: string = '';
    public coin: number = 0;
    public gameCoin: number = 0;
    public betCoin: number = 0;
    public state: PlayerState = PlayerState.NONE;
    public avatar: any = null;
    
    public positionX: number = 0;
    public positionY: number = 0;

    constructor(_positionId: number)
    {
        this.positionId = _positionId;
    }

    public abstract setPosition(x:number, y:number):void;
    public abstract fireCard():void;
    public abstract onCardFired():void;

}

export default Player;