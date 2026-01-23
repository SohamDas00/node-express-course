import task from "../models/task.models.js"

//Get all user
export const userFetch=async(req,res)=>{
    try {
        const user=await task.find();
        res.status(200).json({user})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

//Create user
export const userPost=async (req,res)=>{
    try {
        const {name,completed}=req.body;
        const newUser= new task({
            name,
            completed
        })
        const saveUser=await newUser.save();
        res.status(201).json({
            message: 'user created successfully',
            User: saveUser
        })   
    } catch (error) {
        console.log("Error in creating user ",error.message); 
        res.status(400).json({message:error.message})   
    }
}

//Get specific user
export const userFetchOne=async(req,res)=>{
    try {
        const id=req.params.id;
        const specificUser=await task.findById(id)
        if(!specificUser) res.status(404).json(`No user found! with id ${id}`)
        res.status(200).send(specificUser)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

//Update user
export const userUpdate=(req,res)=>{

}

//Delete user
export const userDelete=async(req,res)=>{
    try {
        const id=req.params.id
        const user=await task.findByIdAndDelete(id)
        if(!user) res.status(404).send(`No user find with id ${id}`)
        res.status(200).json({
            message:"user successfully deleted",
            user:user
        })
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}