import AddCustomer from "./AddCustomer";
import CustomerDetail from "./CustomerDetail";
import Customers from "./Customers";
import Home from "./Home";
import UpdateCustomer from "./UpdateCustomer";

export const routerConfig = 
[
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/customers',
        element:<Customers/>
    },
    {
        path:'/customerdetail/:id',
        element:<CustomerDetail/>
    },
    {
        path:'/addcustomer',
        element:<AddCustomer/>
    },
    {
        path:'/updatecustomer/:id',
        element:<UpdateCustomer/>
    }
]