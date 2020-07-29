const descripcion = {
    demand: true,
    alias: "d",
    des: "Descripcion de la tarea por hacer"
}

const completado = {
    default: true,
    alias: "c",
    des: "Marca como completado o pendiente la tarea"
}





const argv = require("yargs")
    .command("crear", "Crear un elemento por hacer", {
        descripcion

    })
    .command("actualizar", "Actualiza el estado completado de una tarea", {
        descripcion,
        completado



    })
    .command("borrar", "Borra una tarea", {
        descripcion: {
            demand: true,
            alias: "d",
            des: "Descripcion de la tarea por hacer"

        },



    })
    .help()
    .argv;

module.exports = {
    argv
}