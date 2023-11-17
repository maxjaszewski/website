import "./link.css"
import { Link } from "react-scroll"

// TODO smooth scrolling here
export default function SectionLink({toItem, children}: {toItem: any, children: any}) {
    return (<Link className="link" to={toItem}>{children}</Link>)
}