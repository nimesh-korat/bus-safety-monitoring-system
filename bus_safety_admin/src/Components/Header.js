import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Header() {
  const logout = async (e) => {
    try {
      await axios.get("http://localhost:8000/logout");
      window.location.reload(false);
    } catch (error) {
      console.log(" Error: ", error);
    }
  };
  return (
    <>
      <div className="dashboard-header">
        <nav className="navbar navbar-expand-lg bg-white fixed-top">
          <Link className="navbar-brand" to="/">
            Bus Safety
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto navbar-right-top">
              <li className="nav-item">
                <div id="custom-search" className="top-search-bar">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search.."
                  />
                </div>
              </li>

              {/* <li class="nav-item dropdown connection">
          <a
            class="nav-link"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fas fa-fw fa-th"></i>
          </a>
          <ul
            class="dropdown-menu dropdown-menu-right connection-dropdown"
          >
            <li class="connection-list">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <a href="#" class="connection-item"
                    ><img src="assets/images/github.png" alt="" />
                    <span>Github</span></a
                  >
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <a href="#" class="connection-item"
                    ><img src="assets/images/dribbble.png" alt="" />
                    <span>Dribbble</span></a
                  >
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <a href="#" class="connection-item"
                    ><img src="assets/images/dropbox.png" alt="" />
                    <span>Dropbox</span></a
                  >
                </div>
              </div>
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <a href="#" class="connection-item"
                    ><img src="assets/images/bitbucket.png" alt="" />
                    <span>Bitbucket</span></a
                  >
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <a href="#" class="connection-item"
                    ><img
                      src="assets/images/mail_chimp.png"
                      alt=""
                    /><span>Mail chimp</span></a
                  >
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <a href="#" class="connection-item"
                    ><img src="assets/images/slack.png" alt="" />
                    <span>Slack</span></a
                  >
                </div>
              </div>
            </li>
            <li>
              <div class="conntection-footer"><a href="#">More</a></div>
            </li>
          </ul>
        </li> */}
              <li className="nav-item dropdown nav-user">
                <a
                  className="nav-link nav-user-img"
                  href="/"
                  id="navbarDropdownMenuLink2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src="assets/images/avatar-1.jpg"
                    alt=''
                    className="user-avatar-md rounded-circle"
                  />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right nav-user-dropdown"
                  aria-labelledby="navbarDropdownMenuLink2"
                >
                  {/* <div class="nav-user-info">
              <h5 class="mb-0 text-white nav-user-name">John Abraham</h5>
              <span class="status"></span
              ><span class="ml-2">Available</span>
            </div> */}
                  {/* <a className="dropdown-item" href="#">
                    <i className="fas fa-user mr-2" />
                    Account
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-cog mr-2" />
                    Setting
                  </a> */}

                  <Link
                    onClick={() => logout()}
                    className="dropdown-item"
                  >
                    <i className="fas fa-power-off mr-2" />
                    Logout
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
