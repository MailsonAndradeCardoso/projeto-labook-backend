import { PostsDatabase } from "../database/PostsDatabase"
import { Posts } from "../models/Posts"
import { PostsDB } from "../types"
import { BadRequestError } from "../errors/BadRequestError"
import { NotFoundError } from "../errors/NotFoundErrors"


export class PostsBusiness{
    constructor(
        private postsDatabase: PostsDatabase
    ){}
public getPosts = async()=>{
    const postsDB: PostsDB[] = await this.postsDatabase.findPosts()

    const posts = postsDB.map((postDB)=> new Posts(
        postDB.id,
        postDB.content,
        postDB.likes,
        postDB.dislikes,
        postDB.created_at,
        postDB.updated_at,
        postDB.creator_id
    ))
    return posts
}
public createPosts = async (input:any) =>{
    const {id, content, likes, dislikes, createdAt, updatedAt, creatorId} = input
    
    if (typeof id !== "string") {
        throw new BadRequestError("id deve ser string")
    }
    if(id.length < 2){
        throw new BadRequestError("id deve ter no minimo 2 caracteres")
    }
    if(typeof content !== "string"){
        throw new BadRequestError("content deve ser string")
    }
    if(content.length < 2){
        throw new BadRequestError("Content deve ter no minimo 2 caracteres")
    }
    const postsDBIdExists = await this.postsDatabase.findPostById(id)

    if (postsDBIdExists){
        throw new BadRequestError("Id já existe")
    }
    const newPost = new Posts(
        id, 
        content,
        likes,
        dislikes,
        createdAt,
        updatedAt,
        creatorId
    ) 
    const createPosts =  newPost.DbModel()

    await this.postsDatabase.insert(createPosts)

}
public editPosts = async (input:any) =>{
    const {newId, newContent } =input

    if(newId !== undefined){
        if(typeof newId !== "string"){
        throw new BadRequestError("Id deve ser string")
        } if(newContent.length < 2){
            throw new BadRequestError("Content deve possuir no minimo 2 caracteres")
        }
    }

    const postsDBIdExists = await this.postsDatabase.findPostById(newId)

    if(!postsDBIdExists){
        throw new NotFoundError("Id não encontrado")
    }
    const posts = new Posts(
        postsDBIdExists.id, 
        postsDBIdExists.content,
        postsDBIdExists.likes,
        postsDBIdExists.dislikes,
        postsDBIdExists.created_at,
        postsDBIdExists.updated_at,
        postsDBIdExists.creator_id
    
    ) 
    
    posts.setId(newId)
    posts.setContent(newContent)

    const postsDB = posts.DbModel()

    await this.postsDatabase.upDatePostById(postsDB)

}
public deletePosts = async(input:any) =>{
    const {idToDelete} = input

    const postsDeleteDB = await this.postsDatabase.findPostById(idToDelete)

    if(!postsDeleteDB){
        throw new NotFoundError("Id não encontrado")
    }
    await this.deletePosts(postsDeleteDB.id)

    const output ="Post deletado"
    return output
}
}