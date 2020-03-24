import Game, {GameType} from '../commons/Game';


enum OwnerType{
    Owner1 = '1',
    Owner2 = '2',
    Owner3 = '3',
    Owner4 = '4',
    None = '0',
}
enum PhomCardStatus{
    TrenBai = 'a',
    VuaDanh = 'b',
    VuaAn = 'c',
    TrenLoc = 'd',
    Group1 = '1',
    Group2 = '2',
    Group3 = '3',
    Group4 = '4',
    Group5 = '5',
    Group6 = '6',
}

enum PokerCardStatus{
    TrenLoc = 'a',
    TrenBan = 'b',
    TrenTay = 'c',
}

class Poker extends Game
{
    constructor()
    {
        super(GameType.Poker);
        // this.type = GameType.Poker;
        this.MAX_NUM_OF_PLAYER_CARD = 2;
        this.MAX_NUM_OF_PLAYER = 10;
        this.generateCards();
        console.log(this.cards);
        console.log('-------------------');
        console.log(this.masterCards);
    }


    public generateCards()
    {

        for( let i = 0; i < this.MAX_NUM_OF_PLAYER_CARD; i++)
            for( let j = 1; j < this.MAX_NUM_OF_PLAYER; j++)
            {
                this.deliveryCard(j);
            }
    }

    public GetPlayerCards(playerId: any)
    {
        let ret: string ='';
        let cards = this.cards.split(',');
        for( let i = 0; i < cards.length;i++)
        {
            if(parseInt(cards[i][1]) ===  playerId)
            {
                if(ret.length > 0)
                ret += ',';
                ret += cards[i];
            }
            
        }

        return ret;
    }

    // private getCardNumberFor(i: any)
    // {
    //     let c: Number = (i % 13);
    //     if (c == 10)
    //     {
    //         return 'a';
    //     } else if( c == 11){
    //         return 'b';
    //     }else if( c == 12){
    //         return 'c';
    //     }else if( c == 13){
    //         return 'd';
    //     }

    //     return c.toString();

    // }


}

export default Poker;