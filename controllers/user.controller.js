import { userModel } from "../models/user.model.js"
import bcryptjs from 'bcryptjs'


export const loadUsers = async (req, res) => {
    try {
        const usuarios = await userModel.find()
        res.json({
            msg: "ok",
            usuarios
        })
    } catch (error) {
        console.log(error)
    }
}


export const createUser = async (req, res) => {

    const { name , password } = req.body

    try {

        const passHash = await bcryptjs.hash(password, 8)
        
        const newUser = await userModel.create({ name, password: passHash })

        res.json({
            msg:"Usuario creado con exito"
        })

    } catch (error) {
        console.log(error)
    }

}


export const deleteUser = async (req, res) => {

    const { id } = req.params

    try {
        
        const userDeleted = await userModel.remove({_id: id})

        res.json({
            msg: "Usuario eliminado con exito"
        })

    } catch (error) {
        console.log(error)
    }

}

export const updateUser = async (req, res) => {

    const { id } = req.params
    const { name, password } = req.body

    try {
        
        const user = await userModel.findById({ _id: id })

        const passHash = await bcryptjs.hash(password, 8)

        user.set({
            name, password: passHash
        })

        await user.save()

        res.json({
            msg: "usuario actualizado"
        })
  
    } catch (error) {
        console.log(error)
    }
}

export const userForId = async (req, res) => {

    const { id } = req.params


    try {
        
        const user = await userModel.findById({ _id: id })

        res.json({
            msg: "encontrado",
            user
        })

    } catch (error) {
        console.log(error)
    }
}