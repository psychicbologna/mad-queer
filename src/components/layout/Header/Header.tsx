import { Heading } from '../../Utils'
import { Nav } from './Nav/Nav'

export const Header = (): JSX.Element => {
    return (
        <div className="Header">
            <Heading size={2}>Mad Queer Organization Strategies</Heading>
            <Heading size={3}>Liberation for Every Body</Heading>
            <Nav />
        </div>
    )
}