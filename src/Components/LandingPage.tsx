import { Link } from "react-router-dom";
import TextStore from "./TextStore";
import { Blockquote } from "./utils";


const LandingPage = (): JSX.Element => {
    const { landingPage } = TextStore;

    return (
        <div className="Landing">
            <div className="Intro">
                <figure className="Card dark:bg-slate-800">
                    <h3 className="">Building Maps, Strategies and Processes for Liberation</h3>
                </figure>
                <p>{landingPage.intro1}</p>
            </div>
            <Blockquote {...landingPage.quote1} />
        </div>
    )
}

export default LandingPage;