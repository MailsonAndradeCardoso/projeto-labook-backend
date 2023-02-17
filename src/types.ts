export interface UserDB {
    id: string,
    name: string,
    email: string,
    password: string,
    role: string,
    created_at: string
}

export interface PostsDB{
    id: string,
    name: string,
    creator_id: string,
    content: string,
    likes: string,
    dislikes:number,
    created_at: string,
    updated_at: string
}

export interface PostsModel {
    id: string,
    name: string,
    likes: string,
    dislikes: number,
    createdAt: string,
    updatedAt: string
}

export interface Likes_DeslikesDB{
    user_id: string,
    post_id: string,
    like: string
}