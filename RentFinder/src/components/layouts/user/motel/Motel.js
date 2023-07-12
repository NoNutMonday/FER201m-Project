import {  useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function Motel() {

    const state = useSelector(state => state.motels)

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
                                <div className="service-block-three style-two col-lg-3 col-md-6 col-sm-12">
                                    <div
                                        className="inner-box wow fadeInUp"
                                        data-wow-delay="0ms"
                                        data-wow-duration="1500ms"
                                    >
                                        <div className="image">
                                            <a href="residental-interior.html">
                                                <img src={item?.images[0]?.url} alt="" style={{height: '14rem'}} />
                                            </a>
                                        </div>
                                        <div className="lower-content">
                                            <h3>
                                                <a href="residental-interior.html">{item.name}</a>
                                            </h3>
                                            <div className="text-left">
                                                <span>Capacity: {item.capacity}</span><br/>
                                                <span>Address: {item.address}</span><br/>
                                                <span>Address: {item.address}</span><br/>
                                                <span>Price: {item.price}</span><br/>
                                            </div>
                                            <Link to={`/motel/${item.id}`} className="read-more"> Read more</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>

    )
}