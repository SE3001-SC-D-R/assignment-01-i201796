import React from "react";

export default function Thankyou() {
  return (
    <React.Fragment>
      <nav data-testid = "nv-id2"
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
                <h1 data-testid = "th-h1">Order Confirmed!</h1>
              </div>
            </div>
            <div class="col-lg-7"></div>
          </div>
        </div>
      </div>

      <div class="untree_co-section">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center pt-5">
              <span class="display-3 thankyou-icon text-primary">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-cart-check mb-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.354 5.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708 0z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                  />
                </svg>
              </span>
              <h2 class="display-3 text-black">Thank you!</h2>
              <p data-testid = "conformation" class="lead mb-5">You order was successfuly completed.</p>
              <p>
                <a href="shop.html" class="btn btn-sm btn-outline-black">
                  Back to shop
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer class="footer-section">
        <div class="container relative">
          <div class="sofa-img">
            <img src="assests/images/sofa.png" alt="Image" class="img-fluid" />
          </div>

          <div class="row">
            <div class="col-lg-8">
              <div class="subscription-form">
                <h3 class="d-flex align-items-center">
                  <span class="me-1">
                    <img
                      src="assests/images/envelope-outline.svg"
                      alt="Image"
                      class="img-fluid"
                    />
                  </span>
                  <span>Subscribe to Newsletter</span>
                </h3>

                <form data-testid="form" action="#" class="row g-3">
                  <div class="col-auto">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div class="col-auto">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div class="col-auto">
                    <button class="btn btn-primary">
                      <span class="fa fa-paper-plane"></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="row g-5 mb-5">
            <div class="col-lg-4">
              <div class="mb-4 footer-logo-wrap">
                <a href="#" class="footer-logo">
                  Amoire<span>.</span>
                </a>
              </div>
              <p class="mb-4">
              A Company that wants to provide the best 
                for its customer. We belive in that it is  
                the customer how are the essance of a bussiness 
                and the key to success. 
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

                <div class="col-6 col-sm-6 col-md-3">
                  <ul class="list-unstyled">
                    <li>
                      <a href="#">Nordic Chair</a>
                    </li>
                    <li>
                      <a href="#">Kruzo Aero</a>
                    </li>
                    <li>
                      <a href="#">Ergonomic Chair</a>
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
                  <script>document.write(new Date().getFullYear());</script>.
                  All Rights Reserved. &mdash; Designed with love by Amoire.
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
