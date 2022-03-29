import { Page } from '../../components/layout'
import { IPage } from '../../components/layout/index.types'
import './MadToolsPage.css'

export const MadToolsPage = () => {
  const pageMeta: IPage['meta'] = {
    title: 'Mad Tools',
    description: 'A collection of free trainings, exercises and resources.',
    author: 'Elliott Fukui'
  }

  return (
    <Page className="Mad Tools" meta={pageMeta}>
      This will display Mad Tools
    </Page>
  )
}
