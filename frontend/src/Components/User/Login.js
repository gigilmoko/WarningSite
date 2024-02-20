import React, { Fragment, useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

// import Loader from '../Layout/Loader'
// import Metadata from '../Layout/Metadata'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {authenticate} from '../../utils/helpers'
import { getUser } from '../../utils/helpers'
import GoogleLogin from "react-google-login";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    let location = useLocation();
    const redirect = location.search ? new URLSearchParams(location.search).get('redirect') : ''
    // const notify = (error) => toast.error(error, {
    //     position: toast.POSITION.BOTTOM_RIGHT
    // });

    const login = async (email, password) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/login`, { email, password }, config)
            if (data.user && data.user.role === 'admin') {
                // Redirect to admin location
                authenticate(data, () => navigate("/admin/dashboard"));
            } else {
                // Redirect to regular user location
                authenticate(data, () => navigate("/"));
            }
            

        } catch (error) {
            toast.error("invalid user or password", {
                // position: toast.POSITION.BOTTOM_RIGHT
            })
        }
    }
    const submitHandler = (e) => {
        e.preventDefault();
        login(email, password)
    }

    useEffect(() => {
        if (getUser() && redirect === 'shipping' ) {
             navigate(`/${redirect}`)
        }
    }, [])

    // const responseGoogle = async (response) => {
    //     try {
    //         console.log("Google response:", response);
    //         const { data } = await axios.post(
    //           `${process.env.REACT_APP_API}/api/v1/google_login`,
    //           {
    //             tokenId: response.tokenId,
    //           }
    //         );
    //       console.log("Received from server:", data.user);
    
    //       sessionStorage.setItem("user", JSON.stringify(data.user));
    //       console.log(
    //         "Stored in session storage:",
    //         JSON.parse(sessionStorage.getItem("user"))
    //       );
    
    //       authenticate(data, () => {
    //         toast.success("Logged in successfully", {
    //           position: "top-right",
    //         });
    //         navigate("/");
    //         const user = JSON.parse(sessionStorage.getItem("user"));
    //         console.log("Retrieved from session storage:", user);
    //         console.log(user.name, user.email, user.avatar);
    //       });
    //     } catch (err) {
    //         console.error("Error:", err);
    //         if (err.response) {
    //           console.error("Response Data:", err.response.data);
    //         }
    //         toast.error("Google Login Failed", {
    //           position: "top-right",
    //         });
    //       }
    //   };

    return (
        <Fragment>
           
                <Fragment>
                    {/* <Metadata title={'Login'} /> */}

                    <section class="login_part section_padding ">
        <div class="container">
            <div class="row align-items-center">
           
                               
                            
                <div class="col-lg-6 col-md-6">
                    <div class="login_part_text text-center">
                        <div class="login_part_text_iner">
                            <h2>New to our Shop?</h2>
                            <p>There are advances being made in science and technology
                                everyday, and a good example of this is the</p>
                                <Link to="/register"><a href="#" class="btn_3">Create an Account</a></Link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="login_part_form">
                        <div class="login_part_form_iner">
                            <h3>Welcome Back ! <br/>
                                Please Sign in now</h3>
                            <form class="row contact_form" action="#" method="post" novalidate="novalidate"  onSubmit={submitHandler}>
                                
                                <div class="col-md-12 form-group p_star">
                                    <input type="email"
                                        id="email_field"
                                        className="form-control"
                                        value={email}
                                        placeholder = "Username"
                                        onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div class="col-md-12 form-group p_star">
                                    <input type="password"
                                        id="password_field"
                                        className="form-control"
                                        placeholder = "Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                                <div class="col-md-12 form-group">
                                    
                                    <button 
                                        id="login_button"
                                        type="submit" 
                                        className ="btn_3">
                                        log in
                                    </button>
                                    {/* <GoogleLogin
                                        clientId="920213136950-8j3ng8qursis2pib3qhav9q2larqfu89.apps.googleusercontent.com"
                                        onSuccess={responseGoogle}
                                        cookiePolicy={"single_host_origin"}
                                        icon="fa-google pr-2"
                                        render={(renderProps) => (
                                            <button
                                            onClick={renderProps.onClick}
                                            disabled={renderProps.disabled}
                                            className="google-login-button"
                                            >
                                                <a href="#" class="google btn">
                                                    <i class="fa fa-google fa-fw"></i> Login with Google+
                                                </a>
                                            </button>
                                        )}
                                    /> */}

                                    <Link to="/password/forgot"><a class="lost_pass" href="#">forget password?</a></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


                </Fragment>
            )
        </Fragment>
    )
}


export default Login