import express from "express"
import { userDelete, userFetch, userFetchOne, userPost, userUpdate } from "../controller/user.controller.js";
const router = express.Router()

router.get('/',userFetch)
router.post('/',userPost)
router.get('/:id',userFetchOne)
router.patch('/:id',userUpdate)
router.delete('/:id',userDelete)

//module.exports=Router;(CommonJS)
export {router};//(ModuleJS ES6)