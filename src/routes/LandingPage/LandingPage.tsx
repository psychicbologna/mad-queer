import textStore from '../../assets/textStore'
import { Page } from '../../components/layout'
import { IPage } from '../../components/layout/index.types'
import { FeatureBlockquote, Heading } from '../../components/Utils'
import './LandingPage.css'

const quote1 = {
  text: 'We urgently need to bring to our communities the limitless capacity to love, serve, and create for and with each other. We urgently need to bring the neighbor back into our hoods, not only in our inner cities but also in our suburbs, our gated communities, on Main Street and Wall Street, and on Ivy League campuses.',
  author: 'Grace Lee Boggs',
  link: {
    text: 'Boggs School',
    to: 'http://www.boggsschool.org'
  }
}

export const LandingPage = (): JSX.Element => {
  const pageMeta: IPage['meta'] = {
    title: null,
    description: 'Liberation for Every Body',
    author: 'Elliott Fukui'
  }

  const { landingPage } = textStore

  return (
    <Page className="Landing" meta={pageMeta}>
      <div className="Intro">
        <div className="Card dark:bg-slate-800">
          <Heading size={3}>
            Building Maps, Strategies and Processes for Liberation
          </Heading>
        </div>
        <p>
          Elliott Fukui is an organizer, facilitator and trainer with two
          decades of experience in social justice movements.
        </p>
        <p>
          'Mad Queer Organizing Strategies are the trainings and resources that
          I offer to support folks who may identify/be identified as people
          living with mental illness, folks who identify with experiencing
          emotional crisis, and anyone who is looking for tools to support
          grounding in disability justice, mutual aid, and abolitionist
          strategies. \n From supporting folks who experience emotional crisis
          one on one, to leading workshops for organizations committing and
          striving to building safety and wellness into their organizational
          cultures, I have had the privilege of working with brilliant people
          across the country who are shifting cultures and changing their
          conditions on the frontlines every day. \n My work, and my passions,
          have been primarily as a facilitator, trainer and organizer in Queer
          and Trans, People of Color, Disabled, Low Income, Youth and Prison
          Abolition centered organizations and collectives nationally. I love
          supporting folks in creating the spaces, and communities that they
          need to thrive as their whole authentic self.'
        </p>
      </div>
      <FeatureBlockquote {...quote1} />
    </Page>
  )
}
