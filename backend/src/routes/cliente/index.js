const { Router } = require('express');
const router = Router();

const {
    obtener_cliente,
    obtener_cliente_id,
    guardar_cliente,
    actualizar_cliente,
    eliminar_cliente
} = require('../../controllers/cliente');

//clientes
router.get('/cliente', obtener_cliente);
router.get('/cliente/:id', obtener_cliente_id);
router.post('/cliente', guardar_cliente);
router.put('/cliente', actualizar_cliente);
router.delete('/cliente/:id', eliminar_cliente);


module.exports = router;