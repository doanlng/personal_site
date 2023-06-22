import react from '../Assets/tech_icons/react.png'
const Tech = () => {
    return (
        <div className="justify-center text-white text-5xl" id="tech">
            <div className="flex justify-center items-center">Relevant Technologies</div>
            <ul className="justify-center flex py-10">
                <li><TechIcon icon={react} text="React"/></li>
                <li><TechIcon icon={react} text="React"/></li>
                <li><TechIcon icon={react} text="React"/></li>
                <li><TechIcon icon={react} text="React"/></li>
                <li><TechIcon icon={react} text="React"/></li>
                <li><TechIcon icon={react} text="React"/></li>
            </ul>
        </div>

    )
}

const TechIcon = ({icon, text}) => (
    <div className="tech-icon">
        <img src={icon} alt={text} />
    </div>
);

export default Tech