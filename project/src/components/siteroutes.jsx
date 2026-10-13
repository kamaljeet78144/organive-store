import{Route,Routes} from "react-router-dom"
import Home from "./home"
import Login from "./login"
import Register from "./register"
import Contact from "./contact"
import { AddCat } from "./addcat"
import Addproduct from "./addproduct"
import { Admindash } from "./Admindash"
import { Product } from "./Products"
import Detail from "./detail"
import { Allpro } from "./allpro"
import AddToCart from "./addtocart"
import Checkout from "./checkout"
import { Whislist } from "./whislist"
import OrderSuccess from "./ordersuccess"
import Complaint from "./complaint"
import Users from "./users"
import AllOrders from "./allorders"
import MyOrders from "./myorders"
import Blog from "./blog"
import Allblogs from "./allblogs"
import { Blogdetail } from "./blogdetail"



export const Siteroutes =()=>{
    return(
        <>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/addcat" element={<AddCat/>}/>
    <Route path="/addproduct" element={<Addproduct/>}/>
    <Route path="/admin" element={<Admindash/>}/>
    <Route path="/products" element={<Product/>}/>
    <Route path="/detail" element={<Detail/>}/>
<Route path="/allpro" element={<Allpro/>}/>
<Route path="/addtocart" element={<AddToCart/>}/>
<Route path="/checkout" element={<Checkout/>}/>
<Route path="/whislist" element={<Whislist/>}/>
<Route path="/ordersuccess" element={<OrderSuccess/>}/>
<Route path="/complaint" element={<Complaint/>}/>

<Route path="/User" element={<Users/>}/>
<Route path="/allorders" element={<AllOrders/>}/>

<Route path="/myorders" element={<MyOrders/>}/>

<Route path="/blog" element={<Blog/>}/>
<Route path="/allblogs" element={<Allblogs/>}/>
<Route path="/blogdetails" element={<Blogdetail/>}/>
   </Routes>
        
        </>
    )
}