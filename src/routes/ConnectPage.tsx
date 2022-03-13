import { TextLinkList, TextLinkListProps } from "../components/utils";

/*
Ayuda en Espanol 
https://suicidepreventionlifeline.org/help-yourself/en-espanol/ 
*/

const crisisLinks = [
    {
        src: 'Trans Lifeline',
        text: 'https://www.translifeline.org/'
    },
    {
        src: 'The Trevor Project',
        text: 'https://www.thetrevorproject.org/'
    },
    {
        src: 'The Fireweed Collective',
        text: 'https://fireweedcollective.org/'
    },
    {
        src: 'The National Queer and Trans Therapist of Color Network',
        text: 'https://www.nqttcn.com/'
    },
    {
        src: 'Strong Hearts Native Helpline',
        text: 'https://www.strongheartshelpline.org/'
    },
    {
        src: 'Asian American Suicide Prevention - Hotline available in Cantonese, Mandarin, Japanese, Korean, and Fujianese',
        text: 'http://www.aaspe.net/'
    },
    {
        src: 'Ayuda en Espanol',
        text: 'https://suicidepreventionlifeline.org/help-yourself/en-espanol/'
    }

]

const ConnectPage = () => {
    return (
        <div className="Connect">
            <div className="Alert">
                <p>
                    If you are looking for support and are currently in an emotional crisis, I recommend checking out the following groups and hotlines.
                </p>
                <TextLinkList list={crisisLinks} />
            </div>
        </div>
    )
}

export default ConnectPage;