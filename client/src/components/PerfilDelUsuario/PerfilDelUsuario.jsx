import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { PerfilDelUsuario } from "../../redux/actions/createProductA";
import { useEffect} from "react";


    
export default function PerfilDelUsuario(props){
    // console.log (props)
    const dispatch = useDispatch ()

    useEffect(() => {
        dispatch (PerfilDelUsuario(props.match.params.id));
        return dispatch
    })

    

const usuario = useSelector ((state)=> state.perfilDelUsuario)

return (
    <div >
        {
            
            <div>
                {usuario[0].isAdmin ? "Perfil del Administrador"  : "Perfil del Usuario" } 
                Foto:  <img src = {usuario[0].image} alt = "" /><h2 >Usuario: {usuario[0].username}.</h2>
                <h2 >Nombre: {usuario[0].name}. Apellido:  {usuario[0].lastName}. </h2>                
                <h3 >Email:  {usuario[0].email}. Contraseña:  {usuario[0].password}.</h3> 
                <h3 >DNI:   {usuario[0].dni}.  Telefono:  {usuario[0].celphone}.</h3> 
                <h3 >Direccion: </h3> 
                <h4 >Calle: {usuario[0].address}.    Numero:  {usuario[0].number}. 
                    CP: {usuario[0].zipCode}.    Provincia:  {usuario[0].province}.
                    Localidad: {usuario[0].location}.    Departamento:  {usuario[0].apartment}. </h4> 
                <h4 >  Descripcion: {usuario[0].description}.   </h4> 
    
                <Link to = "/" >
                 <button>Volver</button>
                </Link>   
            </div>    

        }
        
    </div>
)
}