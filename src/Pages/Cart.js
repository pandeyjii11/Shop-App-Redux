import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CartSlice } from "../Redux/Slices/CartSlice";
import { NavLink } from "react-router-dom";
import CartItem from "../Components/CartItem";

const Cart = () => {

    const {cart} = useSelector((state) => state);

    // console.log(cart.length);

    const [totalAmount, setTotalAmount] = useState(0);

    useEffect( () => {
        setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price , 0));
    }, []);

    return(
        <div className="mb-10">
            {
                cart.length === 0 ?
                <div className="min-h-[80vh] flex flex-col justify-center items-center">
                    <h1 className="text-gray-700 font-semibold text-xl mb-2">
                        Your cart is Empty!
                    </h1>
                    <NavLink to="/">
                        <button className="uppercase bg-green-600 p-3 px-10 rounded-lg text-white mt-6 font-semibold 
                        tracking-wider hover:bg-purple-50 duration-300 transition-all ease-in hover:text-green-600 
                        border-2 border-green-600">
                            Shop Now
                        </button>
                    </NavLink>
                </div>
                
                :
                <div className="flex flex-row justify-center max-[1300px] mx-auto gap-x-5">
                    <div className="w-[60%] flex flex-col p-2">
                        {
                            cart.map( (product, index) => {
                                return <CartItem key={product.id} product={product} productIndex={index}/>
                            })
                        }
                    </div>
                    <div className="w-[40%] mt-5 flex flex-col">
                        <div className="flex flex-col h-[100%] justify-between p-5 gap-5 my-14">
                            <div className="flex flex-col gap-5 ">
                                Your cart
                            </div>
                            <div className="font-semibold text-5xl text-green-700  -mt-5">
                                Summary
                            </div>
                            <p className="text-xl">
                                <span className="text-gray-700 font-semibold text-xl">Total Items: {cart.lenght}</span>
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <p className="text-xl font-bold">
                                <span className="text-gray-700 font-semibold">Total Amount:</span>{" "}{totalAmount}
                            </p>
                            <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 
                            ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl mr-10">
                                Checkout Now
                            </button>
                        </div>
                    </div>
                </div> 
            }
        </div>
    )
}

export default Cart;