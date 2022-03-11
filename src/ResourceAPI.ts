import { image, Resource } from "./Components/APIResponsesTypes";
import { v4 as uuidv4, V4Options } from 'uuid';

interface makeResourceProps {
    title?: string,
    subtitle?: string,
    description?: string,
    authors?: string[],
    pageCount?: number,
    type?: "blog" | "pocket-pop-ed",
    image?: image
}

interface IResourceAPI {
    makeResource: ({ title, subtitle, description, authors, pageCount, type, image }: makeResourceProps) => Resource,
    fetchResource: (id: string) => void,
    updateResource: (id: string, updates: makeResourceProps) => void,
    deleteResource: (id: string) => void,
    fetchResourceList: (number?: number) => Resource[],
}

const ResourceAPI: IResourceAPI = {
    makeResource: ({ title, subtitle, description, authors, pageCount, type, image }: makeResourceProps) => {
        //TODO When running with a real API call, this should eventually have proper error boundaries for missing properties. As it stand, this is just to generate dummy objects for development.
        const id = uuidv4();
        const resource = {
            id: `${id}`,
            title: title || `Title-${id}`,
            subtitle: subtitle || `subtitle-${id}`,
            description: description || `Lorem Ipsum Description Roger Sally Mary Bob-${id}`,
            authors: authors || ["Elliott"],
            pageCount: pageCount || 5,
            type: type || "blog",
            image: image || { url: "missing url", alt: "missing image" }
        }

        return (resource)
    },
    fetchResource: (id: string) => { },
    updateResource: (id: string, updates: makeResourceProps) => { },
    deleteResource: (id: string) => { },
    fetchResourceList: (number?: number) => {
        const resourceList: Resource[] = [];
        if (!number || number <= 0) { number = 5 }
        for (let i = 0; i < number; i++) {
            resourceList.push(ResourceAPI.makeResource({}))
        }
        return resourceList;
    }
}

export default ResourceAPI;