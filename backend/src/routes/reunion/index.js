const { Router } = require('express');
const router = Router();

const {
    obtener_reunion,
    obtener_reunion_id,
    guardar_reunion,
    actualizar_reunion,
    eliminar_reunion
} = require('../../controllers/reunion');

//reuniones
router.get('/reunion', obtener_reunion);
router.get('/reunion/:id', obtener_reunion_id);
router.post('/reunion', guardar_reunion);
router.put('/reunion', actualizar_reunion);
router.delete('/reunion/:id', eliminar_reunion);

module.exports = router;