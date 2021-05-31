const db = require('../../share/conexion');

const obtener_proyecto = async (req, res) => {
    try {
        const resultado = await db.query(`
            select * from proyecto
        `,[])

        console.log(resultado)
        res.json(resultado)

    } catch (error) {
        console.log(error)
    }
}

const obtener_proyecto_id = async (req, res) => {
    try {
        let id = req.params.id;

        const resultado = await db.query(`
            select * from proyecto
            where id = $1
        `,[id])

        console.log(resultado)
        res.json(resultado)

    } catch (error) {
        console.log(error)
    }
}

const guardar_proyecto = async (req,res) => {
    try {
        const { nombre, descripcion } = req.body;

        const resultado = await db.query(`
            insert into proyecto (nombre,descripcion)
            values ($1,$2) RETURNING *`,
            [nombre, descripcion]);

        console.log(resultado);
        res.json(resultado);

    } catch (error) {
        console.log(error)
    }
}

const actualizar_proyecto = async (req,res) => {
    try {
        const { id, nombre, descripcion } = req.body;

        if (id === undefined) res.json({ success: false, mensaje: "no existe el id", data: []})

        const resultado = await db.query(`
        update proyecto set nombre = $1,
                            descripcion = $2
        where id = $3
        RETURNING *`,[nombre, descripcion, id]);

        console.log(resultado);
        res.json(resultado);

    } catch (error) {
        console.log(error)
    }
}

const eliminar_proyecto = async (req,res) => {
    try {
        let id = req.params.id;

        if (id === undefined) res.json({ success: false, mensaje: "no existe el id", data: []})

        const resultado = await db.query(`
            delete from proyecto where id = $1
            RETURNING *`,[id]);

        console.log(resultado);
        res.json(resultado);

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    obtener_proyecto,
    obtener_proyecto_id,
    guardar_proyecto,
    actualizar_proyecto,
    eliminar_proyecto
}