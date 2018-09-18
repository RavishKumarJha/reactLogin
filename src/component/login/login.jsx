import React, { Component } from 'react';
import './css/login.css';

class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="col-sm-8 col-sm-offset-2">
                    <div>
                        <div className="col-md-6 col-md-offset-3">
                            <h2>Login</h2>
                            <form name="form">
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" className="form-control" name="username" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" name="password" />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary">Login</button>
                                    <a className="btn btn-link" href="/register">Register</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Login;
