import { Request , Response } from "express";
import Car from "../database/CarModel";


const CarController = {

    async index (req: Request , res: Response): Promise<Response>{

        let cars = await Car.find()
        return res.json(cars)
    },

     async findById (req: Request , res: Response): Promise<Response>{
        const { id } = req.params;

        let cars = await Car.findById(id)
        return res.json(cars)
     },
      async create (req:Request , res: Response): Promise<Response>{
       await Car.create(req.body)
       .then(data =>{
            return res.json(data)
       })
        .catch(error =>{
            return res.status(400).json(error.original)
        })
        return res.status(500)
     },

      async update (req:Request , res: Response): Promise<Response>{
        const { id } = req.params;
        const {marca,modelo,versao,ano,quiloMetragem,tipoCambio,precoVenda} = req.body
   
        await Car.findByIdAndUpdate(id,{
        marca:marca,
        modelo:modelo,
        versao:versao,
        ano:ano,
        quiloMetragem:quiloMetragem,
        tipoCambio:tipoCambio,
        precoVenda:precoVenda
        })
        .then(data =>{
            return res.json(data)
        })
        .catch(error =>{
            return res.status(400).json(error.original)
        })
      
        return res.status(500)

        },
        async delete (req:Request, res: Response): Promise<Response>{
            const { id } = req.params;

            await Car.findByIdAndDelete(id)

            .then(data =>{
              return res.json({message: `${id}excluido com sucesso!`})  
            })
            .catch (error =>{
                return res.status(400).json(error.original)
            })
            return res.status(500)
        } 
}

export default CarController