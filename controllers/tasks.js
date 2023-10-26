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

module.export = {
    getAllTasks, createTask, getSingleTask, apdateTask, deleteTask
}