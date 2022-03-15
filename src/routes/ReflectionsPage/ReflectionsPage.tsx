import { Page } from "../../components/layout"
import { IPage } from "../../components/layout/index.types";

//TODO Blog client/API needs to be cemented. Wordpress?

export const ReflectionsPage = (): JSX.Element => {
    const pageMeta: IPage["meta"] = {
        title: 'Reflections',
        description: 'Meditations on past experiences and new methods.',
        author: 'Elliott Fukui'
    };
    return (
        <Page className="Reflections" meta={pageMeta}>
            <p>This will lead to the blog client, which will likely be hosted separately from this app</p>
        </Page>
    )
}