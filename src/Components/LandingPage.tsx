import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <figure className='LandingPage bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 max-w-lg' >
            <div className='pt-6 md:p-8 text-left space-y-4 max-w-2xl after:w-10 after:block after:h-10 after:bg-blockquote after:bg-no-repeat after:absolute after:top after:right'>
                <blockquote className="mr-1 block" >
                    We urgently need to bring to our communities the limitless capacity to love, serve, and create for and with each other. We urgently need to bring the neighbor back into our hoods, not only in our inner cities but also in our suburbs, our gated communities, on Main Street and Wall Street, and on Ivy League campuses.
                </blockquote>
                <figcaption className="text-amber-200 ">
                    - Grace Lee Boggs, <Link to="http://www.boggsschool.org" className="text-rose-300 text-decoration-line: underline underline-offset-4">Boggs School</Link>
                </figcaption>
            </div>
        </figure>
    )
}

export default LandingPage;