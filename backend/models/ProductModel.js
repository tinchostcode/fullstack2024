import mongoose, { Schema } from "mongoose";


//creamos un schema con los campos que vamos a utilizar. nombre,tipo,validaciones

const productSchema = new mongoose.Schema({

     descripcion:{
        type:string,
        required:[true,"complete el campo"]
     },
     stock:{
        type:Number,
        required:[true,"complete el campo"]
     },
     price:{
        type:number,
        required:[true,"complete el campo"]
     },
    },
     {
        timestamps:true,
        versionKey:false
     }


)

//creamos el modelo a partir del schema . "Product" va a llamar la collecion pero en plural en singular osea products. esto lo hace mongo... 
//va a llevar 2 argunmentos (coleccion y schema) y luego lo exportamos, 
//se crear el modelo el controlador y las rutas para acceder y vistas con el frontend...

const ProductModel = mongoose.model("Product",productSchema)