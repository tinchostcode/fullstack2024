import {ProductModel} from "../models/ProductModel.js"

//-----------------------------------------------------------------------
export const getProducts = async (req,res)=>{
    try {
            const products= await productModel.find()
           res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message:error.messsage})
    }
    
    //res.json({msg:"getProducts"})
}
//-----------------------------------------------------------------------

export const getProduct = async (req,res)=>{
    
    //res.json({msg:"getProduct"})

    try {
        const {id} = req.params
        const product = await ProductModel.findById(id)
        if(!product){
            return res.status(404).json(`Product with ID:${id} no found...`)

    } 
    res.status(200).json(product)

    } catch (error) {
        res.status(500).json({message:error.messsage})

        }
    }
    //-----------------------------------------------------------------------

export const createProduct = async (req,res)=>{
        
    // res.json({msg:"createProduct"})
   try {
        const product = await ProductModel.create(req.body)
        res.status(201).json(product)
   } catch (error) {
        res.status(500).json({message:"An error has ocurred"})
   }
}    
//-----------------------------------------------------------------------

export const updateProduct = async (req,res)=>{
   // res.json({msg:"updateProduct"})
   try {
     const {id}= req.params
     const product = await ProductModel.findOneAndUpdate(
        {_id:id},
        req.body,
        {new:true}
    )
    res.status(200).json(product)
   } catch (error) {
    res.status(500).json({message:error.message})
   }
}
//-----------------------------------------------------------------------
export const deleteProduct = async (req,res)=>{
    try {
          const {id} = req.params
          const product = await ProductModel.findByIdAndDelete(id)
          if(!product){
            return res.status(404).json(`Product with ID no found..`)
          }  
          res.status(200).json(`Product successfully removed`)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
    
    //res.json({msg:"deleteProduct"})
}