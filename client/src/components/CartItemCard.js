
import React from "react";


function CartItemCard({cartItem, handleRemoveCartItem}) {

  
    return (
        <li key={cartItem.id} className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src='https://cdn3.whatculture.com/images/2020/06/f89dc9fa7526554c-1200x675.jpg'
                alt={cartItem.id}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between text-base font-medium text-gray-900">

                  <p className="ml-4">{cartItem.event.event_name}</p>
                </div>
                {/* <p className="mt-1 text-sm text-gray-500">{cartItem.event_id}</p> */}
              </div>
              <div className="flex flex-1 items-end justify-between text-sm">
                <p className="text-gray-500">Qty: 1</p>

                <div className="flex">
                  <button
                    onClick={() =>{handleRemoveCartItem(cartItem.id)}}
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                    
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </li>
        )}

  export default CartItemCard;