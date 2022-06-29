import React, {useEffect} from "react";
import { getAllProducts } from '../../redux/actions/productsA';
import { useSelector, connect } from 'react-redux';


function AdminProducts () {
    const products = useSelector((state) => state.products.products);
    
    console.log(products)
    
    useEffect(() => {
        getAllProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // function handleClick(e) {
    //     e.preventDefault();
    //     dispatch(getAllProducts());
    // }

    return(
        <div>
            
        </div>
    )
}

export default connect(null,{getAllProducts}) (AdminProducts);