import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../App.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // TODO: Implement login logic
        console.log('Login attempt:', { email, password })
    }

    return (
        <div className="app-root">
            <Header />

            {/* Main Content */}
            <main className="page-content">
                <div className="auth-container">
                    <div className="auth-card">
                        <div className="auth-header">
                            <h1 className="auth-title">Welcome Back</h1>
                            <p className="auth-subtitle">Sign in to your account to continue</p>
                        </div>

                        <form className="auth-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label" htmlFor="email">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className="form-input"
                                    placeholder="your.email@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    className="form-input"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-options">
                                <label className="checkbox-label">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span>Remember me</span>
                                </label>
                                <a href="#" className="form-link">
                                    Forgot password?
                                </a>
                            </div>

                            <button type="submit" className="auth-button">
                                Sign In
                            </button>
                        </form>

                        <div className="auth-divider">
                            <span>or</span>
                        </div>

                        <div className="auth-social">
                            <button className="social-button">
                                <span>Continue with Google</span>
                            </button>
                            <button className="social-button">
                                <span>Continue with Discord</span>
                            </button>
                        </div>

                        <div className="auth-footer">
                            <p>
                                Don't have an account?{' '}
                                <a href="/register" className="auth-link">
                                    Sign up
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

export default Login
