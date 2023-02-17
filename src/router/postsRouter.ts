import express from "express"
import { PostsBusiness } from "../business/Posts"
import { PostsDatabase } from "../database/PostsDatabase"
import { PostsController } from "../controller/PostsController"

export const postsRouter = express.Router()

const postsController = new PostsController(
    new PostsBusiness(
        new PostsDatabase(),
    )
       )
postsRouter.get("/", postsController.getPosts)
postsRouter.post("/", postsController.createPosts)
postsRouter.put("/:id", postsController.editPosts)
postsRouter.delete("/:id", postsController.deletePosts)
