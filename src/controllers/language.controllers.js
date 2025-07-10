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
    const { name, paradigm, release_year} = req.body;
    const uniqueName = await ProgrammingLanguage.findOne({where: {name: name}}); //busca si el nombre ya existe
    
    if(uniqueName) { return res.status(400).json({ message: "Ya existe un lenguaje con ese nombre"})};
    if(name.trim() === "") { return res.status(400).json({ message: "El nombre no puede estar vacio"})};
    if(paradigm.trim() === "") { return res.status(400).json({ message: "El paradigma no puede estar vacio"})};
    if(release_year === null) { return res.status(400).json({ message: "El año de lanzamiento no puede estar vacio"})};

    try {
        const createLanguage = await ProgrammingLanguage.create({ name, paradigm, release_year});
        res.status(201).json(createLanguage);
    } catch (e) {
        res.status(500).json({message: `Error al crear el lenguaje
            error: ${e}`})
    }
};

export const updateLanguage = async (req,res) => {
    const { name, paradigm, release_year} = req.body;
    const id = req.params.id;
    const verifyId = await ProgrammingLanguage.findByPk(id); //busca si existe el regustro con ese id
    const uniqueName = await ProgrammingLanguage.findOne({where: {name: name}}); //busca si el nombre ya existe

    if(isNaN(id) || Math.round(id) != id) { return res.status(400).json({ message: "El id debe ser un numero entero"})};
    if(!verifyId){ return res.status(404).json({ message: "Id no encontrado"}) };
    if(uniqueName) { return res.status(400).json({ message: "Ya existe un lenguaje con ese nombre"})};
    if(name.trim() === "") { return res.status(400).json({ message: "El nombre no puede estar vacio"})};
    if(paradigm.trim() === "") { return res.status(400).json({ message: "El paradigma no puede estar vacio"})};
    if(release_year === null) { return res.status(400).json({ message: "El año de lanzamiento no puede estar vacio"})};

    try {
        const updateLanguage = await ProgrammingLanguage.update({ name, paradigm, release_year}, { where: {id:id}});
        if(updateLanguage) {
            const idUpdated = await ProgrammingLanguage.findByPk(id);
             return res.status(200).json(idUpdated); //muestra el registro actualizado desde su id
        };
        
    } catch (e) {
        res.status(500).json({message: `Error al actualizar el lenguaje
            error: ${e}`})
    }
};

export const deleteLanguage = async (req,res) => {
    try {
        
    } catch (e) {
        
    }
};