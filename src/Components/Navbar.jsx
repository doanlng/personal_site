import communicate from '../assets/icons/comm.png';
import contact from '../assets/icons/us.png';
import project from '../assets/icons/pm.png';
import tech from '../assets/icons/tech.png';

const NavBar = ({navTo}) => {
    const handleClick = (id) =>{
        console.log(id)
        navTo(id)
    }
    return (
        <nav className='fixed items-center bg-slate-950 bg-opacity-60 right-0'>
            <ul className="flex">
                <li onClick={() => handleClick(.95)}><NavIcon icon={tech} text="Tech" /></li>
                <li onClick={() => handleClick(.95)}><NavIcon icon={project} text="Project" /></li>
                <li onClick={() => handleClick(2)}><NavIcon icon={contact} text="Timeline" /></li>
                <li onClick={() => handleClick(2.9)}><NavIcon icon={communicate} text="Contact Me" /></li>
            </ul>
        </nav>
    )
}

const NavIcon = ({icon, text}) => (
    <div className="navbar-icon">
        <img src={icon} alt={text} />
        <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
);

export default NavBar;