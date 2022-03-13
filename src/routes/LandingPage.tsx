import textStore from '../assets/textStore';
import { Blockquote, Heading } from "../components/utils";

const LandingPage = (): JSX.Element => {

    const { landingPage } = textStore;

    return (
        <div className="Landing">
            <div className="Intro">
                <div className="Card dark:bg-slate-800">
                    <Heading size={3}>Building Maps, Strategies and Processes for Liberation</Heading>
                </div>
                <p>{landingPage.intro1}</p>
            </div>
            <Blockquote {...landingPage.quote1} />
        </div>
    )
}

export default LandingPage;