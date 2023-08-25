import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Pricing.css";
import Title from "../common/Title";
export default function Footers() {
  return (
    <Fragment>
      <Title title="Pricing" />
      <div className="pricing-table"></div>

      <div className="pricing-table">
        <div className="ptable-item featured-item">
          <div className="ptable-single">
            <div className="ptable-header">
              <div className="ptable-title">
                <h2>Premium Charge</h2>
              </div>
              <div className="ptable-price">
                <h2>
                  <small>₹</small>499<span>/ Estimate</span>
                </h2>
              </div>
            </div>
            <div className="ptable-body">
              <div className="ptable-description">
                <ul>
                  <li>Accurate Quantites</li>
                  <li>Updated SOR</li>
                  <li>Digitally Signed</li>
                  <li>Instant Download</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
