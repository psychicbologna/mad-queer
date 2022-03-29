export interface IPage {
    className: string,
    children: React.ReactNode,
    meta: HTMLMeta
}

export interface HTMLMeta {
    title: string | null,
    description: string,
    keywords?: string[],
    author: string,
}