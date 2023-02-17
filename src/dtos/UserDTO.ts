import { User } from "../models/User"
import { BadRequestError } from "../errors/BadRequestError"
export interface UserDTOInput{
    id : string,
    name: string,
    email: string,
    password: string,
}

export interface UserDTOOutput{
    message: string,
    user:{
        id : string,
        name: string,
        email: string,
        password: string,
        
    }
}

/* export class UserDTO{
    public createUserInputDTO(
        id : any,
        name: unknown,
        email: unknown,
        password: unknown
       
    ): UserDTOInput
    {
        if(typeof id !== "string"){
            throw new BadRequestError("seu id deve ser string")
        }

        if(typeof name !== "string"){
            throw new BadRequestError("name deve ser string")
        }
        
        if(typeof email !== "string"){
            throw new BadRequestError("seu email deve ser string")
        }

        if(typeof password !== "string"){
            throw new BadRequestError("sua senha deve ser string")
        }

        if(typeof id !== "string"){
            throw new BadRequestError("seu id deve ser string")
        }

        const dto: UserDTOInput = {
        id,
        name,
        email,
        password
        }
        return dto
        
    }

    public createUserOutputDTO(user: User) : UserDTOOutput{

        const dto: UserDTOOutput = {
            message: "Usuario criado com sucesso",
            user:{
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword()}
        }
        return dto
    }
    

} */

export interface SignupInputDTO {
    name: unknown,
    email: unknown,
    password: unknown
}

export interface SignupOutputDTO {
    token: string
}

export interface LoginInputDTO {
    email: unknown,
    password: unknown
}

export interface LoginOutputDTO {
    token: string
}