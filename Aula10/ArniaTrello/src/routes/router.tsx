import { BrowserRouter, Route, Routes as RoutesRouter } from "react-router-dom";
import Login from "../pages/Login";
import Trello from "../pages/Trello";
import Cadastro from "../pages/Cadastro";


// const AccessPrivateRoutes = () => {
//   const {authentified} = useAuth();

//   // if(!authentified){
//   // return  <Navigate to="/login"/>
//   // }
// }
const Routes = () => {

  return (
    // <BrowserRouter>
      <RoutesRouter>
        <Route element={<Login />} path="/" />
        <Route element={ <Trello />} path="/trello" />
        <Route element={<Cadastro />} path="/cadastro" />
      </RoutesRouter>
    //  </BrowserRouter>
  );
};

export default Routes;
