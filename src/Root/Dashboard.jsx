import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaList, FaUser, FaUtensils } from "react-icons/fa";
import { MdEmail, MdOutlineMenu, MdOutlineShoppingBag } from "react-icons/md";
import logo from '../assets/images/logo/logo.png';


const Dashboard = () => {


    return (
        <div className="bg-slate-50">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn bg-[#fc5a03] border-0 text-white hover:bg-white hover:text-[#fc5a03] drawer-button lg:hidden">Open drawer</label>
                </div>

                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                    <div className=" min-h-screen bg-[#fc5a03] text-white pt-20">
                        <div className="pl-6 mb-10">
                            <div>
                                <img className="w-36 bg-white rounded-full mb-4" src={logo} alt="" />
                            </div>
                            <h2 className="text-3xl font-extrabold"><span className="text-2xl tracking-[1.8em]">TASK</span></h2>
                            <p className="text-3xl font-extrabold"> Management</p>
                        </div>

                        <ul className="menu p-4 w-72">
                            <li className="text-xl">
                                <NavLink to="/dashboard/profile">
                                    <FaUser></FaUser> Profile</NavLink>
                            </li>
                            <li className="text-xl">
                                <NavLink to="/dashboard/board">
                                    <FaUser></FaUser> Board (By Status)</NavLink>
                            </li>
                            <li className="text-xl">
                                <NavLink to="/dashboard/createTask">
                                    <FaUtensils></FaUtensils> Create New Task</NavLink>
                            </li>
                            <li className="text-xl">
                                <NavLink to="/dashboard/previousTask">
                                    <FaList></FaList> Previous Task</NavLink>
                            </li>


                            <div className="divider"></div>


                            <li className="text-xl">
                                <NavLink to="/">
                                    <FaHome></FaHome>Home</NavLink>
                            </li>
                            <li className="text-xl">
                                <NavLink to="/blog">
                                    <MdOutlineMenu></MdOutlineMenu> Blog</NavLink>
                            </li>
                            <li className="text-xl">
                                <NavLink to="/about">
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
                </div>

                <div className="flex-1 pt-16 ml-5">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;