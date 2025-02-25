import { BaseDatabase } from "./BaseDataBase"
import { UserDB } from "../types"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = 'users'

    public async findUsers(q:string | undefined){
        if(q){
            const result: UserDB[] = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .where('name', 'like', `%${q}%`)

            return result
        }else{
            const result: UserDB[] = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)

            return result
        }
    }
}