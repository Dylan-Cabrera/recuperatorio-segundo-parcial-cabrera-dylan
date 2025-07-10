import { ProgrammingLanguage } from "../models/language.model.js";

export const getAll = async (req,res) => {
    try {
        const getAll = await ProgrammingLanguage.findAll();
        return res.status(200).json(getAll);
    } catch (e) {
        return res.status(500).json({message: "Error al obtener los lenguajes"})
    }
};

export const getById = async (req,res) => {
    try {
        
    } catch (e) {
        
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