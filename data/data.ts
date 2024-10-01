import User from "../src/models/userModel";
import Game from "../src/models/gameModel";
import { v4 } from "uuid";

export const users: User[] = [];

export const games: Game[] = [];

// Immidiatly Invoked Function Expression
(async ():Promise<void> => {
    const johnny: User = new User("Johnny", "1234");
    // await johnny.hashPassword("1234");
    
    const laundry: Game = new Game(v4(), v4(), [[],[],[]], "Ongoing");
    const dished: Game = new Game(v4(), v4(), [[],[],[]], "Ongoing");

    users.push(johnny)
    games.push(laundry, dished)
})();


