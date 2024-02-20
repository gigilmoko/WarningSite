import React, { useEffect } from 'react';
import '../../assets/css/owl.carousel.min.css'
import '../../assets/css/bootstrap2.min.css'
import '../../assets/css/dashboardstyle.css'
import LogoImage from '../../assets/systempics/logo3.png'

const Dashboard = () => {
 
  return (
    <div class = "custom-container">
    <meta charSet="utf-8" />
   
    {/* Favicon */}
    <link href="img/favicon.ico" rel="icon" />
    {/* Google Web Fonts */}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Roboto:wght@500;700&display=swap"
      rel="stylesheet"
    />
    {/* Icon Font Stylesheet */}
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
      rel="stylesheet"
    />
    {/* Libraries Stylesheet */}
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
    <link
      href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css"
      rel="stylesheet"
    />
    {/* Customized Bootstrap Stylesheet */}
    {/* <link href="css/bootstrap.min.css" rel="stylesheet" /> */}
    {/* Template Stylesheet */}
    {/* <link href="css/style.css" rel="stylesheet" /> */}
    <div className="container-fluid position-relative d-flex p-0">
      {/* Spinner Start */}
     
      {/* Spinner End */}
      {/* Sidebar Start */}
      <div className="sidebar pe-4 pb-3">
      <nav className="navbar bg-secondary navbar-dark" style={{ height: '96vh' }}>
        
                  <img
                    src={LogoImage}
                    alt="logo"
                    className="brand-image"
                    style={{ width: '80px', height: '80px', marginLeft: '70px', marginTop: '-40px' }} // Adjust the width and height as needed
                  />
          <div className="navbar-nav w-100" style = {{marginTop: '-100px'}}>
                  
            <a href="index.html" className="nav-item nav-link active">
              <i className="fa fa-tachometer-alt me-2" />
              Dashboard
            </a>
           
            <a href="widget.html" className="nav-item nav-link">
              <i className="fa fa-th me-2" />
              Widgets
            </a>
            <a href="form.html" className="nav-item nav-link">
              <i className="fa fa-keyboard me-2" />
              Forms
            </a>
            <a href="table.html" className="nav-item nav-link">
              <i className="fa fa-table me-2" />
              Tables
            </a>
            <a href="chart.html" className="nav-item nav-link">
              <i className="fa fa-chart-bar me-2" />
              Charts
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i className="far fa-file-alt me-2" />
                Pages
              </a>
              <div className="dropdown-menu bg-transparent border-0">
                <a href="signin.html" className="dropdown-item">
                  Sign In
                </a>
                <a href="signup.html" className="dropdown-item">
                  Sign Up
                </a>
                <a href="404.html" className="dropdown-item">
                  404 Error
                </a>
                <a href="blank.html" className="dropdown-item">
                  Blank Page
                </a>
               
                
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* Sidebar End */}
      {/* Content Start */}
      <div className="content" >
        {/* Navbar Start */}
        <nav className="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0 ">
          <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
            <h2 className="text-primary mb-0">
              <i className="fa fa-user-edit" />
            </h2>
          </a>
          
          
          <div className="navbar-nav align-items-center ms-auto" >
            <div className="nav-item dropdown">
            
              <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                <a href="#" className="dropdown-item">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle"
                      src="img/user.jpg"
                      alt=""
                      style={{ width: 40, height: 40 }}
                    />
                    <div className="ms-2">
                      <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                      <small>15 minutes ago</small>
                    </div>
                  </div>
                </a>
                <hr className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle"
                      src="img/user.jpg"
                      alt=""
                      style={{ width: 40, height: 40 }}
                    />
                    <div className="ms-2">
                      <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                      <small>15 minutes ago</small>
                    </div>
                  </div>
                </a>
                <hr className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle"
                      src="img/user.jpg"
                      alt=""
                      style={{ width: 40, height: 40 }}
                    />
                    <div className="ms-2">
                      <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                      <small>15 minutes ago</small>
                    </div>
                  </div>
                </a>
                <hr className="dropdown-divider" />
                <a href="#" className="dropdown-item text-center">
                  See all message
                </a>
              </div>
            </div>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i className="fa fa-bell me-lg-2" />
                <span className="d-none d-lg-inline-flex">Notificatin</span>
              </a>
              <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                <a href="#" className="dropdown-item">
                  <h6 className="fw-normal mb-0">Profile updated</h6>
                  <small>15 minutes ago</small>
                </a>
                <hr className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <h6 className="fw-normal mb-0">New user added</h6>
                  <small>15 minutes ago</small>
                </a>
                <hr className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <h6 className="fw-normal mb-0">Password changed</h6>
                  <small>15 minutes ago</small>
                </a>
                <hr className="dropdown-divider" />
                <a href="#" className="dropdown-item text-center">
                  See all notifications
                </a>
              </div>
            </div>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <img
                  className="rounded-circle me-lg-2"
                  src="img/user.jpg"
                  alt=""
                  style={{ width: 40, height: 40 }}
                />
                <span className="d-none d-lg-inline-flex">John Doe</span>
              </a>
              <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                <a href="#" className="dropdown-item">
                  My Profile
                </a>
                <a href="#" className="dropdown-item">
                  Settings
                </a>
                <a href="#" className="dropdown-item">
                  Log Out
                </a>
              </div>
            </div>
          </div>
        </nav>
        {/* Navbar End */}
        {/* Sale & Revenue Start */}
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            <div className="col-sm-6 col-xl-3">
              <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                <i className="fa fa-chart-line fa-3x text-primary" />
                <div className="ms-3">
                  <p className="mb-2">Today Sale</p>
                  <h6 className="mb-0">$1234</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                <i className="fa fa-chart-bar fa-3x text-primary" />
                <div className="ms-3">
                  <p className="mb-2">Total Sale</p>
                  <h6 className="mb-0">$1234</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                <i className="fa fa-chart-area fa-3x text-primary" />
                <div className="ms-3">
                  <p className="mb-2">Today Revenue</p>
                  <h6 className="mb-0">$1234</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                <i className="fa fa-chart-pie fa-3x text-primary" />
                <div className="ms-3">
                  <p className="mb-2">Total Revenue</p>
                  <h6 className="mb-0">$1234</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sale & Revenue End */}
        {/* Sales Chart Start */}
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            <div className="col-sm-12 col-xl-6">
              <div className="bg-secondary text-center rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h6 className="mb-0">Worldwide Sales</h6>
                  <a href="">Show All</a>
                </div>
                <canvas id="worldwide-sales" />
              </div>
            </div>
            <div className="col-sm-12 col-xl-6">
              <div className="bg-secondary text-center rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h6 className="mb-0">Salse &amp; Revenue</h6>
                  <a href="">Show All</a>
                </div>
                <canvas id="salse-revenue" />
              </div>
            </div>
          </div>
        </div>
        {/* Sales Chart End */}
        {/* Recent Sales Start */}
        <div className="container-fluid pt-4 px-4">
          <div className="bg-secondary text-center rounded p-4">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h6 className="mb-0">Recent Salse</h6>
              <a href="">Show All</a>
            </div>
            <div className="table-responsive">
              <table className="table text-start align-middle table-bordered table-hover mb-0">
                <thead>
                  <tr className="text-white">
                    <th scope="col">
                      <input className="form-check-input" type="checkbox" />
                    </th>
                    <th scope="col">Date</th>
                    <th scope="col">Invoice</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input className="form-check-input" type="checkbox" />
                    </td>
                    <td>01 Jan 2045</td>
                    <td>INV-0123</td>
                    <td>Jhon Doe</td>
                    <td>$123</td>
                    <td>Paid</td>
                    <td>
                      <a className="btn btn-sm btn-primary" href="">
                        Detail
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input className="form-check-input" type="checkbox" />
                    </td>
                    <td>01 Jan 2045</td>
                    <td>INV-0123</td>
                    <td>Jhon Doe</td>
                    <td>$123</td>
                    <td>Paid</td>
                    <td>
                      <a className="btn btn-sm btn-primary" href="">
                        Detail
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input className="form-check-input" type="checkbox" />
                    </td>
                    <td>01 Jan 2045</td>
                    <td>INV-0123</td>
                    <td>Jhon Doe</td>
                    <td>$123</td>
                    <td>Paid</td>
                    <td>
                      <a className="btn btn-sm btn-primary" href="">
                        Detail
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input className="form-check-input" type="checkbox" />
                    </td>
                    <td>01 Jan 2045</td>
                    <td>INV-0123</td>
                    <td>Jhon Doe</td>
                    <td>$123</td>
                    <td>Paid</td>
                    <td>
                      <a className="btn btn-sm btn-primary" href="">
                        Detail
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input className="form-check-input" type="checkbox" />
                    </td>
                    <td>01 Jan 2045</td>
                    <td>INV-0123</td>
                    <td>Jhon Doe</td>
                    <td>$123</td>
                    <td>Paid</td>
                    <td>
                      <a className="btn btn-sm btn-primary" href="">
                        Detail
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Recent Sales End */}
        {/* Widgets Start */}
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            <div className="col-sm-12 col-md-6 col-xl-4">
              <div className="h-100 bg-secondary rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h6 className="mb-0">Messages</h6>
                  <a href="">Show All</a>
                </div>
                <div className="d-flex align-items-center border-bottom py-3">
                  <img
                    className="rounded-circle flex-shrink-0"
                    src="img/user.jpg"
                    alt=""
                    style={{ width: 40, height: 40 }}
                  />
                  <div className="w-100 ms-3">
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-0">Jhon Doe</h6>
                      <small>15 minutes ago</small>
                    </div>
                    <span>Short message goes here...</span>
                  </div>
                </div>
                <div className="d-flex align-items-center border-bottom py-3">
                  <img
                    className="rounded-circle flex-shrink-0"
                    src="img/user.jpg"
                    alt=""
                    style={{ width: 40, height: 40 }}
                  />
                  <div className="w-100 ms-3">
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-0">Jhon Doe</h6>
                      <small>15 minutes ago</small>
                    </div>
                    <span>Short message goes here...</span>
                  </div>
                </div>
                <div className="d-flex align-items-center border-bottom py-3">
                  <img
                    className="rounded-circle flex-shrink-0"
                    src="img/user.jpg"
                    alt=""
                    style={{ width: 40, height: 40 }}
                  />
                  <div className="w-100 ms-3">
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-0">Jhon Doe</h6>
                      <small>15 minutes ago</small>
                    </div>
                    <span>Short message goes here...</span>
                  </div>
                </div>
                <div className="d-flex align-items-center pt-3">
                  <img
                    className="rounded-circle flex-shrink-0"
                    src="img/user.jpg"
                    alt=""
                    style={{ width: 40, height: 40 }}
                  />
                  <div className="w-100 ms-3">
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-0">Jhon Doe</h6>
                      <small>15 minutes ago</small>
                    </div>
                    <span>Short message goes here...</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-4">
              <div className="h-100 bg-secondary rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h6 className="mb-0">Calender</h6>
                  <a href="">Show All</a>
                </div>
                <div id="calender" />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-4">
              <div className="h-100 bg-secondary rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h6 className="mb-0">To Do List</h6>
                  <a href="">Show All</a>
                </div>
                <div className="d-flex mb-2">
                  <input
                    className="form-control bg-dark border-0"
                    type="text"
                    placeholder="Enter task"
                  />
                  <button type="button" className="btn btn-primary ms-2">
                    Add
                  </button>
                </div>
                <div className="d-flex align-items-center border-bottom py-2">
                  <input className="form-check-input m-0" type="checkbox" />
                  <div className="w-100 ms-3">
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      <span>Short task goes here...</span>
                      <button className="btn btn-sm">
                        <i className="fa fa-times" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center border-bottom py-2">
                  <input className="form-check-input m-0" type="checkbox" />
                  <div className="w-100 ms-3">
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      <span>Short task goes here...</span>
                      <button className="btn btn-sm">
                        <i className="fa fa-times" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center border-bottom py-2">
                  <input
                    className="form-check-input m-0"
                    type="checkbox"
                    defaultChecked=""
                  />
                  <div className="w-100 ms-3">
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      <span>
                        <del>Short task goes here...</del>
                      </span>
                      <button className="btn btn-sm text-primary">
                        <i className="fa fa-times" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center border-bottom py-2">
                  <input className="form-check-input m-0" type="checkbox" />
                  <div className="w-100 ms-3">
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      <span>Short task goes here...</span>
                      <button className="btn btn-sm">
                        <i className="fa fa-times" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center pt-2">
                  <input className="form-check-input m-0" type="checkbox" />
                  <div className="w-100 ms-3">
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      <span>Short task goes here...</span>
                      <button className="btn btn-sm">
                        <i className="fa fa-times" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <br/>
    
      </div>

      
    </div>

  </div>
  )
}

export default Dashboard