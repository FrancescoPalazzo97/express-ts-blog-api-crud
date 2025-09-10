import express from 'express';
const router = express.Router();

import { ReqBodyType } from '../lib/types';

import { generateId, guardType } from '../lib/utility';

import posts from '../data/posts';

router.get('/', (req, res) => {
    res.json(posts);
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    res.send(posts.find(p => p.id === id));
});

router.post('/', (req, res) => {
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
})

router.put('/:id', (req, res) => {
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
});

router.patch('/:id', (req, res) => {
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
});

router.delete('/:id', (req, res) => {
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
})

export default router;

/*
Esempio di body
{
    "title": "Lasagne",
    "content": "Lorem Ipsum",
    "Image": "/img/lasagne.jpeg",
    "tags": [
        "Primi Piatti",
        "Ricette al forno" 
    ]
}
*/