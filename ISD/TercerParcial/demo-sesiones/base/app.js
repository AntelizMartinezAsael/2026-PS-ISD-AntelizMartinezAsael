// La aplicación de la demo. server.js la arranca; las pruebas la arrancan con otras configuraciones.
// Lo que dice "(en clase)" lo programamos juntos, paso por paso. Mientras no esté, esa ruta responde 501.
const path = require('path');
const express = require('express');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const { crearModeloUsuarios } = require('./modelos/usuarios.modelo');

const NOMBRE_COOKIE = 'connect.sid';

//Tenemos que determinar donde se degen de almacenar las sesiones para la aplicacion si es Local Store (significa que se guarda en navegador) y si la queremos guardar en MSQL debemos de obtenerla y mantenerla durante su ciclo de vida

function todasLasSesiones(almacen){
  return new Promise(resolve, reject) => {
    const promesa = almacen.all((error, sesiones))
  }
}