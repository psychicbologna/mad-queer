import { image, resourceTypes, Resource } from "../services/APIResponsesTypes";

interface makeResourceProps {
    title?: string,
    subtitle?: string,
    description?: string,
    authors?: string[],
    pageCount?: number,
    type?: typeof resourceTypes,
    image?: image
}

interface IResourceAPIServices {
    // makeResource: ({ title, subtitle, description, authors, pageCount, type, image }: makeResourceProps) => Resource,
    // fetchResource: (id: string) => void,
    // updateResource: (id: string, updates: makeResourceProps) => void,
    // deleteResource: (id: string) => void,
    fetchAll: () => Promise<Resource[] | void>,
}

const ResourceAPIServices: IResourceAPIServices = {
    // add: ({ title, subtitle, description, authors, pageCount, type, image }: makeResourceProps) => {
    //     //TODO When running with a real API call, this should eventually have proper error boundaries for missing properties. As it stand, this is just to generate dummy objects for development.
    //     const id = uuidv4();
    //     const resource = {
    //         id: `${id}`,
    //         title: title || `Title-${id}`,
    //         subtitle: subtitle || `subtitle-${id}`,
    //         description: description || `Lorem Ipsum Description Roger Sally Mary Bob-${id}`,
    //         authors: authors || ["Elliott"],
    //         pageCount: pageCount || 5,
    //         type: type || resourceTypes[0],
    //         image: image || { url: "missing url", alt: "missing image" }
    //     }

    //     return (resource as Resource)
    // },
    // fetchOne: (id: string) => { },
    // updateOne: (id: string, updates: makeResourceProps) => { },
    // deleteOne: (id: string) => { },
    fetchAll: async (): (Promise<Resource[] | void>) => {
        const res: Response = await fetch(`${process.env.API_ENDPOINT}poo/resources`);
        return (!res.ok)
            ? res.json().then(error => Promise.reject(error))
            : res.json();
    }
}

export default ResourceAPIServices;