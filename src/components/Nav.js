import Link from "next/link";


const Nav = () => (
    
    <div>
    
    <div className="header h-40 bg-black flex justify-between align-center">

    <div className="logo">
    <img className="h-40 px-20" src="/real-white-logo.png"></img>
    </div>

    <div className="navbar flex text-sm text-white">

    <div className="links">
    <ul className="links-ul flex uppercase py-16 px-6 font-semibold">
    <li className="px-4"><a>Menu</a></li>
    <li className="px-4"><a>Order</a></li>
    <li className="px-4"><a>About</a></li>
    <li className="px-4"><a>Shop</a></li>
    </ul>
    </div>

    <div className="icons">
    <ul className="icons-ul flex py-16 pr-10">
    <li className="px-4"><a>Insta</a></li>
    <li className="px-4"><a>Yelp</a></li>
    <li className="px-4"><a>Face</a></li>
    </ul>

    </div>

    </div>


    </div>
    
    <main>
        <div className="slider">

        </div>
        <div className="menu-container flex justify-center">
        <img className="menu h-screen" src="/new-menu.jpg"></img>
        </div>

        <div className="order-ahead-container h-64">
        <img className="order-ahead-img" src="/below-image.png"></img>
        </div>
    
    </main>


    </div>

);

export default Nav;