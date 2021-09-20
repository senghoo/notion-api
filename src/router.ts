import { Router } from 'itty-router'
import * as pageHandlers from './handlers/page'
import * as dbHandlers from './handlers/db'
const router = Router()

router.get('/pages/:id', pageHandlers.getPage)
router.get('/db/:id', dbHandlers.getDB)
router.post('/query/:id', dbHandlers.query)

router.all('*', () => new Response('Not Found.', { status: 404 }))

export default router
