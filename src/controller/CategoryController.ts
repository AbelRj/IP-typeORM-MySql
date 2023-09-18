import { Request, Response } from "express";
import { Category } from "../entity/Category";
import { validate } from "class-validator";
import { AppDataSource } from "../data-source";

export class CategoryController{
    static new = async(req:Request,res:Response)=>{
        const {name}=req.body;
        const category= new Category();
        category.name=name;
        
        const CategoryRepository=AppDataSource.getRepository(Category);
        try{
            await CategoryRepository.save(category);
        }catch(e){
            return res.status(409).json({message:'category already exists'});
        }
        res.send('category created');
    }
}