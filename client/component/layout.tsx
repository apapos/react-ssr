import { Link } from "react-router-dom";
import { PropsWithChildren } from "react";
const Layout = (props: PropsWithChildren) => {
    return (
        <>
            <div className="header">
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
            </div>
            <div className="content">
                {props.children}
            </div>
        </>
    )
}
export default Layout