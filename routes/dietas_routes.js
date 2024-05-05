import express from "express";
import { getDietas, createDietas, updateDietas } from "../controllers/dietas_controller.js";
import verificarToken from "../minddlewares/auth.js";

const ruta = express.Router();

ruta.get("/", verificarToken, async (req, res) => {
    try {
        
        const dietas = await getDietas();
        res.status(200).json(dietas);
    } catch (error) {
        console.error("Error al obtener las dietas:", error);
        res.status(400).json(error);
    }
})

ruta.post("/" , async (req, res) => {
    try {
        const body = req.body;
        const nuevaDieta = await createDietas(body);
        res.status(201).json(nuevaDieta); // Cambiado el código de estado a 201 para indicar que se creó un nuevo recurso
    } catch (error) {
        console.error("Error al crear la dieta:", error);
        res.status(400).json(error);
    }
})

ruta.put("/:titulo", async (req, res) => {
    try {
        const body = req.body;
        const titulo = req.params.titulo;
        const dietaActualizada = await updateDietas(body, titulo);
        res.status(200).json(dietaActualizada);
    } catch (error) {
        console.error("Error al actualizar la dieta:", error);
        res.status(400).json(error);
    }
});

export default ruta;
