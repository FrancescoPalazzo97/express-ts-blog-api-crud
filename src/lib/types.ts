export type PostType = {
    id: number,
    title: string,
    content: string,
    image: string,
    tags: string[]
}

export type ReqBodyType = {
    title?: string,
    content?: string,
    image?: string,
    tags?: string[]
}