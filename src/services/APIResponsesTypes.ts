export type image = {
    url: string,
    alt: string
}

export const resourceTypes: readonly string[] = ["misc", "crisis", "advocacy", "educational", "safety", "disability", "minority", "immigration", "legal"] as const;

//GET:Resources/[id]
export interface Resource {
    id: string,
    title: string | "",
    subtitle: string | "",
    description: string | "",
    authors: string[] | [],
    type: typeof resourceTypes | ["misc"],
    image: image,
    link: string
}

export interface ResourceAPIResponses {
    numberOfResults: number;
    startIndex: number;
    endIndex: number;
    hasNext: boolean;
    payload: Resource[]
}


/*
export interface Resource {
    id: string,
    title: string | "",
    subtitle: string | "",
    description: string | "",
    authors: string[] | [],
    type: [...typeof resourceTypes],
    image: image,
}


export interface ResourceResponses {
    numberOfResults: number;
    startIndex: number;
    endIndex: number;
    hasNext: boolean;
    payload: Resource[]
}

export interface addOneProps {
    id: string;
    title: string,
    subtitle?: string,
    description?: string,
    authors?: string[],
    type?: typeof resourceTypes,
    image?: image
}

export interface updateResourceProps extends addOneProps {
    id: string
}

export interface IResourceService {
    addOne: ({ title, subtitle, description, authors, type, image }: addOneProps) => Promise<void>,
    get: (id: string) => Resource,
    updateOne: (id: string, updates: updateResourceProps) => void,
    deleteOne: (id: string) => void,
    getAll: (number?: number) => Resource[],
}
*/