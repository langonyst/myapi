import { ObjectId } from "mongodb";

export const validId = (req, res, next) => {
    try {
        const id = req.params.id
        if(!ObjectId.isValid(id)){
            return res.status(400).send({
                message: 'Invalid Id'
            })
        }

        next()
    }catch(error){
        console.error('Error middleware: ', error)
        throw error
    }
}