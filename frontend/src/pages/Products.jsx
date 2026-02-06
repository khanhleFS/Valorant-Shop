import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../App.css'

// Mock data cho tất cả sản phẩm
const allProducts = [
    {
        id: 1,
        tag: 'new release',
        name: 'PRX Official Match Jersey 2026/27 DinoMarine',
        price: '74.99',
        badge: 'Official Jersey',
        category: 'jerseys',
    },
    {
        id: 2,
        tag: 'Sale',
        name: 'PRX Official Match Jersey 2025/26 Raptor',
        price: '41.99',
        oldPrice: '69.99',
        badge: 'Bestseller',
        category: 'jerseys',
    },
    {
        id: 3,
        tag: 'Back in Stock',
        name: 'PRX Windbreaker',
        price: '99.99',
        category: 'outerwear',
    },
    {
        id: 4,
        tag: 'Back in Stock',
        name: 'PRX Zip Hoodie Black',
        price: '79.99',
        category: 'hoodies',
        color: 'Black',
    },
    {
        id: 5,
        tag: 'Back in Stock',
        name: 'Seoul Mission Tee 2025 - Cloudcore White',
        price: '39.99',
        color: 'White',
        category: 'tees',
    },
    {
        id: 6,
        tag: 'Back in Stock',
        name: 'Seoul Mission Tee 2025 - Velocity Blue',
        price: '39.99',
        color: 'Blue',
        category: 'tees',
    },
    {
        id: 7,
        tag: 'Sold out',
        name: 'Basic Black Hoodie',
        price: '59.99',
        color: 'Black',
        category: 'hoodies',
    },
    {
        id: 8,
        tag: 'Sold out',
        name: 'Basic Black Tee',
        price: '34.99',
        color: 'Black',
        category: 'tees',
    },
    {
        id: 9,
        tag: 'Back in Stock',
        name: 'Basic White Tee',
        price: '34.99',
        color: 'White',
        category: 'tees',
    },
    {
        id: 10,
        tag: 'Sold out',
        name: 'Basic White Hoodie',
        price: '59.99',
        color: 'White',
        category: 'hoodies',
    },
    {
        id: 11,
        tag: 'new release',
        name: 'PRX Training Jersey 2026',
        price: '64.99',
        category: 'jerseys',
    },
    {
        id: 12,
        tag: 'Back in Stock',
        name: 'PRX Snapback Cap - Black',
        price: '29.99',
        color: 'Black',
        category: 'accessories',
    },
    {
        id: 13,
        tag: 'Back in Stock',
        name: 'PRX Beanie - Purple',
        price: '24.99',
        color: 'Purple',
        category: 'accessories',
    },
    {
        id: 14,
        tag: 'Sale',
        name: 'PRX Track Pants',
        price: '54.99',
        oldPrice: '79.99',
        category: 'bottoms',
    },
    {
        id: 15,
        tag: 'new release',
        name: 'PRX Performance Shorts',
        price: '44.99',
        category: 'bottoms',
    },
    {
        id: 16,
        tag: 'Back in Stock',
        name: 'PRX Zip Hoodie Purple',
        price: '79.99',
        color: 'Purple',
        category: 'hoodies',
    },
]

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

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [sortBy, setSortBy] = useState('default')

    // Filter products by category
    const filteredProducts = selectedCategory === 'all'
        ? allProducts
        : allProducts.filter(p => p.category === selectedCategory)

    // Sort products
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === 'price-low') {
            return parseFloat(a.price) - parseFloat(b.price)
        } else if (sortBy === 'price-high') {
            return parseFloat(b.price) - parseFloat(a.price)
        } else if (sortBy === 'name') {
            return a.name.localeCompare(b.name)
        }
        return 0
    })

    return (
        <div className="app-root">
            <Header />

            <main className="page-content">
                <div className="products-page-header">
                    <h1 className="products-page-title">All Products</h1>
                    <p className="products-page-subtitle">
                        Discover our complete collection of PRX official merchandise
                    </p>
                </div>

                <div className="products-filters">
                    <div className="filter-group">
                        <label className="filter-label">Category:</label>
                        <select
                            className="filter-select"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option value="all">All Products</option>
                            <option value="jerseys">Jerseys</option>
                            <option value="hoodies">Hoodies</option>
                            <option value="tees">T-Shirts</option>
                            <option value="outerwear">Outerwear</option>
                            <option value="bottoms">Bottoms</option>
                            <option value="accessories">Accessories</option>
                        </select>
                    </div>

                    <div className="filter-group">
                        <label className="filter-label">Sort by:</label>
                        <select
                            className="filter-select"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="default">Default</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="name">Name: A to Z</option>
                        </select>
                    </div>

                    <div className="products-count">
                        Showing {sortedProducts.length} product{sortedProducts.length !== 1 ? 's' : ''}
                    </div>
                </div>

                <div className="product-grid">
                    {sortedProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {sortedProducts.length === 0 && (
                    <div className="no-products">
                        <p>No products found in this category.</p>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    )
}

export default Products
