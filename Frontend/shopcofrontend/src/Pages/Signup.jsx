import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function Signup() {
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = () => {
        const next = {};
        if (!name) next.name = "Name is required";
        if (!email) next.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email";

        if (!contact) next.contact = "Contact number is required";
        else if (!/^\d{10}$/.test(contact)) next.contact = "Enter a valid 10-digit number";

        if (!password) next.password = "Password is required";
        else if (password.length < 6) next.password = "Use at least 6 characters";

        if (!confirmPassword) next.confirmPassword = "Confirm your password";
        else if (confirmPassword !== password) next.confirmPassword = "Passwords do not match";

        setErrors(next);
        return Object.keys(next).length === 0;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setIsSubmitting(true);
        try {
            // TODO: replace with real API call
            await new Promise((r) => setTimeout(r, 800));
            alert(`Account created for ${name}`);
        } catch (err) {
            console.error(err);
            alert("Signup failed. Try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handlesignupchange = () => {
        navigate('/')
    }

    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <div className="col-md-6 col-lg-5">
                <div className="card shadow p-4">
                    <h2 className="text-center mb-3">Create Account</h2>
                    <p className="text-center text-muted">Please fill in the details to sign up</p>

                    <form onSubmit={onSubmit} noValidate>
                        {/* Name */}
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your full name"
                                required
                            />
                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        </div>

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

                        {/* Contact */}
                        <div className="mb-3">
                            <label htmlFor="contact" className="form-label">Contact Number</label>
                            <input
                                type="tel"
                                className={`form-control ${errors.contact ? "is-invalid" : ""}`}
                                id="contact"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                                placeholder="1234567890"
                                required
                            />
                            {errors.contact && <div className="invalid-feedback">{errors.contact}</div>}
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
                                    placeholder="Create password"
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

                        {/* Confirm Password */}
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                            <div className="input-group">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Re-enter password"
                                    required
                                />
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    onClick={() => setShowConfirmPassword((s) => !s)}
                                    aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                                >
                                    {showConfirmPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                                </button>
                                {errors.confirmPassword && <div className="invalid-feedback d-block">{errors.confirmPassword}</div>}
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary w-100"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Creating account…" : "Sign Up"}
                        </button>
                    </form>

                    <p className="text-center text-muted mt-3 mb-0" onClick={handlesignupchange}>
                        Already have an account? <span className="text-decoration-none text-primary">Sign in</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
