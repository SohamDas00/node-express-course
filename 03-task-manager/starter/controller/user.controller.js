export const userFetch=(req,res)=>{
    res.status(200).send("All users fetched")
}

export const userPost=(req,res)=>{
    res.status(201).json(req.body)
}

export const userFetchOne=(req,res)=>{
    res.status(200).json({name:req.params.id})
}

export const userUpdate=(req,res)=>{
    res.status(200).send(`Successfully Update user ${req.params.id}`)
}
export const userDelete=(req,res)=>{
    res.status(200).send(`Successfully Delete user ${req.params.id}`)
}