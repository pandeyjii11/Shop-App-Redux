import React from "react";
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../Redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({product}) => {

    const dispatch = useDispatch();

    function removeFromCart() {
        dispatch(remove(product.id));
        toast.error("Item Removed from Cart");
    }

    return(
        <div className="flex items-center p-5 justify-between mt-2 mb-2 mx-5 border-b-[3px] border-slate-500  ">
            <div className="flex flex-row p-3 gap-5 items-center">
                <div className="w-[30%]">
                    <img src={product.image} alt="product-img" className="object-cover" />
                </div>
                <div className="w-[70%] self-start space-y-5 ml-5">
                    <h1 className="text-xl text-slate-700 font-semibold">
                        {product.title}
                    </h1>
                    <h1 className="text-base text-slate-700 font-medium">
                        {product.description}
                    </h1>
                    <div className="flex items-center justify-between">
                        <p className="text-green-600 font-bold text-lg">
                            {product.price}
                        </p>
                        <button
                        className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 
                        cursor-pointer rounded-full p-3 mr-3"
                        onClick={removeFromCart}>
                            <FcDeleteDatabase/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;