import { PostsBusiness } from "../business/Posts"
import { Request, Response } from "express"
import { BaseError } from "../errors/BaseError"

export class PostsController{
    constructor(
        private postsBusiness: PostsBusiness
    ){}
    public getPosts = async(req: Request, res:Response) =>{
        try {
            const output = await this.postsBusiness.getPosts()
            res.status(200).send(output)
        } catch (error) {
            console.log(error)

            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }
    public createPosts = async(req:Request, res:Response) =>{
        try {
            const input ={
                id: req.body.id,
                content: req.body.content,
                likes: req.body.likes,
                dislikes: req.body.dislikes,
                createdAt: req.body.createdAt,
                updatedAt: req.body.updatedAt
            }
            const output = await this.postsBusiness.createPosts(input)
            res.status(200).send(output)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }

    public editPosts = async(req:Request, res:Response) =>{
        try {
            const input ={
                id: req.body.id,
                content: req.body.content,
                likes: req.body.likes,
                dislikes: req.body.dislikes,
                createdAt: req.body.createdAt,
                updatedAt: req.body.updatedAt
            }
            const output = await this.postsBusiness.editPosts(input)
            res.status(200).send(output)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }
    public deletePosts = async (req: Request, res: Response) => {
        try {

            const input = {
                idToDelete: req.params.id
            }

            const output = await this.postsBusiness.deletePosts(input)

            res.status(200).send(output)
        } catch (error) {
            console.log(error)

            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }
}