


enum CardType
{
    Ro,
    Co,
    Tep,
    Bich,
}

enum CardStatus
{
    Vuadanh,
    Vuaan,
    Group1,
    Group2,
    Group3,
    Group4,
    Group5,
    Group6,

}

interface Card {
    id: number; 
    name: string;
    type: CardType;
    status: CardStatus;
    owner: number;
    
}