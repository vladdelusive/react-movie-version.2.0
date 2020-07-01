export interface StandardComponentProps {
    location: InputPageProps
}

interface InputPageProps {
    hash: string,
    kry: string,
    pathname: string,
    search: string,
}