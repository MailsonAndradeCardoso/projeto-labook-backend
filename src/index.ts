import express, { Request , Response}  from "express"
import cors from "cors"
import BaseDatabase from "knex"
import { userRouter } from "./router/userRouter"


const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, ()=>{
    console.log(`servidor rodando na porta ${3003}`)
})


app.use("/users", userRouter)

app.use('/signup', userRouter)

app.use('/login', userRouter)

app.use('/posts', userRouter)

app.post('/posts', async (req: Request, res: Response) => {
  const { id, creator_id, content, likes , deslikes, createdAt, updatedAt } = req.body;
  const result = await BaseDatabase('posts').insert({
    id,
    creator_id,
    content,
    likes,
    deslikes,
    createdAt,
    updatedAt
  });
  res.status(201).send(result);
});




