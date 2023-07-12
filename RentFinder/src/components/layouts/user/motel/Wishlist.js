import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getWishlist, removeWishlist, setWishlist } from "../../../../core/redux/motel";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export default function Wishlist() {

    const wishlist = useSelector(state => state.motels.wishlist)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getWishlist())
    }, [dispatch])

    const handleRemoveWishlist = (id) => {
        dispatch(removeWishlist({ id: id }))
        toast.success('Remove wishlist successfully !')
    }
    

    return (

        <>
            <section className="page-title" style={{ backgroundImage: 'url(images/background/5.jpg)' }}>
                <div className="auto-container">
                    <h2>Wish List</h2>
                    <ul className="page-breadcrumb">
                        <li><a href="index-2.html">home</a></li>
                        <li>Your WishList</li>
                    </ul>
                </div>
            </section>

            {
                wishlist?.length !== 0 ? (
                    <section className="cart-section">
                        <div className="auto-container">
                            {/*Cart Outer*/}
                            <div className="cart-outer">
                                <div className="table-outer">
                                    <table className="cart-table">
                                        <thead className="cart-header">
                                            <tr>
                                                <th>Preview</th>
                                                <th className="prod-column">Motel Name</th>
                                                <th className="price">Price</th>
                                                <th>Capacity</th>
                                                <th>&nbsp;</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                wishlist?.map((item, index) => (
                                                    <tr key={index}>
                                                        <td className="prod-column">
                                                            <div className="column-box">
                                                                <figure className="prod-thumb">
                                                                    <Link to={`/motel/${item.id}`}>
                                                                        <img src={item?.images[0]?.url} alt="" />
                                                                    </Link>
                                                                </figure>
                                                            </div>
                                                        </td>
                                                        <td><h4 className="prod-title">{item.name}</h4></td>
                                                        <td className="sub-total">{item.price}</td>
                                                        <td className="qty">
                                                            <div className="item-quantity">
                                                                <input className="quantity-spinner" disabled type="text" defaultValue={item.capacity} name="quantity" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <button className="remove-btn" onClick={() => handleRemoveWishlist(item.id)}>
                                                                <span className="fas fa-times" />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }

                                        </tbody>
                                    </table>
                                </div>
                                <div className="cart-options clearfix">

                                    <div className="pull-right">
                                        <Link to={`/motel`} className="theme-btn cart-btn">Continues View Motels</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                ) : (
                    <div className="my-5">
                        <h3 className="text-center">Wishlist is empty !</h3>
                    </div>
                )
            }



        </>


    )
}