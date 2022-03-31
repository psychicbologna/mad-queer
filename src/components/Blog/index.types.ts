export interface IBlog {
    id: string,
    title: string,
    description: string,
    postDate: string,
    updateDate?: string,
    authors: string[],
    content: IBlogContent[],
    tags: string[],
}

export interface IBlogHeader {
    title: string,
    postDate: string,
    updateDate?: string,
    authors: string[],
    tags: string[]
}

export interface IBlogContent {
    id: number,
    type: 'image' | 'text',
    content: string
}