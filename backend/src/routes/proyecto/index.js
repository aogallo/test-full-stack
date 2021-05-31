const { Router } = require('express');
const router = Router();

const {
    obtener_proyecto,
    obtener_proyecto_id,
    guardar_proyecto,
    actualizar_proyecto,
    eliminar_proyecto
} = require('../../controllers/proyecto');

//proyectos
router.get('/proyecto', obtener_proyecto);
router.get('/proyecto/:id', obtener_proyecto_id);
router.post('/proyecto', guardar_proyecto);
router.put('/proyecto', actualizar_proyecto);
router.delete('/proyecto/:id', eliminar_proyecto);

module.exports = router;