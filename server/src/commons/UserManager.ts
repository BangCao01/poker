
import Player from './Player';


class UserManager
{
    private userList: any = [];
    constructor()
    {
        
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


}