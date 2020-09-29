import Link from 'next/link';


const Nav = () => (
    <div>
    <div className="header h-40 bg-black">

    <div className="logo">
    <img className="h-40 px-20" src="/real-white-logo.png"></img>
    </div>

    <div className="navbar">

    <div className="links">
    <ul className="links-ul">
    <li><a>Menu</a></li>
    <li><a>Order</a></li>
    <li><a>About</a></li>
    <li><a>Shop</a></li>
    </ul>
    </div>

    <div className="icons">
    <ul className="icons-ul">
    <li><a><i class="fab fa-instagram"></i></a></li>
    <li><a>Order</a></li>
    <li><a>About</a></li>
    </ul>

    </div>

    </div>


    </div>
    
    </div>

);

export default Nav;