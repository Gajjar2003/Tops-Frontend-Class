import React, { useState } from "react";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    function handleLogin(e) {

        e.preventDefault();

        // Clear previous errors
        setEmailError("");
        setPasswordError("");

        let valid = true;

        // Check email
        if (email.trim() === "") {
            setEmailError("Email is required");
            valid = false;
        }

        // Check password
        if (password.trim() === "") {
            setPasswordError("Password is required");
            valid = false;
        }

        if (valid) {
            alert("Login successful!");
        }
    }

    return (
        <div className="container mt-5">

            <div className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>

                <h2 className="text-center mb-4">
                    Login
                </h2>

                <form onSubmit={handleLogin}>

                    {/* Email */}
                    <div className="mb-3">

                        <label className="form-label">
                            Email
                        </label>

                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                        />

                        {emailError && (
                            <p className="text-danger mt-1">
                                {emailError}
                            </p>
                        )}

                    </div>


                    {/* Password */}
                    <div className="mb-3">

                        <label className="form-label">
                            Password
                        </label>

                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                        />

                        {passwordError && (
                            <p className="text-danger mt-1">
                                {passwordError}
                            </p>
                        )}

                    </div>


                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                    >
                        Login
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Login;