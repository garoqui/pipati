export const MOVEMENTS = [
    {
        name : "rockgame",
        lostWith : "papergame"
    },

    {
        name : "papergame",
        lostWith : "siccsorsgame"
    },

    {
        name : "siccsorsgame",
        lostWith : "rockgame"
    }  
]

export enum MOVESELECT  {
    ROCK = "rockgame",
    PAPER = "papergame",
    SICCSORS = "siccsorsgame"
}