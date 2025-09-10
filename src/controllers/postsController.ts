import { Request, Response } from 'express'
import { PostType, ReqBodyType } from '../lib/types'
import posts from '../data/posts'
import { generateId, guardType } from '../lib/utility'

type ErrorType = {
    status: number,
    error: string,
    message: string
}


// Tipi per le diverse operazioni
type IndexRequest = Request
type ParamRequest = Request<{ id: string }>
type BodyRequest = Request<{}, unknown, ReqBodyType>
type ParamBodyRequest = Request<{ id: string }, unknown, ReqBodyType>

const index = (req: IndexRequest, res: Response<PostType[]>) => {
    res.json(posts);
};

const show = (req: ParamRequest, res: Response<PostType>) => {
    const id = Number(req.params.id);
    res.send(posts.find(p => p.id === id));
};

const store = (req: BodyRequest, res: Response<PostType[] | ErrorType>) => {
    const { title, content, image, tags }: ReqBodyType = req.body;
    const newObj: unknown = {
        id: generateId(),
        title,
        content,
        image,
        tags
    }
    if (!guardType().isPost(newObj)) {
        res.status(400).json({
            status: 400,
            error: "Bad Request",
            message: "il JSON inviato non è valido"
        });
    } else {
        posts.push(newObj);
        res.status(201).json(posts);
    }
};

const update = (req: ParamBodyRequest, res: Response<PostType[] | ErrorType>) => {
    const id = Number(req.params.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
        res
            .status(404)
            .json({
                status: 404,
                error: "Not Found",
                message: "Post non trovato"
            });
    } else {
        const { title, content, image, tags }: ReqBodyType = req.body;
        if (title && content && image && tags) {
            post.title = title;
            post.content = content;
            post.image = image;
            post.tags = tags;
        };
    };
    res.status(200).json(posts);
};

const modify = (req: ParamBodyRequest, res: Response<PostType[] | ErrorType>) => {
    const id = Number(req.params.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
        res
            .status(404)
            .json({
                status: 404,
                error: "Not Found",
                message: "Post non trovato"
            });
    } else {
        const { title, content, image, tags }: ReqBodyType = req.body;
        if (title) post.title = title;
        if (content) post.content = content;
        if (image) post.image = image;
        if (tags) post.tags = tags;
    };
    res.status(200).json(posts);
};

const destroy = (req: ParamRequest, res: Response<PostType[] | ErrorType>) => {
    const id = Number(req.params.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
        res
            .status(404)
            .json({
                status: 404,
                error: "Not Found",
                message: "Post non trovato"
            });
    } else {
        posts.splice(posts.indexOf(post), 1)
    };
    res.status(200).json(posts);
};

export {
    index,
    show,
    store,
    update,
    modify,
    destroy
}