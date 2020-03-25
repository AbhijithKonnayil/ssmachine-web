import React, { Component } from "react";
import "../css/footer.css";
import logo from "../img/logo.png";

class Footer extends Component {
  render() {
    return (
      <footer class="footer-area">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-sm-12 col-md-4 col-l-4">
              <div class="single-footer-widget footer_1">
                <a href="index.html">
                  {" "}
                  <img src={logo} alt="" />{" "}
                </a>
                <p>One stop solution for all your automobile service needs</p>
                <div class="social-links">
                  <ul>
                    <li>
                      <a href="">
                        {" "}
                        <i class="fa fa-facebook"></i>{" "}
                      </a>
                    </li>
                    <li>
                      <a href="">
                        {" "}
                        <i class="fa fa-twitter"></i>{" "}
                      </a>
                    </li>
                    <li>
                      <a href="">
                        {" "}
                        <i class="fa fa-linkedin"></i>{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-sm-12 col-md-4 col-l-4">
              <div class="single-footer-widget footer_icon">
                <h4>Corporate Office</h4>
                <div class="office-location">
                  <ul>
                    <li>
                      <strong>P.O. Box: 36796 Dubai - U.A.E.</strong>
                      <p>
                        Tel : +971 4 2858758
                        <br />
                        Fax : +971 4 2856608
                        <br />
                        Email : info@ssmachin.com
                        <br />
                        ssmech@eim.ae
                        <br />
                        sevenseasauto@ssmachin.com
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <div class="copyright_part_text text-center">
                <p class="footer-text m-0">
                  Copyright &copy;{new Date().getFullYear()} All rights reserved
                  | Designed by {" "}
                  <a
                    href="https://www.facebook.com/abhijith.konnayil"
                    target="_blank"
                  >
                    Abhijith K
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
