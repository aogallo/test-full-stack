import { Link } from 'react-router-dom';

const SideBar = () => (
    <>
        <div className="ui left vertical menu visible sidebar">
            <nav>
                <ul>
                    <li className="item">
                        <Link to="/cliente"  > Cliente </Link>
                    </li>
                    <li className="item">
                        <Link to="/proyecto"  > Proyecto </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </>
)

export default SideBar;