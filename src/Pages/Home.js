import React, { useEffect, useState } from "react";
import Spinner from "../Components/Spinner";
import Product from "../Components/Product";


const Home = () => {

    const API_URL = "https://fakestoreapi.com/products";

    const [loading, setLoading] = useState(false);

    const [posts, setPosts] = useState([]);

    async function fetchProductData() {
        setLoading(true);

        try {
            const response = await fetch(API_URL);
            const data= await response.json();

            setPosts(data);
        }
        catch(error) {
            console.log("Something ent Wrong");
            setPosts([]);
        }

        setLoading(false);
    }

    useEffect( () => {
        fetchProductData();
    }, []);

    return(
        <div>
            {
                loading? 
                <Spinner/>
                :
                posts.length === 0 ?
                <div>
                    No Product to Show
                </div>
                :
                <div className="grid xs:gridcols-1 sm:grid-cols-2  md:grid-cols-3 
                lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                    {
                        posts.map( (post) => {
                            return <Product key={post.id} post={post}/>
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Home;