import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import style from './assets/UpdateProduct.module.css';
import { UpdateProductA } from '../../redux/actions/DashboardUpdateProductA'; //   UpdateProductR.UpdateProduct
import {useLocation, useNavigate} from "react-router-dom";
import { getOneProduct } from '../../redux/actions/detailProductA';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Link } from "react-router-dom";
import { useSnackbar } from 'notistack';

export default function UpdateProduct() {
 
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate ()
    const location = useLocation()
    let id = (location.pathname.substring(4,location.pathname.length)) 
    const dispatch = useDispatch()
    const [errors, setErrors] = useState({})

    let update = useSelector ((state) => state.detailProduct.product); 
    if (!update.name){
    dispatch(getOneProduct(id))
    }
    update = useSelector ((state) => state.detailProduct.product); 


    const [input, setInput] = useState({
        name: "", image: "", price: "", description: "", stock: "", categories: "", discount: "", brand: "", freeShipping: "",
    })

    function validate(input) {
        let errors = {};

        if (!input.name) {
            errors.name = 'Coloca un nombre al producto.';
        }
        if (!input.image) {
            errors.image = 'Coloca una imagen al producto.';
        }

        if (!input.price || !/^[1-9]\d*(\.\d+)?$/.test(input.price)) { 
            errors.price = 'Coloca un precio al producto mayor a 0.';
        }
        if (!input.description) {
            errors.description = 'Coloca una descripción al producto.';
        }
        // if(!input.categories){ 
        //     errors.categories = 'Coloca una categoria al producto.';
        // }
        if (!input.stock || !/^[0-9]\d*(\.\d+)?$/.test(input.stock)) { 
            errors.stock = 'Coloca un numero, cero o más.';
        }
        if (!input.brand) {
            errors.brand = 'Coloca una marca al producto.';
        }

        if (!input.discount || !/^[0-9]\d*(\.\d+)?$/.test(input.discount)) { 
            errors.discount = 'Coloca un numero, cero o más.';
        }
        if (input.discount > 100 ) { 
            errors.discount = 'No se puede hacer un descuento mayor al 100%';
        }
        

        return errors

    }
    
    useEffect(()=>(setInput({
        name: update.name,
        image: update.image,
        price: update.price,
        description: update.description,
        stock: update.stock,
        categories: update.categories,
        discount: update.discount,
        brand: update.brand,
        freeShipping: update.freeShipping,
      })),[update]
      )
  
    
    // useEffect(() => {
    //     dispatch (UpdateProductA(props.match.params.id));
    // }, [dispatch])

    function handleSubmit(e) {
        e.preventDefault()

                
        if  (  input.name === update.name
            && input.image === update.image
            && input.price === update.price
            && input.description === update.description
            && input.stock === update.stock
            && input.categories === update.categories
            && input.discount === update.discount
            && input.brand === update.brand
            && input.freeShipping === update.freeShipping
         ){
             enqueueSnackbar("Debe modificar algún campo", { variant: 'error' }); 

         }
        else if (input.name.length === 0
            || errors.hasOwnProperty("name") //devuelve un buleano si el objeto tiene la propiedad especificada 
            || errors.hasOwnProperty("image")
            || errors.hasOwnProperty("price")
            || errors.hasOwnProperty("description")
            || errors.hasOwnProperty("brand")
            || errors.hasOwnProperty("discount")
            || !input.categories
            || errors.hasOwnProperty("stock")
        ) {
             enqueueSnackbar("Debe compeltar correctamente todos los campos con asteriscos (*)", { variant: 'error' });
        }
        else {
            dispatch(UpdateProductA(id, input))
             enqueueSnackbar("Producto modificado con exito", { variant: 'success' });
             setTimeout(() => {
                navigate('/dashboard')
            }, 2000);
           
        }
                
    }


    function handleChange(e) {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    }
    

    function handleCheck(e) {

            setInput({
                ...input,
                categories: e.target.value
            })
    }

    function handlefreeShipping(e) {
      
            setInput({
                ...input,
                freeShipping: e.target.value
            })
        
    }

  

    return (

        <div>
        <Link to= "/dashboard" className= {style.volver1}>
            <Button sx={{ m: 1, width: '20ch', color: '#022335', bgcolor:'#fff', borderColor:'#dee2e6',  borderRadius: "5px"}}   variant="outlined" startIcon={<KeyboardReturnIcon fontSize = "large"/>}>
                volver
            </Button>
        </Link> 
            <form  onSubmit={(e) => handleSubmit(e)} >

            <Box  sx={{
            '& .MuiTextField-root': { m: 1, width: '60ch', color: "white" },width: '62ch', my: "2%", mx: "30%", maxWidth: "100%", bgcolor:'#fff', borderRadius: "10px" }}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '60ch', color: "white" }, maxWidth: "100%", bgcolor:'#fff', borderRadius: "10px" }}
          noValidate
          autoComplete="off"
        >
   
            <div>
                <div>
                <TextField sx={{ bgcolor:'#fff ', color: '#dee2e6',  borderRadius: "10px" }}
                id="outlined-helperText"
                label="Nombre del producto: "
                maxlength = "30"
                htmlFor="name"
                value={input.name}
                name="name"
                onChange={(e) => handleChange(e)}
                helperText="Campo obligatorio (*)"
                InputLabelProps={{
                  shrink: true,
              }}
                />
                 {errors.name && (<p className={style.error}>{errors.name}</p>)}
                </div>

                  

                <div>
                <TextField sx={{ bgcolor:'#fff ', color: '#FFC400',  borderRadius: "10px" }}
                id="outlined-helperText"
                label="Imagén del producto:"
                htmlFor="image"
                value={input.image}
                onChange={(e) => handleChange(e)}
                name="image"
                helperText="Campo obligatorio (*)"
                InputLabelProps={{
                  shrink: true,
              }}
                />
                 {errors.image && (<p className={style.error}>{errors.image}</p>)}
                </div>

                <div>
                <TextField sx={{ bgcolor:'#fff ', color: '#FFC400',  borderRadius: "10px" }}
                id="outlined-helperText"
                label="Marca del producto:"
                htmlFor="brand"
                value={input.brand}
                onChange={(e) => handleChange(e)}
                name="brand"
                helperText="Campo obligatorio (*)"
                InputLabelProps={{
                  shrink: true,
              }}
                />
                 {errors.brand && (<p className={style.error}>{errors.brand}</p>)}
                </div>


                <div>
                <TextField sx={{ bgcolor:'#fff ', color: '#FFC400', borderRadius: "10px" }}
                id="outlined-number"
                label= "Descuento del producto"
                htmlFor="discount"
                value={input.discount}
                onChange={(e) => handleChange(e)} 
                name="discount"
                helperText="Campo obligatorio (*)"
                type="number"
                placeholder="%"
                InputLabelProps={{
                    shrink: true,
                }}
                />
                {errors.discount && (<p className={style.error}>{errors.discount}</p>)}
                </div>
                <div>
                <TextField sx={{ bgcolor:'#fff ', color: '#FFC400',  borderRadius: "10px" }}
                id="outlined-number"
                label="Precio del producto"
                htmlFor="price"
                value={input.price}
                onChange={(e) => handleChange(e)}                      
                name="price"
                type="number"
                placeholder="$"
                helperText="Campo obligatorio (*)"
                InputLabelProps={{
                    shrink: true,
                }}
                />
                {errors.price && (<p className={style.error}>{errors.price}</p>)}
              </div>
              

              <div>
                <TextField sx={{ bgcolor:'#fff ', color: '#FFC400',  borderRadius: "10px" }}
                id="outlined-number"
                label="Stock del producto"
                htmlFor="stock"
                value={input.stock}
                onChange={(e) => handleChange(e)}                      
                name="stock"
                type="number"
                helperText="Campo obligatorio (*)"
                InputLabelProps={{
                    shrink: true,
                }}
                />
                {errors.stock && (<p className={style.error}>{errors.stock}</p>)}
              </div>

              <div> 
                <TextField sx={{ bgcolor:'#fff ', color: '#dee2e6',  borderRadius: "10px" }}
                textarea
                id="outlined-helperText"
                label="Descripción del producto: "
                maxlength = "30"
                htmlFor="description"
                value={input.description}
                name="description"
                onChange={(e) => handleChange(e)}
                helperText="Campo obligatorio (*)"
                InputLabelProps={{
                  shrink: true,
              }}
                />
                 {errors.description && (<p className={style.error}>{errors.description}</p>)}
                </div>
              

                
                <div >
                <FormControl sx={{ m: 1, minWidth: 80, width: '97%', bgcolor:'#fff'}}>
                    <InputLabel id="demo-simple-select-autowidth-label" >Categorias</InputLabel>
                    <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={input.categories}
                    // onChange={handleChangee}
                    autoWidth
                    label="Age"
                    onChange={e => handleCheck(e)}
                    >

                    <MenuItem value={"Auriculares"}>Auriculares</MenuItem>
                    <MenuItem value={"Fuente de alimentación"}>Fuente de alimentación</MenuItem>
                    <MenuItem value={"Gabinete"}>Gabinete</MenuItem>
                    <MenuItem value={"HDD"}>HDD</MenuItem>
                    <MenuItem value={"Micro-procesador"}>Micro-procesador</MenuItem>

                    <MenuItem value={"Micrófono"}>Micrófono</MenuItem>
                    <MenuItem value={"Monitor"}>Monitor</MenuItem>
                    <MenuItem value={"MotherBoard"}>MotherBoard</MenuItem>
                    <MenuItem value={"Mouse"}>Mouse</MenuItem>
                    <MenuItem value={"Mousepad"}>Mousepad</MenuItem>

                    <MenuItem value={"M.2NVme"}>M.2NVme</MenuItem>
                    <MenuItem value={"Parlante"}>Parlante</MenuItem>
                    <MenuItem value={"Placa de video"}>Placa de video</MenuItem>
                    <MenuItem value={"RAM"}>RAM</MenuItem>
                    <MenuItem value={"Refrigeración"}>Refrigeración</MenuItem>

                    <MenuItem value={"Sillas"}>Sillas</MenuItem>
                    <MenuItem value={"SSD"}>SSD</MenuItem>
                    <MenuItem value={"Teclados"}>Teclados</MenuItem>
                    <MenuItem value={"Webcam"}>Webcam</MenuItem>
                
                    </Select>
                </FormControl>
                {errors.categories && (<p className={style.error}><p className="error" >{errors.categories}</p></p>)}
                </div>
            <div>
            <FormControl>
                <FormLabel id="demo-form-control-label-placement"  sx={{ ml: 2, mt:2 }}>Envio</FormLabel>
                <RadioGroup   row   aria-labelledby="demo-form-control-label-placement" 
                    name="position"  defaultValue="false" onChange={e => handlefreeShipping(e)} value={input.freeShipping}>

                    <FormControlLabel sx={{ ml: 2, mb:2, color: 'gray', bgcolor:'#fff',}}
                    value="false"
                    control={<Radio />}
                    label="Con costo"
                    labelPlacement="start"
                    />
                    <FormControlLabel sx={{ ml: 2, mb:2, color: 'gray', bgcolor:'#fff',}}
                    value="true"
                    control={<Radio />}
                    label="Gratis"
                    labelPlacement="start"
                    />
                    
                    
                </RadioGroup>
                </FormControl>  
            </div>
                             
            </div>
            </Box>
            <Stack direction="row" spacing={2} >

            <Button sx={{ m: 1, width: '70ch', color: '#022335', bgcolor:'#fff', borderColor:'#022335',  borderRadius: "10px"}} type='submit' className= {style.modificar} variant="outlined" startIcon={<EditIcon fontSize = "large"/>}>
            Modificar Producto
            </Button>
            </Stack>
                
            </Box>
                <br />
           

        </form>
    </div>

  );
};