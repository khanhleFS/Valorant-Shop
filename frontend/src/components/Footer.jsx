import '../App.css'

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-main">
                <div className="footer-about">
                    <h3>About</h3>
                    <p>
                        Valorant Shop là bản mô phỏng của Paper Rex Shop, được xây dựng cho mục đích học tập
                        và demo e-commerce. Tham khảo nội dung và bố cục từ trang chính thức của Paper Rex Shop.
                    </p>
                </div>
                <div className="footer-links">
                    <h4>Quick links</h4>
                    <ul>
                        <li>About Us</li>
                        <li>All Products</li>
                        <li>FAQ</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="footer-newsletter">
                    <h4>Subscribe to our newsletter and get rewarded!</h4>
                    <p>
                        Subscribe để nhận cập nhật sản phẩm, giveaway và ưu đãi độc quyền.
                        Đăng ký lần đầu nhận <strong>10% OFF</strong> cho đơn hàng đầu tiên.
                    </p>
                    <div className="newsletter-form">
                        <input className="newsletter-input" placeholder="Email" />
                        <button className="primary-button">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <span>Singapore | SGD $</span>
                <span>© 2026 Valorant Shop (PRX Inspired)</span>
            </div>
        </footer>
    )
}

export default Footer
