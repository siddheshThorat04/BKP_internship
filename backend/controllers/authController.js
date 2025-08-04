import mongoose from "mongoose";
import Intern from "../models/internModel.js";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import GenerateTokenAndSetCookies from "../utils/GenerateTokenAndSetCookies.js";
export const register= async (req,res)=>{
    try {
        const {name,email,mobile,college,branch,year,password}=req.body;
        let User=await Intern.findOne({email});
        if(!name||!email||!mobile||!college||!branch||!year||!password){
            return res.status(400).json({msg:"Please fill all the fields"});
        }
        if(User){
            return res.status(400).json({msg:"User already exists"});
        }else{
            const passwordHash=await bcryptjs.hash(password,10);
            const intern=new Intern({name,email,mobile,college,branch,year,password:passwordHash});

            intern.save();
            GenerateTokenAndSetCookies(intern,res);
            res.status(200).json({msg:"User registered successfully",user:intern});

        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong",error);
    }
}
export const login=async (req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await Intern.findOne({email});
        if(user){
            const isMatch=await bcryptjs.compare(password,user.password);
            if(isMatch){
                res.status(200).json({msg:"User logged in successfully",user:user});
            }else{
                res.status(400).json({msg:"Invalid credentials"});
            }
        }else{
            res.status(400).json({msg:"User not found"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Something went wrong",error});
    }
}
export const logout=async (req,res)=>{
    try {
        res.clearCookie('token');
        res.status(200).json({msg:"User logged out successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Something went wrong",error});
    }
}