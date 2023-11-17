import "./link.css"
import { Link } from "react-scroll"

export default function SectionLink({toItem, children}: {toItem: any, children: any}) {
    return (<Link className="link" to={toItem}>{children}</Link>)
}