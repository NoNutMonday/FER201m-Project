import { useParams } from "react-router-dom"


export default function ReviewDetail() {
    const { id } = useParams()
    return (
        <div>
            ReviewDetail {id}
        </div>
    )
}