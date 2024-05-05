import Dieta from "../models/dietas_model.js";

async function getDietas() {
    let dietas = await Dieta.find();
    return dietas;
}

async function createDietas(body) {
    let dieta = new Dieta({
        titulo: body.titulo,
        descripcion: body.descripcion,
        ingredientes: body.ingredientes,
    })
    return await dieta.save();
}

async function updateDietas( body, titulo) {
        console.log(body)
        console.log(titulo)

        let user = await Dieta.updateOne({"titulo": titulo}, {
        
        $set:{
            titulo: body.titulo,
            descripcion: body.descripcion,
            ingredientes: body.ingredientes, 
        }
    });
    return dieta;
}


export { getDietas, createDietas, updateDietas };
