import { Request, Response } from "express";
import { pool } from "../config/database-pg";

type UserController = {
    getPatitoName: (req:Request, res:Response)=> any
}

const userController:UserController = {

    getPatitoName:async (req:Request, res:Response) =>{

        try{
    
            const response = await pool.query('SELECT * FROM patitos_info WHERE name ILIKE ($1);',[req.query.name])
            // logic here
    
            return res.status(200).send({msg:'All good', data:response.rows, search:req.query})
        } catch (error:any) {
            return res.status(500).send({msg:'Something happened', error})
        }
    }
}

 

export { userController }