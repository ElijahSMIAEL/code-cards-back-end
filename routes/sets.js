import { Router } from 'express'
import * as setsCtrl from '../controllers/sets.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', setsCtrl.index)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/:id', checkAuth, setsCtrl.show)
router.post('/', checkAuth, setsCtrl.create)
router.post('/:id/cards', checkAuth, setsCtrl.createCard)
router.delete('/:id', checkAuth, setsCtrl.delete )
router.delete('/:id/delete-card/:cardId', checkAuth, setsCtrl.deleteCard)

export { router }
