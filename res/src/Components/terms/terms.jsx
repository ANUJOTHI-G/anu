import React from 'react';
import "./terms.css";
const TermsAndConditionsPage = () => {
  return (
    <div className="terms-container">
      <header>
        <h1 className='h1'>Terms and Conditions</h1>
      </header>
      <section className="terms-content">
        <h2>1. Introduction</h2>
        <p>
          Welcome to  Hey pure!. These terms and conditions outline the rules and regulations for the use of our services.
        </p>

        <h2>2. Acceptance of Terms</h2>
        <p>
          By using our platform, you accept these terms and conditions in full. If you disagree with any part of these terms, you must not use our services.
        </p>

        <h2>3.Product Information and Pricing </h2>
        <p>
        We strive to provide accurate and up-to-date information about our products.
        </p>

        <h2>4.Ordering and Payments</h2>
        <p>
        Orders are subject to availability. We reserve the right to refuse or cancel any order for any reason.
        </p>

        <h2>5.Shipping and Delivery </h2>
        <p>
        Please refer to our Shipping and Delivery policy for detailed information on shipping costs, delivery times, and tracking.
        </p>

        <h2>6.Returns and Refunds </h2>
        <p>
        Please refer to our Returns and Refunds policy for information on returns, exchanges, and refund procedures.
        </p>

        <h2>7.Changes to Terms and Conditions</h2>
        <p>
        reserves the right to modify or replace these terms and conditions at any time. It is your responsibility to check this page periodically for changes.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditionsPage;