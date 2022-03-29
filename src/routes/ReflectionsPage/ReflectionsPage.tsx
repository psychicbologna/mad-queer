import { Page } from '../../components/layout'
import { IPage } from '../../components/layout/index.types'
import { Heading } from '../../components/Utils'

//TODO Blog client/API needs to be cemented. Wordpress?

export const ReflectionsPage = (): JSX.Element => {
  const pageMeta: IPage['meta'] = {
    title: 'Reflections',
    description: 'Reflections from the Front Lines.',
    author: 'Elliott Fukui'
  }
  return (
    <Page className="Reflections" meta={pageMeta}>
      <Heading size={3}>Reflections</Heading>
      <Heading size={4}>Reflections from the Front Lines</Heading>
    </Page>
  )
}
