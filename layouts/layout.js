import {Navbar} from "../components/partials";

export const Layout = ({children}) => {
    return (
        <>
            <Navbar/>
            <div className="main">
                {children}
            </div>
        </>
    )
}

export default Layout