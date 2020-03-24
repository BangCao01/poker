
import Room from './Room';

class RoomManager
{
    private  static _instance: RoomManager;
    
    private roomList : any = [];
    static getInstance()
    {
        if(this._instance === null)
        this._instance = new RoomManager();
        return this._instance;
    }
    constructor()
    {
        
    }

    public getARoom()
    {
        let ret: Room = null;
        for( let i = this.roomList.length - 1; i >=0; i--)
        {
            let r: Room = this.roomList[i]
            if (r !== null && !r.IsFull() )
            {
                 ret = r;
            }
        }
       if(ret === null)
       {
           ret = this.generateRoom();
       }
        
       return ret;
    }

    public generateRoom()
    {
        let room = new Room(this.roomList.length);
        room.setRoomName;
        this.add(room);
        return room;
    }
    public add(_room: Room)
    {
        this.roomList.push(_room);
    }
    
    public remove(_room: Room)
    {
        for( let i = this.roomList.length - 1 ; i >=0; i--)
        {
            if (this.roomList[i] === _room)
            {
                this.removeAt(i);
            }
        }
    }

    public removeAt(index: number)
    {
        if(index < this.roomList.length)
        {
            delete this.roomList[index];
        }
    }

}

export default RoomManager;