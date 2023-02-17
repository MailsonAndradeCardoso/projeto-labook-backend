import { PostsDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class PostsDatabase extends BaseDatabase{
    public static TABLE_POSTS = "posts"

public async findPosts(){
    const postDB: PostsDB[] = await BaseDatabase
    .connection(PostsDatabase.TABLE_POSTS)
    return postDB
}
public async insert(newPostDB:PostsDB){
    await BaseDatabase
    .connection(PostsDatabase.TABLE_POSTS)
    .insert(newPostDB)
}
public async findPostById(id:string){
    const [postDB]:PostsDB[] | undefined[] = await BaseDatabase
    .connection(PostsDatabase.TABLE_POSTS)
    .where({id})
    return postDB
}
public async upDatePostById(postDB:PostsDB){
    await BaseDatabase
    .connection(PostsDatabase.TABLE_POSTS)
    .update(postDB)
    .where({id: postDB.id})
}
public async deletedPostById(id:string){
    await BaseDatabase
    .connection(PostsDatabase.TABLE_POSTS)
    .delete()
    .where({id})
}
}