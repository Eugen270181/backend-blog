import {Response, Request} from 'express'
import {PostInputModel, PostViewModel} from '../../../input-output-types/posts-types'
import {postsRepository} from '../postsRepository'

export const createPostController = (req: Request<any, any, PostInputModel>, res: Response<PostViewModel>) => {
    const newPostId = postsRepository.createPost(req.body)
    const newPost = postsRepository.findPostAndMap(newPostId)

    res
        .status(201)
        .json(newPost)
}