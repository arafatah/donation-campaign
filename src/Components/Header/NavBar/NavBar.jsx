import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <div>
                <nav className="flex justify-between items-center py-6 px-5">

                    <img src="./img/Logo.png" alt="" />

                    <ul className="flex gap-5">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                                }
                            >
                                Home
                            </NavLink>

                        </li>

                        <li>
                            <NavLink
                                to="/donation"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                                }
                            >
                                Donation
                            </NavLink>


                        </li>
                        <li>
                            <NavLink
                                to="/statistics"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                                }
                            >
                                Statistics
                            </NavLink>


                        </li>
                    </ul>

                </nav>
                
            </div>
        </div>
    );
};

export default NavBar;