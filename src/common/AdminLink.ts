export default interface AdminLink {
    name: string,
    path: string,
    icon: string
}

export const links: AdminLink[] = [
    {
        name: 'Clientes',
        path: '/clients',
        icon: ''
    },
    {
        name: 'Entrenadores',
        path: '/trainers',
        icon: ''
    },
    {
        name: 'Ingresos',
        path: '/incomes',
        icon: ''
    },
    {
        name: 'Planes',
        path: '/plans',
        icon: ''
    }
]
