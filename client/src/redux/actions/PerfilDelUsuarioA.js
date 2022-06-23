import axios from "axios";


export function PerfilDelUsuario (id){
    return async function (dispatch) {
        try{
            var json = await axios.get ("http://localhost:3001/" + id);
            return dispatch ({
                type: "PERFIL_USUARIO",
                payload: json.data
            })
        }catch(error)  {
            console.log (error)
    } 
    }
}