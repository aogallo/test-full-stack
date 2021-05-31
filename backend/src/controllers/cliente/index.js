const db = require('../../share/conexion');

const obtener_cliente = async (req, res) => {
    try {
        const resultado = await db.query("SELECT * FROM cliente",[]);

        console.log(resultado)
        res.json({
            data: resultado,
            suscces: true,
            message: 'ok'
        })

    } catch (error) {
        res.json(error)
    }
}

const obtener_cliente_id = async (req,res) => {
    try {
        let id = req.params.id;

        const resultado = await db.query("SELECT * FROM cliente WHERE id = $1",[id]);

        console.log(resultado)
        res.json(resultado)
    } catch (error) {
        res.json(error)
    }
}

const guardar_cliente = async (req,res) => {
    try {
        const { nombre, nit, correo } = req.body;

        const resultado = await db.query("insert into cliente (nombre,nit, correo) values ($1,$2,$3) RETURNING *",[nombre, nit, correo]);

        console.log(resultado);
        res.json(resultado);

    } catch (error) {
        console.log(error)
    }
}

const actualizar_cliente = async (req,res) => {
    try {
        const { id, nombre, nit, correo } = req.body;

        if (id === undefined) res.json({ success: false, mensaje: "no existe el id", data: []})

        const resultado = await db.query("insert into cliente (nombre,nit, correo) values ($1,$2,$3)RETURNING *",[nombre, nit, correo]);

        console.log(resultado);
        res.json(resultado);

    } catch (error) {
        console.log(error)
    }
}


const eliminar_cliente = async (req,res) => {
    try {
        let id = req.params.id;

        if (id === undefined) res.json({ success: false, mensaje: "no existe el id", data: []})

        const resultado = await db.query("delete from cliente where id = $1 RETURNING *",[id]);

        console.log(resultado);
        res.json(resultado);

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    obtener_cliente,
    obtener_cliente_id,
    guardar_cliente,
    actualizar_cliente,
    eliminar_cliente
}