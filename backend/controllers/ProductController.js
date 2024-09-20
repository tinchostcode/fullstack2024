import {ProductModel} from "../models/ProductModel.js"

export const getProducts = (req,res)=>{
    res.json({msg:"getProducts"})
}


export const getProduct = (req,res)=>{
    res.json({msg:"getProduct"})
}

export const createProducts = (req,res)=>{
    res.json({msg:"createProducts"})
}

export const updateProducts = (req,res)=>{
    res.json({msg:"updateProducts"})
}

export const deleteProduct = (req,res)=>{
    res.json({msg:"deleteProducts"})
}