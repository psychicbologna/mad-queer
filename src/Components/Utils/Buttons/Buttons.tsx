import { ILinkButton } from "../index.types"

export const LinkButton = ({ href, className, children }: ILinkButton): JSX.Element => {
    const props = { className: `LinkButton ${className}` }
    return (
        <a href={href}>
            <div {...props}>
                {children}
            </div>
        </a>
    )
}