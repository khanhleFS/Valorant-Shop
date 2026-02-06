import '../App.css'

// TODO: Đặt file banner bạn gửi vào thư mục src/assets và đặt tên là banner.jpg
import bannerImage from '../assets/banner.jpg'

const mockHotItems = [
  {
    id: 1,
    tag: 'new release',
    name: 'PRX Official Match Jersey 2026/27 DinoMarine',
    price: '74.99',
    badge: 'Official Jersey',
  },
  {
    id: 2,
    tag: 'Sale',
    name: 'PRX Official Match Jersey 2025/26 Raptor',
    price: '41.99',
    oldPrice: '69.99',
    badge: 'Bestseller',
  },
  {
    id: 3,
    tag: 'Back in Stock',
    name: 'PRX Windbreaker',
    price: '99.99',
  },
  {
    id: 4,
    tag: 'Back in Stock',
    name: 'PRX Zip Hoodie Black',
    price: '79.99',
  },
]

const mockSeoulMission = [
  {
    id: 5,
    tag: 'Back in Stock',
    name: 'Seoul Mission Tee 2025 - Cloudcore White',
    price: '39.99',
    color: 'White',
  },
  {
    id: 6,
    tag: 'Back in Stock',
    name: 'Seoul Mission Tee 2025 - Velocity Blue',
    price: '39.99',
    color: 'Blue',
  },
]

const mockBasics = [
  {
    id: 7,
    tag: 'Sold out',
    name: 'Basic Black Hoodie',
    price: '59.99',
    color: 'Black',
  },
  {
    id: 8,
    tag: 'Sold out',
    name: 'Basic Black Tee',
    price: '34.99',
    color: 'Black',
  },
  {
    id: 9,
    tag: 'Back in Stock',
    name: 'Basic White Tee',
    price: '34.99',
    color: 'White',
  },
  {
    id: 10,
    tag: 'Sold out',
    name: 'Basic White Hoodie',
    price: '59.99',
    color: 'White',
  },
]

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
          <span className="logo-text-main">Valorant
          </span>
          <span className="logo-text-sub">Shop</span>
        </div>

        <nav className="main-nav">
          <button className="nav-item nav-item-active">All Products</button>
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
          <button className="header-cart">
            Cart (0)
          </button>
        </div>
      </div>
    </header>
  )
}

const HeroBanner = () => {
  return (
    <section className="hero">
      <div className="hero-image-wrapper">
        <img src={bannerImage} alt="Valorant PRX Banner" className="hero-image" />
      </div>
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-kicker">HOT DROP</p>
          <h1 className="hero-title">
            PRX OFFICIAL 2026/27 DINOMARINE JERSEY
          </h1>
          <p className="hero-subtitle">
            Inspired by Valorant&apos;s most fearless plays. New season, new drip.
          </p>
          <button className="primary-button">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  )
}

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-placeholder">
        <span className="product-tag">{product.tag}</span>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        {product.badge && (
          <p className="product-badge">{product.badge}</p>
        )}
        <div className="product-price-row">
          <span className="product-price">${product.price} SGD</span>
          {product.oldPrice && (
            <span className="product-old-price">${product.oldPrice} SGD</span>
          )}
        </div>
        {product.color && (
          <p className="product-color">Available in {product.color}</p>
        )}
      </div>
    </div>
  )
}

const ProductSection = ({ title, subtitle, products }) => {
  return (
    <section className="section">
      <div className="section-header">
        <p className="section-kicker">{subtitle}</p>
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}

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

export default function Home() {
  return (
    <div className="app-root">
      <Header />
      <main className="page-content">
        <HeroBanner />
        <ProductSection
          title="NEW RELEASES AND BESTSELLERS"
          subtitle="HOT ITEMS"
          products={mockHotItems}
        />
        <ProductSection
          title="PRX SEOUL MISSION COLLECTION"
          subtitle="Back In Stock"
          products={mockSeoulMission}
        />
        <ProductSection
          title="PRX BASICS"
          subtitle="BACK IN STOCK"
          products={mockBasics}
        />
      </main>
      <Footer />
    </div>
  )
}
