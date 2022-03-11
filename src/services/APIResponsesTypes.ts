export type image = {
    url: string,
    alt: string
}

export const resourceType: string[] = ["blog", "pocket-pop-ed"]

import { V4Options } from "uuid";

//GET:Resources/[id]
export interface Resource {
    id: string,
    title: string | "",
    subtitle: string | "",
    description: string | "",
    authors: string[] | [],
    pageCount: number | 0,
    type: "blog" | "pocket-pop-ed",
    image: image,
}

export interface ResourceAPIResponses {
    numberOfResults: number;
    startIndex: number;
    endIndex: number;
    hasNext: boolean;
    payload: Resource[]
}