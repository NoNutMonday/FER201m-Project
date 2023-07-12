import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { addWishlist, getWishlist } from "../../../../core/redux/motel"
import { useEffect } from "react"
import { toast } from "react-hot-toast"

export default function Motel() {

    const state = useSelector(state => state.motels)

    const dispatch = useDispatch()

    const handleAddWishlist = (item) => {
        if (checkWishlist(item.id) !== undefined) {
            toast.error('Motel already exists in wishlist !')
            return
        }
        console.log('add wishlist: ' + item)
        dispatch(addWishlist({ motel: item }))
        toast.success('Add wishlist successfully !')
    }

    const checkWishlist = (id) => {
        const item = state?.wishlist?.find(item => item.id === id)
        if (item) {
            return item
        }
        return undefined
    }

    return (
        <>
            <section
                className="page-title"
                style={{ backgroundImage: "url(images/background/5.jpg)" }}
            >
                <div className="auto-container">
                    <h2>Services</h2>
                    <ul className="page-breadcrumb">
                        <li>
                            <a href="/">home</a>
                        </li>
                        <li>Motel</li>
                    </ul>
                </div>
            </section>
            <section className="services-page-section style-two">
                <div className="auto-container">
                    <div className="sec-title centered">
                        <h2>We Provide Different Services In Interior Field</h2>
                        <div className="text">
                            Survival strategies to ensure proactive domination. At the end of the
                            day, going forward, a new normal that has evolved from generation X is
                            on the runway heading towards a streamlined cloud solution. User
                            generated content in real-time will have multiple.
                        </div>
                    </div>
                    <div className="row clearfix">
                        {
                            state?.motels.map(item => (

                                item.published ? (
                                    <div className="service-block-three style-two col-lg-3 col-md-6 col-sm-12" key={item.id}>
                                        <div
                                            className="inner-box wow fadeInUp"
                                            data-wow-delay="0ms"
                                            data-wow-duration="1500ms"
                                        >
                                            <div className="image">
                                                <Link to={`/motel/${item.id}`}>
                                                    <img src={item?.images[0]?.url} alt="" style={{ height: '14rem' }} />
                                                </Link>
                                            </div>
                                            <div className="lower-content">
                                                <h3>
                                                    <Link to={`/motel/${item.id}`}>{item.name}</Link>
                                                </h3>
                                                <div className="text-left">
                                                    <span>Capacity: {item.capacity}</span><br />
                                                    <span>Address: {item.address}</span><br />
                                                    <span>Address: {item.address}</span><br />
                                                    <span>Price: {item.price}</span><br />
                                                </div>
                                                <div>
                                                    <Link to={`/motel/${item.id}`} className="read-more mx-2"> Read more</Link>
                                                    <button className="btn btn-outline-light" onClick={() => handleAddWishlist(item)}>
                                                        <i className={`fas fa-heart ${checkWishlist(item.id) !== undefined ? 'text-danger' : 'text-dark'}`} ></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : null
                            ))
                        }
                    </div>
                </div>
            </section>
        </>

    )
}