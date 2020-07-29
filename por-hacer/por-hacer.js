const fs = require("fs"); //fylesystem
const { yargs } = require("yargs"); //yargs

let listadoPorHacer = []


const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile("db/data.json", data, (err) => {
        if (err) throw err;
    });

}


const cargarDB = () => {


    try {
        listadoPorHacer = require("../db/data.json");
    } catch (error) {

        listadoPorHacer = [];

    }




}

module.exports.crear = (descripcion) => {

    cargarDB();


    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;

}

module.exports.getListado = () => {
    cargarDB();
    return listadoPorHacer;




}

module.exports.actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

module.exports.borrar = (descripcion) => {

    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }


}