import express from 'express'
import {  createAnimal, updateAnimal, deleteAnimal, getAnimals} from './animal.controller.js';

const api = express.Router();

api.post('/createAnimal', createAnimal)
api.put('/updateAnimal/:id', updateAnimal)
api.delete('/deleteAnimal/:id',deleteAnimal)
api.get('/getAnimals', getAnimals)

export default api