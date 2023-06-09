import { randomUUID } from "node:crypto"
import { Slug } from "./value-objects/slug"

interface QuestionProps {
    title: string
    content: string
    authorId: string
    slug: Slug
}

export class Question {
    public id: string
    public title: string
    public content: string
    public slug: Slug
    public authorId: string

    constructor(props: QuestionProps, id?: string){
        this.id = id ?? randomUUID()
        this.title = props.title
        this.content = props.content
        this.authorId = props.authorId
        this.slug = props.slug
    }
}