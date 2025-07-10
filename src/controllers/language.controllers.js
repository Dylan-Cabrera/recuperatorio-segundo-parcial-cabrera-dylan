import { ProgrammingLanguage } from "../models/language.model.js";

export const getAll = async (req,res) => {
    try {
        const getAll = await ProgrammingLanguage.findAll();
        return res.status(200).json(getAll);
    } catch (e) {
        res.status(500).json({message: `Error al obtener los lenguajes
            error: ${e}`})
    }
};

export const getById = async (req,res) => {
    const id = req.params.id;
    if(isNaN(id) || Math.round(id) != id) { return res.status(400).json({ message: "El id debe ser un numero entero"})};
    try {
        const getById = await ProgrammingLanguage.findByPk(id);
        if( getById ) {
            return res.status(200).json(getById);
        } else{ 
            return res.status(404).json({message: "Id no encontrado"})
        }
    } catch (e) {
        res.status(500).json({message: `Error al obtener el lenguaje
            error: ${e}`})
    }
};

export const createLanguage = async (req,res) => {
    try {
        
    } catch (e) {
        
    }
};

export const updateLanguage = async (req,res) => {
    try {
        
    } catch (e) {
        
    }
};

export const deleteLanguage = async (req,res) => {
    try {
        
    } catch (e) {
        
    }
};