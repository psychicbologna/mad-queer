import { IPage } from './PageTypes';

export const Page = ({ className, children }: IPage) => {
    return (
        <div className={`Page ${className}`}>
            {children}
        </div>
    )
}