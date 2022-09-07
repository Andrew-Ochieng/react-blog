import React from 'react'

const Navbar = () => {
    return ( 
        <div className="nav navbar navbar-expand-lg bg-light">
            <div>
                <div>
                    <a href="#">Tech Safari Blog</a>
                </div>

                {/* menu */}
                <div>
                    <ul>
                        <li>
                            <Link to="home" smooth={true} duration={500} >Home</Link>
                        </li>
                        <li>
                            <Link to="programming" smooth={true} duration={500} >Programming</Link>
                        </li>
                        <li>
                            <Link to="techbiz" smooth={true} duration={500} >Tech and Business</Link>
                        </li>
                        <li>
                            <Link to="futuretech" smooth={true} duration={500} >Future Tech</Link>
                        </li>
                        <li>
                            <Link to="techlife" smooth={true} duration={500} >Tech Life</Link>
                        </li>
                        <li>
                            <Link to="health" smooth={true} duration={500} >Mental Health</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;