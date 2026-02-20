
export function List({children}: {children:ReactNode}) {
    return (
        <ul className="list-inside list-disc pl-6">
            {children}
        </ul>
    )
}

export function ListItem({children}: {children:ReactNode}) {
    return (
        <li>{children}</li>
    )
}