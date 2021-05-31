const db = require('../../share/conexion');

const obtener_reunion = async (req, res) => {
    try {
        const resultado = await db.query(`
            select * from reunion
        `,[])

        console.log(resultado)
        res.json(resultado)

    } catch (error) {
        console.log(error)
    }
}

const obtener_reunion_id = async (req, res) => {
    try {
        let id = req.params.id;

        const resultado = await db.query(`
            select * from reunion
            where id = $1
        `,[id])

        console.log(resultado)
        res.json(resultado)

    } catch (error) {
        console.log(error)
    }
}

const guardar_reunion = async (req,res) => {
    try {
        const { nombre, descripcion, id_proyecto } = req.body;

        const resultado = await db.query(`
            insert into reunion (nombre,descripcion,id_proyecto)
            values ($1,$2,$3) RETURNING *`,
            [nombre, descripcion, id_proyecto]);

        console.log(resultado);
        res.json(resultado);

    } catch (error) {
        console.log(error)
    }
}

const actualizar_reunion = async (req,res) => {
    try {
        const { id, nombre, descripcion, id_proyecto } = req.body;

        if (id === undefined) res.json({ success: false, mensaje: "no existe el id", data: []})

        const resultado = await db.query(`
        update reunion set nombre = $1,
                            descripcion = $2,
                            id_proyecto = $3
        where id = $4
        RETURNING *`,[nombre, descripcion, id_proyecto, id]);

        console.log(resultado);
        res.json(resultado);

    } catch (error) {
        console.log(error)
    }
}

const eliminar_reunion = async (req,res) => {
    try {
        let id = req.params.id;

        if (id === undefined) res.json({ success: false, mensaje: "no existe el id", data: []})

        const resultado = await db.query(`
            delete from reunion where id = $1
            RETURNING *`,[id]);

        console.log(resultado);
        res.json(resultado);

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    obtener_reunion,
    obtener_reunion_id,
    guardar_reunion,
    actualizar_reunion,
    eliminar_reunion
}