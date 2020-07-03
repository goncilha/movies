import server from './interfaces/http/server'
import database from './infrastructure/database'
import router from './interfaces/http/router'

database()
server({ port: 3000, router })