import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaCalendar, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { MdEmail, MdOutlineMenu, MdOutlineShoppingBag, MdReviews } from "react-icons/md";


const Dashboard = () => {

    const isAdmin = true;

    return (
        <div className="bg-slate-50">
            <div>
                <div className="flex">
                    <div className="w-72 min-h-screen bg-[#fc5a03] text-white font-extrabold pt-20">
                        <div className="pl-6 mb-16">
                            <h2 className="text-3xl font-extrabold"><span className="text-2xl tracking-[1.8em]">TASK</span> Management</h2>
                        </div>


                        <ul className="menu">
                            {
                                isAdmin ? <>
                                    <li className="text-xl">
                                        <NavLink to="/dashboard/userHome">
                                            <FaHome></FaHome> Admin Home</NavLink>
                                    </li>
                                    <li className="text-xl">
                                        <NavLink to="/dashboard/addItems">
                                            <FaUtensils></FaUtensils> Add Items</NavLink>
                                    </li>
                                    <li className="text-xl">
                                        <NavLink to="/dashboard/manageItems">
                                            <FaList></FaList> Manage Items</NavLink>
                                    </li>
                                    <li className="text-xl">
                                        <NavLink to="/dashboard/manageBookings">
                                            <FaBook></FaBook>
                                            Manage Bookings</NavLink>
                                    </li>
                                    <li className="text-xl">
                                        <NavLink to="/dashboard/allUsers">
                                            <FaUsers></FaUsers>  All Users</NavLink>
                                    </li>
                                </>
                                    :
                                    <>
                                        <li className="text-xl">
                                            <NavLink to="/dashboard/userHome">
                                                <FaHome></FaHome> User Home</NavLink>
                                        </li>
                                        <li className="text-xl">
                                            <NavLink to="/dashboard/reservation">
                                                <FaCalendar></FaCalendar> Reservation</NavLink>
                                        </li>
                                        <li className="text-xl">
                                            <NavLink to="/dashboard/cart">
                                                <FaShoppingCart></FaShoppingCart>My Cart </NavLink>
                                        </li>
                                        <li className="text-xl">
                                            <NavLink to="/dashboard/review">
                                                <MdReviews></MdReviews>  Add a Review</NavLink>
                                        </li>
                                        <li className="text-xl">
                                            <NavLink to="/dashboard/bookings">
                                                <FaList></FaList>  My Bookings</NavLink>
                                        </li>
                                    </>
                            }


                            <div className="divider"></div>


                            {/* Shared NavLink */}
                            <li className="text-xl">
                                <NavLink to="/">
                                    <FaHome></FaHome>Home</NavLink>
                            </li>
                            <li className="text-xl">
                                <NavLink to="/ourMenu">
                                    <MdOutlineMenu></MdOutlineMenu> Blog</NavLink>
                            </li>
                            <li className="text-xl">
                                <NavLink to="/ourShop/salad">
                                    <MdOutlineShoppingBag></MdOutlineShoppingBag>
                                    About</NavLink>
                            </li>
                            <li className="text-xl">
                                <NavLink to="/contact">
                                    <MdEmail></MdEmail>
                                    Contact</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="flex-1 pt-16 ml-5">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;