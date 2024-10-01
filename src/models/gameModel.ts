import { v4 } from "uuid"

class Game {
    public id: string
    public theWinner: string | null
    constructor(
        public playerXid: string,
        public playerYid: string,
        public board: string[][],
        public status: string,
    ){
        this.id = v4()
        this.theWinner = null
    }
}

export default Game
