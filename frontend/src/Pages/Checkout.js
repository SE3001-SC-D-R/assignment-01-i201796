import React from "react";
import { BrowserRouter, BrowserRouter as Router, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

export default function Checkout() {
  const [listOfCart, setListOfCart] = useState([]);
  let total = 0;

  useEffect(() => {
    Axios.get("http://localhost:3001/getCartItems").then((response) => {
      setListOfCart(response.data);
      setOrderProducts(response.data);
    });
  }, []);

  const [totalAmount, setTotalAmount] = useState("");
  const [country, setCountry] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [orderNote, setOrderNote] = useState("");
  const [orderProducts, setOrderProducts] = useState([]);
  const [payment, setPayment] = useState("");

  const calTotal = () => {
    let temp = 0;
    for (let index = 0; index < listOfCart.length; index++) {
      temp += listOfCart[index].price;
    }
    
    return temp;
  };

  total = calTotal();
  const amount = calTotal();
  useEffect(() => {setTotalAmount(amount)})

  const createBillInfo = () => {
    Axios.post("http://localhost:3001/addBillingInfo", {
      country,
      firstname,
      lastname,
      companyname,
      address,
      state,
      zip,
      email,
      phone,
      orderNote,
      orderProducts,
      payment,
      totalAmount,
    }).then((response) => {
      alert("Bill Info Added");
    });
  };
  return (
    <React.Fragment>
      <nav data-testid = "Nav"
        className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
        arial-label="Furni navigation bar"
      >
        <div data-testid = "AmoireLable" className="container">
          <a className="navbar-brand" href="index.html">
            Amoire<span>.</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item ">
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link" href="shop.html">
                  Shop
                </a>
              </li>
              <li>
                <a className="nav-link" href="about.html">
                  About us
                </a>
              </li>
              <li>
                <a className="nav-link" href="services.html">
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link" href="blog.html">
                  Blog
                </a>
              </li>
              <li>
                <a className="nav-link" href="contact.html">
                  Contact us
                </a>
              </li>
            </ul>

            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <a className="nav-link" href="#">
                  <img src="assests/images/user.svg" />
                </a>
              </li>
              <li>
                <a className="nav-link" href="cart.html">
                  <img src="assests/images/cart.svg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1 data-testid = "Checkout-h1">Checkout</h1>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>
      <div className="untree_co-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12"></div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-5 mb-md-0">
              <h2 data-testid = "Bill" className="h3 mb-3 text-black">Billing Details</h2>
              <div className="p-3 p-lg-5 border bg-white">
                <div className="form-group">
                  <label for="c_country" className="text-black">
                    Country <span className="text-danger">*</span>
                  </label>
                  <select
                    id="c_country"
                    className="form-control"
                    onChange={(event) => {
                      setCountry(event.target.value);
                    }}
                  >
                    <option value="1">Select a country</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Algeria">Algeria</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Albania">Albania</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Dominican Republic">
                      Dominican Republic
                    </option>
                  </select>
                </div>
                <div className="form-group row">
                  <div className="col-md-6">
                    <label for="c_fname" className="text-black">
                      First Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="c_fname"
                      name="c_fname"
                      onChange={(event) => {
                        setFirstname(event.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="c_lname" className="text-black">
                      Last Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="c_lname"
                      name="c_lname"
                      onChange={(event) => {
                        setLastname(event.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-12">
                    <label for="c_companyname" className="text-black">
                      Company Name{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="c_companyname"
                      name="c_companyname"
                      onChange={(event) => {
                        setCompanyname(event.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-12">
                    <label for="c_address" className="text-black">
                      Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="c_address"
                      name="c_address"
                      placeholder="Street address"
                      onChange={(event) => {
                        setAddress(event.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apartment, suite, unit etc. (optional)"
                  />
                </div>

                <div className="form-group row">
                  <div className="col-md-6">
                    <label for="c_state_country" className="text-black">
                      State / Country <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="c_state_country"
                      name="c_state_country"
                      onChange={(event) => {
                        setState(event.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="c_postal_zip" className="text-black">
                      Posta / Zip <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="c_postal_zip"
                      name="c_postal_zip"
                      onChange={(event) => {
                        setZip(event.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="form-group row mb-5">
                  <div className="col-md-6">
                    <label for="c_email_address" className="text-black">
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="c_email_address"
                      name="c_email_address"
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="c_phone" className="text-black">
                      Phone <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="c_phone"
                      name="c_phone"
                      placeholder="Phone Number"
                      onChange={(event) => {
                        setPhone(event.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label for="c_order_notes" className="text-black">
                    Order Notes
                  </label>
                  <textarea
                    name="c_order_notes"
                    id="c_order_notes"
                    cols="30"
                    rows="5"
                    className="form-control"
                    placeholder="Write your notes here..."
                    onChange={(event) => {
                      setOrderNote(event.target.value);
                    }}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row mb-5">
                <div className="col-md-12">
                  <h2 className="h3 mb-3 text-black">Your Order</h2>
                  <div className="p-3 p-lg-5 border bg-white">
                    <table className="table site-block-order-table mb-5">
                      <thead>
                        <th>Product</th>
                        <th>Total</th>
                      </thead>
                      <tbody>
                        {listOfCart.map((cart) => {
                          return (
                            <tr>
                              <td>
                                {cart.product} <strong className="mx-2">x</strong>{" "}
                                {cart.quantity}
                              </td>
                              <td>${cart.price}</td>
                            </tr>
                          );
                        })}

                        <tr>
                          <td className="text-black font-weight-bold">
                            <strong>Cart Subtotal</strong>
                          </td>
                          <td
                            onChange={(event) => {
                              setTotalAmount(event.target.value);
                            }}
                            className="text-black"
                          >
                            ${total}
                          </td>
                        </tr>
                        <tr>
                          <td className="text-black font-weight-bold">
                            <strong>Order Total</strong>
                          </td>
                          <td className="text-black font-weight-bold">
                            <strong>${total}</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="form-group">
                      <label for="c_country" className="text-black">
                        Payment Option <span className="text-danger">*</span>
                      </label>
                      <select
                        id="Payment"
                        className="form-control"
                        onChange={(event) => setPayment(event.target.value)}
                      >
                        <option value="1">Select a Payment Option</option>
                        <option value="Cash On Delivery">
                          Cash On Delivery
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="row mb-5">
                    <div className="col-md-12"></div>
                    <div className="form-group">
                      <br></br>
                      <div data-testid = "Button">
                      <Link data-testid = "Thank-you-Page-Link" to="/thankyou">
                        <button data-testid = "PO-bt"
                          className="btn btn-black btn-lg py-3 btn-block"
                          onClick={() => {
                            createBillInfo();

                          }}
                        >
                          Place Order
                        </button>
                      </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer-section">
        <div className="container relative">
          <div className="sofa-img">
            <img data-testid = "img1" src="assests/images/sofa.png" alt="Image" className="img-fluid" />
          </div>

          <div className="row g-5 mb-5">
            <div className="col-lg-4">
              <div className="mb-4 footer-logo-wrap">
                <a href="#" className="footer-logo">
                  Amoire<span>.</span>
                </a>
              </div>
              <p className="mb-4">
                A Company that wants to provide the best for its customer. We
                belive in that it is the customer how are the essance of a
                bussiness and the key to success.
              </p>

              <ul className="list-unstyled custom-social">
                <li>
                  <a href="#">
                    <span className="fa fa-brands fa-facebook-f"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-brands fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-brands fa-instagram"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-brands fa-linkedin"></span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-8">
              <div className="row links-wrap">
                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Support</a>
                    </li>
                    <li>
                      <a href="#">Knowledge base</a>
                    </li>
                    <li>
                      <a href="#">Live chat</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Jobs</a>
                    </li>
                    <li>
                      <a href="#">Our team</a>
                    </li>
                    <li>
                      <a href="#">Leadership</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border-top copyright">
            <div className="row pt-4">
              <div className="col-lg-6">
                <p className="mb-2 text-center text-lg-start">
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script>.All
                  Rights Reserved.&mdash; Designed with love by Amoire.
                </p>
              </div>

              <div className="col-lg-6 text-center text-lg-end">
                <ul className="list-unstyled d-inline-flex ms-auto">
                  <li className="me-4">
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/tiny-slider.js"></script>
      <script src="js/custom.js"></script>
    </React.Fragment>
  );
}
