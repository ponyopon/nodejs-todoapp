const express = require("express")
const router = express.Router()
//const {getAllTasks, createTask, getSingleTask, apdateTask, deleteTask} = require("../controllers/tasks")
const Task = require("../models/Task")


const createTask = async (req,res) =>{
    try {
        const createTask = await Task.create(req.body)
        res.status(200).json(createTask)
    } catch {
        res.status(500).json(err)
    }
    
}

const getAllTasks = async(req, res) => {
    try {
        const allTask = await Task.find({})
        res.status(200).json(allTask)
    } catch {
        res.status(500).json(err)
    }
}

const updateTask = async(req, res) => {
    try {
        const updateTask = await Task.findOneAndUpdate(
            { _id:req.params.id},
            req.body,
            {new:true}
            )
        if(!updateTask){
            return res.status(404).json(`_id:${req.params.id} dont' exsit`)
        }
        res.status(200).json(updateTask)
    } catch {
        res.status(500).json(err)
    }
}

const getSingleTask = async(req,res) =>{
    try {
        const getSingleTask = await Task.findOne({_id:req.params.id})
        
        if(!getSingleTask){
            return res.status(404).json(`_id:${req.params.id} dont' exsit`)
        }
        res.status(200).json(getSingleTask)
    } catch {
        res.status(500).json(err)
    }
}

const apdateTask = (req,res) =>{
    res.send("更新しました")
}
const deleteTask = async(req,res) =>{
    try {
        const deleteTask = await Task.findOneAndDelete(
            { _id:req.params.id}
            )
        if(!deleteTask){
            return res.status(404).json(`_id:${req.params.id} dont' exsit`)
        }
        res.status(200).json(deleteTask)
    } catch {
        res.status(500).json(err)
    }
}
router.get("/", getAllTasks)

router.post("/", createTask)

router.get("/:id", getSingleTask)

router.patch("/:id", updateTask)

router.delete("/:id",deleteTask)

module.exports = router