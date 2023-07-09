export default interface PublicLink {
    name: string,
    path: string,
}

export const links: PublicLink[] = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Planes',
        path: '/pricing',
    },
    {
        name: 'Unirte',
        path: '/contact-us',
    }
]
