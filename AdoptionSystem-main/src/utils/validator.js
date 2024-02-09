'use strict'
import {hash} from 'bcrypt'

// encriptar contrasenia

export const encrypt = async(password)=>{
    try{
      return  hash(password, 10)
    }catch(err){
        console.error(err)
        return err
    }
}

//Validar contrasenia
 export const checkPassword = async (password, hash)=>{
    try{
        return await compare(password, hash)
    }catch(err){
        console.error(err)
        return err
    }
 }

 export const checkUpdate = (data, userId)=>{
    if(userId){
        if(Object.entries(data).length ===0 ||
            data.password ||
            data.password == ''||
            data.role ||
            data.role == ''
        ) {
            return false 
        }
        return true
    }else{
        return false
    }
 }

 export const checkUpdateAnimals = (data, animalId)=>{
    if(animalId){
        if(Object.entries(data).length ===0 ||
            data.typeOfAnimal ||
            data.typeOfAnimal == ''||
            data.keeper ||
            data.keeper === ''
            
        ) {
            return false 
        }
        return true
    }else{
        return false
    }
 }