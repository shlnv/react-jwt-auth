import './App.css';
import MainPage from "./features/main_pages_detailes/presentation/MainPage";
import Navbar from "./components/Navbar";
import SignInComponent from "./features/signin_detailes/presentation/Components/SignInComponent";
import SignUpComponent from "./features/signin_detailes/presentation/Components/SignUpComponent";
import RecoveryComponent from "./features/signin_detailes/presentation/Components/RecoveryComponent";
import AuthRedirectComponent from "./features/signin_detailes/presentation/Components/AuthRedirectComponent";
import NewPasswordComponent from "./features/signin_detailes/presentation/Components/NewPasswordComponent";
import ProductPage from "./features/product_details/presentation/ProductPage";
import {Route, Routes} from "react-router-dom";
import Main from "./Main";
import TestComponent from "./TestComponent";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Main/>} exact/>
                <Route path="product/:id" element={<ProductPage/>} exact/>
                <Route path="/main/signin" element={<SignInComponent/>}/>
                <Route path="/main/signup" element={<SignUpComponent/>}/>
                <Route path="/main/recovery" element={<RecoveryComponent/>}/>
                <Route path="/main/authredirect" element={<AuthRedirectComponent/>}/>
                <Route path="/main/newpassword" element={<NewPasswordComponent/>}/>
                <Route path="/test" element={<TestComponent/>}/>
            </Routes>
        </div>
    );
}

export default App;
