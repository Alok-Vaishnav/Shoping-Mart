import React, { useContext, useEffect} from 'react';
import Card from '../../components/Product/Card';
import Styles from '../../styles/Product/Card.module.css';
import { MyContext } from '../../../src/Context/MyContext';

function Product() {
    const { myProducts, setmyProducts,notfound} = useContext(MyContext);

    async function getProducts() {
        try {
            let response = await fetch("http://localhost:5000/Products");
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            let products = await response.json();
            setmyProducts(products);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    useEffect(() => {
        // setmyProducts([]);
        getProducts();
    },[notfound]);

    return (
        <div className={Styles.cardsContainer}>
            {myProducts && myProducts.map((product) => (
                <Card
                    key={product.id}
                    thumbnail={product.thumbnail}
                    description={product.description}
                    rating={product.rating}
                    price={product.price}
                    title={product.title}
                    id={product.id}
                />
            ))}
        </div>
    );
}

export default Product;
