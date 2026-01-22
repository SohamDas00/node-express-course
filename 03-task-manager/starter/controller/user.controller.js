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
            task: saveUser
        })   
    } catch (error) {
        console.log("Error in creating user ",error.message); 
        res.status(400).json({message:error.message})   
    }
}

//Get specific user
export const userFetchOne=(req,res)=>{
    const id=req.params.id;

    //findone
}

export const userUpdate=(req,res)=>{
    res.status(200).send(`Successfully Update user ${req.params.id}`)
}
export const userDelete=(req,res)=>{
    res.status(200).send(`Successfully Delete user ${req.params.id}`)
}