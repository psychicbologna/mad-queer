export const typeLister = (array: readonly string[], className: string) => {
    const jsx = array.map(item => {
        return <li className={className} key={item}>{item}</li>
    })
    return jsx;
}