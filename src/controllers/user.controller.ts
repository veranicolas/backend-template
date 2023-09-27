import { Request, Response } from "express";

type UserController = {
    create: (req:Request, res:Response)=> any
}

const userController:UserController = {
    
    create:async (req:Request, res:Response) =>{

        try{
    
            // logic here
    
            return res.status(200).send({msg:'All good'})
        } catch (error:any) {
            return res.status(500).send({msg:'Something happened'})
        }
    }
}

 

export { userController }