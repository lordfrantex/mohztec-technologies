import Home from './Pages/Home';
import './Components/Header'
import Header from './Components/Header';
import { Routes, Route } from "react-router-dom"
import Services from './Pages/Services';
import ContactPage from './Pages/ContactPage';
import AboutUs from './Pages/AboutUs'
import ProjectPage from './Pages/ProjectPage';
import SpecificProject from './Components/SpecificProject';
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';
import SingleProductPage from './Components/SingleProductPage';
import SignIn_SignUp from './Components/SignIn_SignUp';
import CheckOut from './Components/CheckOut';
import AccountDetails from './Components/AccountDetails';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckoutPage from './Pages/CheckoutPage';
import Payment from './Components/Payment';
import Order from './Components/Order';
import Shipping from './Components/Shipping';
import DashboardHome from './Components/DashboardHome';
import DashboardPage from './Pages/DashboardPage';
import DashboardOrder from './Components/DashboardOrder';
import DashboardProduct from './Components/DashboardProduct';
import DashboardTransactions from './Components/DashboardTransactions';
import DashboardUser from './Components/DashboardUser';
import DashboardAddProducts from './Components/DashboardAddProducts';
import Blog from './Components/Blog';
import SingleBlog from './Components/SingleBlog';
import ProtectedRoute from './Pages/ProtectedRoute';
import Training from './Components/Training';
import DashboardCourse from './Components/DashboardCourse';
import SingleTraining from './Components/SingleTraining';
import DashboardBlog from './Components/DashboardBlog';
import UpdateDashboardCourse from './Components/UpdateDashboardCourse';
import UpdateDashboardBlog from './Components/UpdateDashboardBlog';
import DashboardProject from './Components/DashboardProject';
import UpdateDashboardProduct from './Components/UpdateDashboardProducts';

function App() {

  return (
    <div className="App">
      <ToastContainer />
      <Routes>

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path='dashboardPage' element={<DashboardPage />}>
            <Route index element={< DashboardHome />} />
            <Route path='dashboardOrder' element={<DashboardOrder />} />
            <Route path='dashboardProduct' element={<DashboardProduct />} />
            <Route path='dashboardProject' element={<DashboardProject />} />
            <Route path='dashboardCourse' element={<DashboardCourse />} />
            <Route path='dashboardBlog' element={<DashboardBlog />} />
            <Route path='updateDashbordCourse' element={<UpdateDashboardCourse />} />
            <Route path='updateDashbordBlog' element={<UpdateDashboardBlog />} />
            <Route path='dashboardTransactions' element={<DashboardTransactions />} />
            <Route path='dashboardUser' element={<DashboardUser />} />
            <Route path='dashboardAddProducts' element={<DashboardAddProducts />} />
            <Route path='dashboardProduct/:updateSingleProduct' element={<UpdateDashboardProduct />} />

          </Route>
          <Route path='checkoutPage' element={<CheckoutPage />}>
            <Route index element={<Shipping />} />
            <Route path='order' element={<Order />} />
            <Route path='payment' element={<Payment />} />
          </Route>
          <Route path='accountDetails' element={<AccountDetails />} />
          <Route path='checkout' element={<CheckOut />} />
        </Route>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path='services' element={<Services />} />
        <Route path='training' element={<Training />} />
        <Route path='training/:singleTraining' element={<SingleTraining />} />
        <Route path='account' element={<SignIn_SignUp />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='about' element={<AboutUs />} />
        <Route path='blog' element={<Blog />} />
        <Route path='blog/:singleBlog' element={<SingleBlog />} />
        <Route path='product' element={<ProductPage />} />
        <Route path='product/:singleProductPage' element={<SingleProductPage />} />
        <Route path='cart' element={<CartPage />} />
        <Route path='project' element={<ProjectPage />} />
        <Route path='project/:singleProject' element={<SpecificProject />} />
        <Route path='*' element={<div>ERROR 404!!!!!</div>} />
      </Routes>
    </div>
  );
}

export default App;
