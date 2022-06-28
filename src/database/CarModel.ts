import {Schema} from 'mongoose';
import mongoose from 'mongoose';  

const CarModel = new Schema ({

    marca: String,
    modelo: String,
    versao: String,
    ano: Number,
    quiloMetragem: Number,
    tipoCambio: String,
    precoVenda: Number
},
{timestamps:true})//toda vez que a tabela for criada ou alterada ela registra a hora

export default mongoose.model('Car', CarModel)