

import Player from './Player';
import Game from './Game';
import Poker from '../games/Poker';

class Room
{

    private userList: any = [];
    private roomId: any = null;
    private roomName: string = '';
    private socket: any;
    private cards: string='';
    private game: Game = null;

    constructor(_roomId: any)
    {
        this.roomId = _roomId;
        this.roomName = 'room_'+ _roomId;
        this.game = new Poker();

    }
    
    public addWith(_username: string, _password: string)
    {
        let player = new Player(_username, _password);
        player.SetPositionId(this.userList.length + 1);
        this.add(player);
        player.setCards(this.game.GetPlayerCards(player.GetPositionId()));
        
        return player;

    }

    public add(user: Player)
    {
        this.userList.push(user);
    }
    
    public remove(user: Player)
    {
        for( let i = this.userList.length; i >=0; i--)
        {
            if (this.userList[i] === user)
            {
                this.removeAt(i);
            }
        }
    }

    public removeAt(index: number)
    {
        if(index < this.userList.length)
        {
            delete this.userList[index];
        }
    }

    public setSocket(_socket: any)
    {
        this.socket = _socket;
    }

    public getSocket()
    {
        return this.socket;
    }

    public setRoomName(_roomName: any)
    {
        this.roomName = _roomName;
    }

    public getRoomName()
    {
        return this.roomName;
    }

    public IsFull()
    {
        return this.userList.length >= this.game.MAX_NUM_OF_PLAYER;
    }

}

export default Room;