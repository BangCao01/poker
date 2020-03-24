export enum GameType
{
    Poker = 1,
    Phom  = 2,
}
enum OwnerType{
    Owner1 = '1',
    Owner2 = '2',
    Owner3 = '3',
    Owner4 = '4',
    None = '0',
}
enum CardStatus{
    TrenLoc = 'a',
    VuaDanh = 'b',
    VuaAn = 'c',
    TrenTay = 'd',
    Group1 = '1',
    Group2 = '2',
    Group3 = '3',
    Group4 = '4',
    Group5 = '5',
    Group6 = '6',
}
function Replace(s: string, index:any, replacement:any) {
    return s.substr(0, index) + replacement+ s.substr(index + replacement.length, s.length);
}

// [0] -> status
// [1] -> owner type
// [2] -> card number
// [3] -> card type
abstract class Game
{
    public masterCards: string = 'a011,a021,a031,a041,a051,a061,a071,a081,a091,a0a1,a0b1,a0c1,a0d1,a012,a022,a032,a042,a052,a062,a072,a082,a092,a0a2,a0b2,a0c2,a0d2,a013,a023,a033,a043,a053,a063,a073,a083,a093,a0a3,a0b3,a0c3,a0d3,a014,a024,a034,a044,a054,a064,a074,a084,a094,a0a4,a0b4,a0c4,a0d4';
    public cards:string = '';
    public numOfPlayer: number;
    public type: GameType;
    public MAX_NUM_OF_CARD: number = 52;
    public MAX_NUM_OF_PLAYER: number = 4;
    public MAX_NUM_OF_PLAYER_CARD: number = 8;


    constructor(type : GameType)
    {
        this.type = type;
    }

    public checkWin()
    {

    }

    public generateCards()
    {

    }

    public deliveryCard(positionId: number)
    {
        let cards: string[] = this.masterCards.split(',');
        const rand: any = Math.floor(Math.random()* cards.length);
        let deliveryCard : string = cards[rand];
        console.log(deliveryCard);
        this.masterCards = this.masterCards.replace(',' + deliveryCard, '');
        deliveryCard = Replace(deliveryCard,1,positionId.toString());
        if(this.cards.length > 0)
        this.cards += ',';
        this.cards += deliveryCard;


    }
    abstract GetPlayerCards(playerId: any):string;


}

export default Game;