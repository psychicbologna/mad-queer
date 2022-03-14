import { Heading, TextLink, TextLinkList } from "../components/utils";

/*
Ayuda en Espanol 
https://suicidepreventionlifeline.org/help-yourself/en-espanol/ 
*/

const crisisLinks = [
    {
        text: 'Trans Lifeline',
        to: 'https://www.translifeline.org/',
    },
    {
        text: 'The Trevor Project',
        to: 'https://www.thetrevorproject.org/'
    },
    {
        text: 'The Fireweed Collective',
        to: 'https://fireweedcollective.org/'
    },
    {
        text: 'The National Queer and Trans Therapist of Color Network',
        to: 'https://www.nqttcn.com/'
    },
    {
        text: 'Strong Hearts Native Helpline',
        to: 'https://www.strongheartshelpline.org/'
    },
    {
        text: 'Asian American Suicide Prevention',
        to: 'http://www.aaspe.net/',
        postscript: 'Hotline available in Cantonese, Mandarin, Japanese, Korean, and Fujianese'
    },
    {
        text: 'Ayuda en Espanol',
        to: 'https://suicidepreventionlifeline.org/help-yourself/en-espanol/'
    }

]

//TODO style Alert component
const ConnectPage = () => {
    return (
        <div className="Connect">
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
                <p>All of my Safety and Wellness planning materials are free, you can access them <TextLink to={'/madqueer'}>here</TextLink>.</p>
            </div>
        </div>
    )
}

export default ConnectPage;