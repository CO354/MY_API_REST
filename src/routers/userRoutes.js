import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();
router.post('/', userController.store);
router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;

/*
index ==> lista todos os usuarios  ====> get
store/create => cria um novo usuario ==> post
delete => apaga um usuario ==> DELETE
show => mostra um usuario ==> GET
update => actualiza um usuario ===> PATCH ou PUT

*/
