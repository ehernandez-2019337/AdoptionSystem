'use strict';
 
import Animal from './animal.model.js';
import {checkUpdateAnimals } from '../utils/validator.js';
 
 //Crear animal
export const createAnimal = async (req, res) => {
    try {
        let data = req.body;
        let animal = new Animal(data);
        await animal.save();
        return res.send({ message: 'Animal created successfully' });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Eerror registering a animal'});
    }
}
 


//listar animales
export const getAnimals = async (req, res) => {
    try {
        let animals = await Animal.find();
        return res.send({ animals });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'error getting animals'});
    }
}



 

//actualizar animal
export const updateAnimal = async (req, res) => {
    try {
        let { id } = req.params;
        let data = req.body;
        let updatedAnimal = checkUpdateAnimals(data, id)
        if (!updatedAnimal) {
            return res.status(404).send({ message: 'Animal not found' });
        }
        let update = await Animal.findByIdAndUpdate(id, data, { new: true });
       
        return res.send({ message: 'Animal updated successfully', update });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error updating animal' });
    }
}
 

//eliminar animal
export const deleteAnimal = async (req, res) => {
    try {
        let { id } = req.params;
        let deletedAnimal = await Animal.findByIdAndDelete(id);
        if (!deletedAnimal) {
            return res.status(404).send({ message: 'Animal not found' });
        }
        return res.send({ message: `Animal ${deletedAnimal.name}` });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error deleting animal' });
    }
}