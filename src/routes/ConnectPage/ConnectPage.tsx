import { Page, Heading, LocalLink, TextLinkList, LinkButton } from "../../components/Utils";
import './ConnectPage.css';

const crisisLinks = [
    {
        text: 'Trans Lifeline',
        src: 'https://www.translifeline.org/',
    },
    {
        text: 'The Trevor Project',
        src: 'https://www.thetrevorproject.org/'
    },
    {
        text: 'The Fireweed Collective',
        src: 'https://fireweedcollective.org/'
    },
    {
        text: 'The National Queer and Trans Therapist of Color Network',
        src: 'https://www.nqttcn.com/'
    },
    {
        text: 'Strong Hearts Native Helpline',
        src: 'https://www.strongheartshelpline.org/'
    },
    {
        text: 'Asian American Suicide Prevention',
        src: 'http://www.aaspe.net/',
        postscript: 'Hotline available in Cantonese, Mandarin, Japanese, Korean, and Fujianese'
    },
    {
        text: 'Ayuda en Espanol',
        src: 'https://suicidepreventionlifeline.org/help-yourself/en-espanol/'
    }

]

//TODO style Alert component
const ConnectPage = () => {
    return (
        <Page className="Connect">
            <div className="Alert">
                <p>
                    If you are looking for support and are currently in an emotional crisis, I recommend checking out the following groups and hotlines.
                </p>
                <TextLinkList list={crisisLinks} />
            </div>
            <div>
                <Heading size={3}>Rates For Trainings</Heading>
                <p>I offer sliding scale training rates for organizations and collectives, which is based on your budget, staff size and length of training. Please feel free to follow up with me below!</p>
                <p>I prioritize and center my trainings for Survivors and Queer, Trans, Disabled, Black, Indigenous and People of Color communities.</p>
                <p>All of my Safety and Wellness planning materials are free, you can access them <LocalLink to={'/madqueer'}>here</LocalLink>.</p>
            </div>
            <div className="Action">
                <LinkButton href="https://elliott119849.typeform.com/to/pbHmqpkf">Get In Touch With Me</LinkButton>
            </div>
        </Page>
    )
}

export default ConnectPage;