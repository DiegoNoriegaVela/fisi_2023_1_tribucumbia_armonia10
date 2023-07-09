import { createPool, Pool } from 'mysql2/promise'


export async function connect (): Promise<Pool> {
  const connection = createPool({
    host: 'host.docker.internal',
    user: 'root',
    password: '',
    database: 'gimnasio',
    port: 3306,
  })
  return connection
}
