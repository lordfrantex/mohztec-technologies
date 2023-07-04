import Header from "../Components/Header";
import Cart from "../Components/Cart"
import Title from "../Components/Title";
import Footer from "../Components/Footer";
import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/'
const CartPage = () => {
    return (
        <div>
            <Header />
            <Title title="Your Cart" />
            <Cart />
            <Footer />
        </div>
    )
}

export default CartPage