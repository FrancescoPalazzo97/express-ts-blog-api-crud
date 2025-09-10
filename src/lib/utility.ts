import { PostType } from "./types";
import posts from "../data/posts"

export const generateId = (): number => posts[posts.length - 1].id + 1;

export const guardType = () => {

    const isPost = (data: unknown): data is PostType => {
        return (
            data !== undefined && data !== null && typeof data === 'object'
            && 'id' in data && typeof data.id === 'number'
            && 'title' in data && typeof data.title === 'string'
            && 'content' in data && typeof data.content === 'string'
            && 'image' in data && typeof data.image === 'string'
            && 'tags' in data && Array.isArray(data.tags)
            && data.tags.every(t => typeof t === 'string')
        )
    }

    return {
        isPost
    }
}