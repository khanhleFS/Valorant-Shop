import '../App.css'

const Header = () => {
    return (
        <header className="header">
            <div className="header-top">
                <div className="header-announcement">
                    THE WAIT IS OVER, PRX OFFICIAL 2026/27 DINOMARINE JERSEY – AVAILABLE NOW
                </div>
                <div className="header-free-shipping">
                    FREE SHIPPING ON ORDERS OVER SGD $100!
                </div>
            </div>

            <div className="header-main">
                <div className="header-logo">
                    <span className="logo-text-main">Valorant</span>
                    <span className="logo-text-sub">Shop</span>
                </div>

                <nav className="main-nav">
                    <button className="nav-item">All Products</button>
                    <button className="nav-item">Team Kit</button>
                    <button className="nav-item">Collections</button>
                    <button className="nav-item">Exclusive Content</button>
                </nav>

                <div className="header-actions">
                    <div className="country-select">
                        <span>Singapore</span>
                        <span className="country-currency">· SGD $</span>
                    </div>
                    <div className="search-input-wrapper">
                        <input
                            className="search-input"
                            placeholder="Search"
                            type="text"
                        />
                    </div>
                    <button className="header-link">Account</button>
                    <button className="header-cart">Cart (0)</button>
                </div>
            </div>
        </header>
    )
}

export default Header
