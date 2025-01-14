
import "./navbar.css";

function Navbar() {
    return (
        <nav className="nav">
            <a href="" className='site-title'>Anthony Chan</a>
            <ul>
                <CustomLink href="/home">HOME</CustomLink>
                <CustomLink href="/experience">EXPERIENCE</CustomLink>
                <CustomLink href="/resume">PROJECTS</CustomLink>
                <CustomLink href="/resume">RESUME</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ href, children, ...props }){
    const path = window.location.pathname
    
    return (
    <li className={path === href ? "active" : ""}> 
        <a href={href} {...props}>
            {children}
        </a>
    </li>
    )
}

export default Navbar