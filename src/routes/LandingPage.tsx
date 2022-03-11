import textStore from '../assets/textStore';
import { Blockquote } from "../components/utils";

const LandingPage = (): JSX.Element => {

    const { landingPage } = textStore;

    return (
        <div className="Landing">
            <div className="Intro">
                <div className="Card dark:bg-slate-800">
                    <h3 className="text-2xl">Building Maps, Strategies and Processes for Liberation</h3>
                </div>
                <p>{landingPage.intro1}</p>
            </div>
            <Blockquote {...landingPage.quote1} />
        </div>
    )
}

export default LandingPage;