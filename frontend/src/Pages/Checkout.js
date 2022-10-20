import React from "react";
import { Link } from "react-router-dom";

export default function Checkout() {
  return (
    <React.Fragment>
      <nav
        class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
        arial-label="Furni navigation bar"
      >
        <div class="container">
          <a class="navbar-brand" href="index.html">
            Amoire<span>.</span>
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarsFurni">
            <ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li class="nav-item ">
                <a class="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li>
                <a class="nav-link" href="shop.html">
                  Shop
                </a>
              </li>
              <li>
                <a class="nav-link" href="about.html">
                  About us
                </a>
              </li>
              <li>
                <a class="nav-link" href="services.html">
                  Services
                </a>
              </li>
              <li>
                <a class="nav-link" href="blog.html">
                  Blog
                </a>
              </li>
              <li>
                <a class="nav-link" href="contact.html">
                  Contact us
                </a>
              </li>
            </ul>

            <ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <a class="nav-link" href="#">
                  <img src="assests/images/user.svg" />
                </a>
              </li>
              <li>
                <a class="nav-link" href="cart.html">
                  <img src="assests/images/cart.svg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="hero">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-5">
              <div class="intro-excerpt">
                <h1>Checkout</h1>
              </div>
            </div>
            <div class="col-lg-7"></div>
          </div>
        </div>
      </div>

      <div class="untree_co-section">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-12"></div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-5 mb-md-0">
              <h2 class="h3 mb-3 text-black">Billing Details</h2>
              <div class="p-3 p-lg-5 border bg-white">
                <div class="form-group">
                  <label for="c_country" class="text-black">
                    Country <span class="text-danger">*</span>
                  </label>
                  <select id="c_country" class="form-control">
                    <option value="1">Select a country</option>
                    <option value="2">bangladesh</option>
                    <option value="3">Algeria</option>
                    <option value="4">Afghanistan</option>
                    <option value="5">Ghana</option>
                    <option value="6">Albania</option>
                    <option value="7">Bahrain</option>
                    <option value="8">Colombia</option>
                    <option value="9">Dominican Republic</option>
                  </select>
                </div>
                <div class="form-group row">
                  <div class="col-md-6">
                    <label for="c_fname" class="text-black">
                      First Name <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="c_fname"
                      name="c_fname"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="c_lname" class="text-black">
                      Last Name <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="c_lname"
                      name="c_lname"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-md-12">
                    <label for="c_companyname" class="text-black">
                      Company Name{" "}
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="c_companyname"
                      name="c_companyname"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-md-12">
                    <label for="c_address" class="text-black">
                      Address <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="c_address"
                      name="c_address"
                      placeholder="Street address"
                    />
                  </div>
                </div>

                <div class="form-group mt-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Apartment, suite, unit etc. (optional)"
                  />
                </div>

                <div class="form-group row">
                  <div class="col-md-6">
                    <label for="c_state_country" class="text-black">
                      State / Country <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="c_state_country"
                      name="c_state_country"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="c_postal_zip" class="text-black">
                      Posta / Zip <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="c_postal_zip"
                      name="c_postal_zip"
                    />
                  </div>
                </div>

                <div class="form-group row mb-5">
                  <div class="col-md-6">
                    <label for="c_email_address" class="text-black">
                      Email Address <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="c_email_address"
                      name="c_email_address"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="c_phone" class="text-black">
                      Phone <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="c_phone"
                      name="c_phone"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label for="c_order_notes" class="text-black">
                    Order Notes
                  </label>
                  <textarea
                    name="c_order_notes"
                    id="c_order_notes"
                    cols="30"
                    rows="5"
                    class="form-control"
                    placeholder="Write your notes here..."
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row mb-5">
                <div class="col-md-12">
                  <h2 class="h3 mb-3 text-black">Your Order</h2>
                  <div class="p-3 p-lg-5 border bg-white">
                    <table class="table site-block-order-table mb-5">
                      <thead>
                        <th>Product</th>
                        <th>Total</th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            Top Up T-Shirt <strong class="mx-2">x</strong> 1
                          </td>
                          <td>$250.00</td>
                        </tr>
                        <tr>
                          <td>
                            Polo Shirt <strong class="mx-2">x</strong> 1
                          </td>
                          <td>$100.00</td>
                        </tr>
                        <tr>
                          <td class="text-black font-weight-bold">
                            <strong>Cart Subtotal</strong>
                          </td>
                          <td class="text-black">$350.00</td>
                        </tr>
                        <tr>
                          <td class="text-black font-weight-bold">
                            <strong>Order Total</strong>
                          </td>
                          <td class="text-black font-weight-bold">
                            <strong>$350.00</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div class="border p-3 mb-3">
                      <h3 class="h6 mb-0">
                        <a
                          class="d-block"
                          href="#collapsebank"
                          role="button"
                          aria-controls="collapsebank"
                        >
                          Cash On Delivery
                        </a>
                      </h3>
                    </div>
                  </div>

                  <div class="row mb-5">
                    <div class="col-md-12"></div>

                    <div class="form-group">
                      <Link to="/thankyou">
                        <button class="btn btn-black btn-lg py-3 btn-block">
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
      <footer class="footer-section">
        <div class="container relative">
          <div class="sofa-img">
            <img src="assests/images/sofa.png" alt="Image" class="img-fluid" />
          </div>

          <div class="row g-5 mb-5">
            <div class="col-lg-4">
              <div class="mb-4 footer-logo-wrap">
                <a href="#" class="footer-logo">
                  Amoire<span>.</span>
                </a>
              </div>
              <p class="mb-4">
                A Company that wants to provide the best for its customer. We
                belive in that it is the customer how are the essance of a
                bussiness and the key to success.
              </p>

              <ul class="list-unstyled custom-social">
                <li>
                  <a href="#">
                    <span class="fa fa-brands fa-facebook-f"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="fa fa-brands fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="fa fa-brands fa-instagram"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="fa fa-brands fa-linkedin"></span>
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-8">
              <div class="row links-wrap">
                <div class="col-6 col-sm-6 col-md-3">
                  <ul class="list-unstyled">
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

                <div class="col-6 col-sm-6 col-md-3">
                  <ul class="list-unstyled">
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

                <div class="col-6 col-sm-6 col-md-3">
                  <ul class="list-unstyled">
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

          <div class="border-top copyright">
            <div class="row pt-4">
              <div class="col-lg-6">
                <p class="mb-2 text-center text-lg-start">
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script>.All
                  Rights Reserved.&mdash; Designed with love by Amoire.
                </p>
              </div>

              <div class="col-lg-6 text-center text-lg-end">
                <ul class="list-unstyled d-inline-flex ms-auto">
                  <li class="me-4">
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