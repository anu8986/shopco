import React from "react";
import { Link } from "react-router-dom";

export default function UnauthorizedPage() {
    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <div className="col-md-6 col-lg-4">
                <div className="card shadow p-4 text-center">
                    <h3 className="mb-3 text-danger">Unauthorized Access</h3>
                    <p className="text-muted">
                        You are not authorized to view this page. Please log in to continue.
                    </p>
                    <Link to="/" className="btn btn-dark w-100 mt-3">
                        Go to Login
                    </Link>
                </div>
            </div>
        </div>
    );
}
