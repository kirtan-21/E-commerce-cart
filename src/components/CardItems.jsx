import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../store/cartItemsSlice";
import toast  from 'react-hot-toast';

const CardItems = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch(cartAction.addToCart(item));
  };

  const handleRemove = (item) => {
    dispatch(cartAction.removeFromCart(item));
    toast.success("Item Remove From Your Cart")
  };

  const handledecrement = (item) => {
    dispatch(cartAction.decrementItem(item));
  };



  return (
    <>
      <tbody>
        <tr>
          <td>
            <button
              className="prdct-delete"
              onClick={() => handleRemove(item.id)}
            >
              <i className="fa fa-trash-alt mr-2"></i>
            </button>
          </td>
          <td>
            <div className="product-img">
              <img src={item.imgdata} alt="" />
            </div>
          </td>
          <td>
            <div className="product-name">
              <p>{item.dish}</p>
            </div>
          </td>
          <td>{item.price}</td>
          <td className="prdct-qty-container">
            <button
              className="prdct-qty-btn"
              type="button"
              onClick={item.qnty <=1 ? () => handleRemove(item.id) : () => handledecrement(item)}
            >
              <i className="fa fa-minus"></i>
            </button>
            <input
              type="text"
              className="qty-input-box"
              value={item.qnty}
              disabled
              id=""
            />
            <button
              className="prdct-qty-btn"
              type="button"
              onClick={() => handleIncrement(item)}
            >
              <i className="fa fa-plus"></i>
            </button>
          </td>
          <td className="text-right">₹ {item.price * item.qnty}</td>
        </tr>
      </tbody>
    </>
  );
};

export default CardItems;
