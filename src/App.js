import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./views/layout/layout";
import Login from "./views/login/login";


function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Login/>}/>
                    <Route path={'/layout'} element={<Layout/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
