import React, { useState } from "react";
// import { Eye, EyeOff } from "lucide-react";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({ email: "", password: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = () => {
        const next = { email: "", password: "" };
        if (!email) next.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email";

        if (!password) next.password = "Password is required";
        else if (password.length < 6) next.password = "Use at least 6 characters";

        setErrors(next);
        return !next.email && !next.password;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setIsSubmitting(true);
        try {
            // TODO: replace with real API call
            await new Promise((r) => setTimeout(r, 800));
            alert(`Logged in as ${email}`);
            navigate('/Home')
        } catch (err) {
            console.error(err);
            alert("Login failed. Try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handlesignupchange = () => {
        navigate('/Signup')
    }

    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <div className="col-md-6 col-lg-5">
                <div className="card shadow p-4">
                    <h2 className="text-center mb-3">Welcome Back</h2>
                    <p className="text-center text-muted">Please sign in to continue</p>

                    <form onSubmit={onSubmit} noValidate>
                        {/* Email */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                autoComplete="email"
                                required
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>

                        {/* Password */}
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <div className="input-group">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className={`form-control ${errors.password ? "is-invalid" : ""}`}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Your password"
                                    autoComplete="current-password"
                                    required
                                    minLength={6}
                                />
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    onClick={() => setShowPassword((s) => !s)}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                                </button>
                                {errors.password && <div className="invalid-feedback d-block">{errors.password}</div>}
                            </div>
                        </div>

                        {/* Extras */}
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="rememberMe" />
                                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                            </div>
                            <span className="small text-decoration-none text-primary">Forgot password?</span>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-dark w-100"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Signing in…" : "Sign in"}
                        </button>
                    </form>

                    <p className="text-center text-muted mt-3 mb-0" onClick={handlesignupchange}>
                        Don’t have an account? <span className="text-decoration-none text-primary">Create one</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
