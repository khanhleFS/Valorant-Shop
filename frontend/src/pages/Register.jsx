import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../App.css'

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // TODO: Implement registration logic
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!')
            return
        }
        console.log('Registration attempt:', formData)
    }

    return (
        <div className="app-root">
            <Header />

            {/* Main Content */}
            <main className="page-content">
                <div className="auth-container">
                    <div className="auth-card">
                        <div className="auth-header">
                            <h1 className="auth-title">Create Account</h1>
                            <p className="auth-subtitle">Join us and start shopping exclusive PRX gear</p>
                        </div>

                        <form className="auth-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="firstName">
                                        First Name
                                    </label>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        className="form-input"
                                        placeholder="John"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="lastName">
                                        Last Name
                                    </label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        className="form-input"
                                        placeholder="Doe"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="email">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="form-input"
                                    placeholder="your.email@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="form-input"
                                    placeholder="Create a strong password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="confirmPassword">
                                    Confirm Password
                                </label>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    className="form-input"
                                    placeholder="Re-enter your password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-options">
                                <label className="checkbox-label">
                                    <input type="checkbox" className="form-checkbox" required />
                                    <span>
                                        I agree to the{' '}
                                        <a href="#" className="form-link">
                                            Terms of Service
                                        </a>{' '}
                                        and{' '}
                                        <a href="#" className="form-link">
                                            Privacy Policy
                                        </a>
                                    </span>
                                </label>
                            </div>

                            <button type="submit" className="auth-button">
                                Create Account
                            </button>
                        </form>

                        <div className="auth-divider">
                            <span>or</span>
                        </div>

                        <div className="auth-social">
                            <button className="social-button">
                                <span>Sign up with Google</span>
                            </button>
                            <button className="social-button">
                                <span>Sign up with Discord</span>
                            </button>
                        </div>

                        <div className="auth-footer">
                            <p>
                                Already have an account?{' '}
                                <a href="/login" className="auth-link">
                                    Sign in
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Register
