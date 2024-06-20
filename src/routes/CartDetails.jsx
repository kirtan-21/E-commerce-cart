import CardItems from "../components/CardItems";
import "../components/cartstyle.css";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../store/cartItemsSlice";
import { useEffect, useState } from "react";
import toast  from 'react-hot-toast';

const CartDetails = () => {
  const [totalPrise, setTotalPrise] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const dispatch = useDispatch();

  const { carts } = useSelector((store) => store.cart);

  console.log("carts : ", carts);

  const handleRemoveAll = () => {
    dispatch(cartAction.removeAllFromCart());
    toast.success("Your Cart Is Empty")
  };

  // count total price
  const total = () => {
    let totalPrise = 0;
    carts.map((item) => {
      totalPrise = item.price * item.qnty + totalPrise;
    });
    setTotalPrise(totalPrise);
  };

  const totalQuantityFunction = () => {
    let totalQuantity = 0;
    carts.map((item) => {
      totalQuantity += item.qnty;
    });
    setTotalQuantity(totalQuantity);
  };

  useEffect(() => {
    totalQuantityFunction();
  }, [totalQuantityFunction]);

  useEffect(() => {
    total();
  }, [total]);

  return (
    <>
      <div className="row justify-content-center m-0">
        <div className="col-md-8 mt-5 mb-5 cardsdetails">
          <div className="card">
            <div className="card-header bg-dark p-3">
              <div className="card-header-flex">
                <h5 className="text-white m-0">
                  Shopping Cart{carts.length > 0 ? `(${carts.length})` : ""}
                </h5>
                {carts.length > 0 && (
                  <button
                    className="btn btn-danger mt-0 btn-sm "
                    onClick={() => handleRemoveAll()}
                  >
                    <i className="fa fa-trash-alt mr-2"></i>
                    <span>Empty Cart</span>
                  </button>
                )}
              </div>
            </div>
            <div className="card-body p-0">
              {carts.length === 0 ? (
                <table className="table cart-table mb-0">
                  <tbody>
                    <tr>
                      <td colSpan={6}>
                        <div className="cart-empty">
                          <i className="fa fa-shooping-cart"></i>
                          <p>Your Cart Is Empty</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <table className="table cart-table mb-0">
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th>Product</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th className="text-right">
                        <span id="amount" className="amount">
                          Total Amount
                        </span>
                      </th>
                    </tr>
                  </thead>
                  {carts.map((item) => (
                    <CardItems key={item.id} item={item} />
                  ))}
                  <tfoot>
                    <tr>
                      <th>&nbsp;</th>
                      <th colSpan={2}>&nbsp;</th>
                      <th>
                        Items In Cart <span className="ml-2 mr-2">:</span>
                        <span className="text-danger">{totalQuantity}</span>
                      </th>
                      <th colSpan={1}>&nbsp;</th>
                      <th className="text-right">
                        Total Price<span className="ml-2 mr-2">:</span>
                        <span className="text-danger">₹ {totalPrise}</span>
                      </th>
                    </tr>
                  </tfoot>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDetails;
