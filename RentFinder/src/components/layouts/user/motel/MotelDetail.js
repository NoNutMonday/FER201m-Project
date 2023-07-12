import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

export default function MotelDetail() {

    const { id } = useParams()

    const state = useSelector(state => state.motels)

    const motel = state?.motels?.find(item => Number(item.id) === Number(id))

    return (

        motel ? (
            <>
                <div className="sidebar-page-container">
                    <div className="auto-container">
                        <div className="row clearfix">
                            {/*Content Side / Services Detail */}
                            <div className="content-side col-xl-9 col-lg-8 col-md-12 col-sm-12">
                                <div className="services-detail">
                                    <div className="inner-box">
                                        <div className="text">
                                            {/* Two Column */}
                                            <div className="two-column">
                                                <div className="row clearfix">
                                                    <div className="column col-lg-4 col-md-4 col-sm-12">
                                                        {
                                                            motel?.images?.map(item => (
                                                                <div className="image" key={item.id}>
                                                                    <img src={item.url} alt="" />
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                    <div className="content-column col-lg-8 col-md-8 col-sm-12">
                                                        <div className="inner-column">
                                                            <h3>{motel?.name}</h3>
                                                            <p>Address: {motel?.address}</p>
                                                            <p>Price: {motel?.price}</p>
                                                            <p>Capacity: {motel?.capacity}</p>
                                                            <p>Note: {motel?.note}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Sidebar Side*/}
                        </div>
                    </div>
                </div>
            </>
        ) : (
            <>
                Something wrong
            </>
        )

    )
}