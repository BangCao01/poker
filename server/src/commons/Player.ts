

class Player
{

    private positionId: number = 0;
    private roomId: number = 0;
    private usernane: string ='';
    private password: string ='';
    private cards: string ='';
    constructor(_username : string, _password: string)
    {

        this.usernane = _username;
        this.usernane = _password;
    }

    public SetPositionId(_positionId: number)
    {
        this.positionId = _positionId;
    }

    public GetPositionId()
    {
        return this.positionId;
    }

    public setCards(cards: string)
    {
        this.cards = cards;
    }
    public getCards()
    {
        return this.cards;
    }
}

export default Player;