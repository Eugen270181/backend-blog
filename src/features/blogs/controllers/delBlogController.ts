import {Request, Response} from 'express'
import {blogsRepository} from '../blogsRepository'

export const delBlogController = (req: Request<{id: string}>, res: Response) => {
    blogsRepository.deleteBlog(req.params.id)
    res.send(204)
}