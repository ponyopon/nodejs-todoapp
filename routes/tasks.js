const express = require("express")
const router = express.Router()
//const {getAllTasks, createTask, getSingleTask, apdateTask, deleteTask} = require("../controllers/tasks")
const getAllTasks = (req,res) =>{
    res.send("receicve")
}

const createTask = (req,res) =>{
    res.send("タスクを作成しました")
}

const getSingleTask = (req,res) =>{
    res.send("ある特定を取得しました")
}
const apdateTask = (req,res) =>{
    res.send("更新しました")
}
const deleteTask = (req,res) =>{
    res.send("削除しました")
}
router.get("/", deleteTask)

router.post("/", createTask)

router.get("/:id", getSingleTask)

router.patch("/:id", apdateTask)

router.delete("/:id",deleteTask)

module.exports = router