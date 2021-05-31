import SideBar from '../components/MenuIzquierdo';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Cliente from '../pages/Cliente';
import Proyecto from '../pages/Proyecto'


const AppRouter = () => {
    return (
        <Router>
            <div>
                <SideBar />
                <div className="pusher">
                    <Switch>
                        <Route path="/" exact component={ Cliente } />
                        <Route path="/cliente" component={ Cliente } />
                        <Route path="/proyecto" component={ Proyecto } />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default AppRouter;
