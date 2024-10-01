import { v4 } from "uuid"

class User {
    public id: string
    public history: string[]
    constructor(
        public userName: string,
        public password: string
    ){
        this.id = v4()
        this.history = []
    }
}