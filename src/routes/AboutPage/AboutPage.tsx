import { Page } from "../../components/layout";
import { IPage } from "../../components/layout/index.types";
import { Heading, ExternalLink, FeatureBlockquote } from "../../components/Utils";
import './AboutPage.css';

const sammieImage = new URL('../../assets/about/sammie-ablaza-wills.bmp', import.meta.url);
const chrisImage = new URL('../../assets/about/christoph-hanssmann.bmp', import.meta.url)

const quote1 = {
    text: 'Our feelings are our most genuine paths to knowledge',
    author: 'Audre Lorde',
    link: {
        text: '“Conversations with Audre Lorde”, Univ. Press of Mississippi',
        to: 'https://www.upress.state.ms.us/Books/C/Conversations-with-Audre-Lorde',
    }
}


export const AboutPage = () => {
    const pageMeta: IPage["meta"] = {
        title: 'About',
        description: 'More about Elliott Fukui and the Mad Tools',
        author: 'Elliott Fukui'
    };
    return (
        <Page className="About" meta={pageMeta}>
            <Heading size={3}>My Origin Story</Heading>

            <p>My name is Elliott Fukui, I use He/Him pronouns and currently live in California, and I've been an organizer, trainer and facilitator for 20 years across different movements, working with organizations, collectives, friends, and family. You can check out some of my work on my <ExternalLink src='https://www.linkedin.com/in/elliott-fukui/'>Linkedin.</ExternalLink></p>
            <p>When I was in my early twenties, and about to reach a breaking point, I reached out to some of my comrades and chosen family and asked if they would be my wellness and safety team, so that I wouldn't have to go back onto the wards or back on medication. It's been over 10 years since we began this experiment together, and I have not been back to a facility or back on medication since.</p>
            <p>This website, the resources, and my facilitation and training are my imperfect, ever-evolving offerings for anyone who has experienced an emotional crisis or loved someone in an emotional crisis. They've been ways I connect my story with the stories of so many others, understand my own privilege and articulate my experiences of oppression. They are tools my team have tried and tweaked, guiding questions that have supported our growth, and reflections on some of the hard times we've struggled through together.</p>
            <p>They are offerings to honor my movement lineage, and all of the people, organizations, and collectives who have made my survival and resilience possible. </p>
            <p>I do not own this work. I am a part of many collective processes and spaces which inform and drive my passions, knowledge and skill sets. I believe that all people should have access to the comradeship, political education, and training I have received, and so I offer these resources to the community for free, and my trainings are offered at a sliding scale rate. I am also open to barter and trade with folks too.</p>
            <p>I humbly ask that if you find them helpful and useful, to please consider becoming a <ExternalLink src='https://www.patreon.com/elliottfukui'>patron</ExternalLink>, or making a donation to my <ExternalLink src='https://venmo.com/elliottseiji'>Venmo</ExternalLink> account so that I can continue to build this work.</p>
            <p>I love constructive feedback, and learning how other folks are building out their own mutual aid networks. Please don't hesitate to reach out if you want to connect more.</p>
            <p>Let's Connect!</p>
            <ul className="TestimonialList">
                <Heading size={3}>Some Reflections From the Front Lines</Heading>
                <li className="Testimonial">
                    <Heading size={4}>Sammie Ablaza Wills - APIENC</Heading>
                    <blockquote className='TestimonialBlockquote'>
                        “Elliott brings heart, wisdom, and joy to every movement space. They bring a deep soulfulness when training our people on the concrete tools needed to get free. Whenever we've worked with Elliott, our membership has come away with a deeper understanding of history, strategy, and tactics for community safety. Over the past few years, Elliott has trained dozens of trans and queer Asians and Pacific Islanders to protect each other and practice alternatives to policing. As a fellow organizer and comrade, I look up to Elliott for all the ways they've built knowledge through deep relationships with many different people across communities. Anyone who works with Elliott knows how sharp, fun, and grounded they are as a trainer and strategist. I hope everyone can learn from them :)”
                    </blockquote>
                    <img src={sammieImage.href} />
                </li>
                <li className="Testimonial">
                    <Heading size={4}>Christoph Hanssmann - San Fransisco State University</Heading>
                    <blockquote className='TestimonialBlockquote'>
                        <p>
                            Last  year, I invited Elliott to present to a class I taught on Social Movements. Sometimes slow to warm to a guest speaker, students were  immediately taken by the content and quality of Elliott's work. When  Elliott asked them the questions that form the entry point of the  workshop—where they find sites of joy, sustenance, work, harm, and  safety—they responded with an unprecedented degree of openness and  vulnerability. It was very moving to witness. In addition, it enabled  students to make connections between their lived experiences and broader  endeavors of social change in much deeper ways than they had up to that  point. I was delighted (and unsurprised) when numerous students  mentioned in their course evaluations that Elliott's visit and the Cathartic Cartographies workshop was the highlight of the semester.
                        </p>
                        <p>
                            Elliott's work has also made a profound impression on seasoned instructors and researchers. In 2018, I invited him to present Cathartic Cartographies  to a group of researchers and professors interested in feminist  collaborative methods. We found that the workshop offered nothing short  of transformative pedagogical and community-building tools. After his  departure, group members couldn't stop talking about all that we had  learned from him. Many of us have since adopted some of the approaches  he uses in his workshops. As a result, we have been able to foster  deeper conversations and stronger relationships in classrooms and among  research collaboratives.
                        </p>
                        <p>
                            In addition to being a highly effective workshop for anything from teaching to campaign-building, Cathartic Cartographies is  an excellent example of how mutual aid can be accounted for and  envisioned. In the strongest terms, I would recommend this workshop for  anyone interested in the work of deep-rooted change. In intensifying  environments of harm and threat, Cathartic Cartographies invites participants not only to consider what safety might look like—it also provides them with new ways of thinking about how to enact it.
                        </p>
                        <p>
                            Thank you, Elliott, for all the work you have done to bring this incredible workshop to fruition.
                        </p>
                    </blockquote>
                    <img src={chrisImage.href} />
                </li>
            </ul>
            <div>
                <FeatureBlockquote {...quote1} />
            </div>
        </Page>
    )
}