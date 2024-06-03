import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import AlertData from "./AlertData";

function Home() {
  const [count, setCount] = useState(0);
  useEffect(() => {

    window.scrollTo(0, 0, { behavior: 'smooth' });
    fetch("http://localhost:8000/getCounts")
      .then((response) => response.json())
      .then((data) => {
        setCount(data);
      });
  }, []);
  return (
    <>
      <div className="dashboard-main-wrapper">
        <Header />
        <Sidebar />
        <div className="dashboard-wrapper">
          <div className="dashboard-ecommerce">
            <div className="container-fluid dashboard-content">
              <div className="ecommerce-widget">
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <div className="card border-3 border-top border-top-primary">
                      <div className="card-body">
                        <h2 className="text-muted">Device</h2>
                        <h2>{count.totalDevices}</h2>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="icon">
                            <i className="fa-solid fa-house-laptop" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <div className="card border-3 border-top border-top-primary">
                      <div className="card-body">
                        <h2 className="text-muted">Feedback</h2>
                        <h2>{count.totalFeedback}</h2>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="icon">
                            <i className="fa-regular fa-thumbs-up" />
                            &nbsp;
                            <i className="fa-regular fa-thumbs-down" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <div className="card border-3 border-top border-top-primary">
                      <div className="card-body">
                        <h2 className="text-muted">Warnings</h2>
                        <h2>{count.totalAlerts}</h2>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="icon">
                            <i className="fa-solid fa-triangle-exclamation" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <div className="card border-3 border-top border-top-primary">
                      <div className="card-body">
                        <h2 className="text-muted">Complaints</h2>
                        <h2>{count.totalComplaints}</h2>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="icon">
                            <i className="fa-solid fa-comments" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <AlertData />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
