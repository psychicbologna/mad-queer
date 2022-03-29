import { Page } from '../../components/layout'
import { IPage } from '../../components/layout/index.types'
import './FeedbackPage.css'

export const FeedbackPage = () => {
  const pageMeta: IPage['meta'] = {
    title: 'Feedback',
    description:
      'Give your feedback on your experiences with the tools provided on this site.',
    author: 'Elliott Fukui'
  }
  return (
    <Page className="Feedback" meta={pageMeta}>
      this will lead to a feedback form
    </Page>
  )
}
