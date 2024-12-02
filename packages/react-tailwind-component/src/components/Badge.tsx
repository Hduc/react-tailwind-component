import * as React from "react"
interface BadgeProps {

}

const Badge: React.FC<BadgeProps> = () => {
    return (
        <button type="button" className="ti-btn bg-primary text-white my-1 me-2">
            Notifications <span className="badge ms-2 bg-secondary">4</span>
        </button>
    )
}
export default Badge