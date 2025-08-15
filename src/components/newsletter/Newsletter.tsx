"use client"

import React, { useEffect } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    ml_webform_success_29445118?: () => void;
    ml_jQuery?: any;
    jQuery?: any;
  }
}

export default function Newsletter() {
  useEffect(() => {
    // Define the success callback
    window.ml_webform_success_29445118 = function() {
      const $ = window.ml_jQuery || window.jQuery;
      if ($) {
        $('.ml-subscribe-form-29445118 .row-success').show();
        $('.ml-subscribe-form-29445118 .row-form').hide();
      }
    };

    // Fetch MailerLite tracking
    if (typeof fetch !== 'undefined') {
      fetch("https://assets.mailerlite.com/jsonp/1716633/forms/162385634325956326/takel");
    }
  }, []);

  return (
    <>
      {/* MailerLite Form */}
      <div className="newsletter-embed max-w-md mx-auto">
        <div 
          id="mlb2-29445118" 
          className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-29445118"
        >
          <div className="ml-form-align-center">
            <div className="ml-form-embedWrapper embedForm">
              <div className="ml-form-embedBody ml-form-embedBodyHorizontal row-form">
                <form 
                  className="ml-block-form" 
                  action="https://assets.mailerlite.com/jsonp/1716633/forms/162385634325956326/subscribe" 
                  data-code="" 
                  method="post" 
                  target="_blank"
                >
                  <div className="ml-form-formContent horozintalForm">
                    <div className="ml-form-horizontalRow">
                      <div className="ml-input-horizontal">
                        <div style={{ width: '100%' }} className="horizontal-fields">
                          <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                            <input 
                              type="email" 
                              className="form-control" 
                              data-inputmask="" 
                              name="fields[email]" 
                              placeholder="Enter your email" 
                              autoComplete="email"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="ml-button-horizontal primary">
                        <button type="submit" className="primary">Subscribe</button>
                        <button disabled style={{ display: 'none' }} type="button" className="loading">
                          <div className="ml-form-embedSubmitLoad"></div>
                          <span className="sr-only">Loading...</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <input type="hidden" name="ml-submit" value="1" />
                  <input type="hidden" name="anticsrf" value="true" />
                </form>
              </div>
              <div className="ml-form-successBody row-success" style={{ display: 'none' }}>
                <div className="ml-form-successContent">
                  <h4>Thank you!</h4>
                  <p>You have successfully joined our subscriber list.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Load MailerLite Script */}
      <Script
        src="https://groot.mailerlite.com/js/w/webforms.min.js?v176e10baa5e7ed80d35ae235be3d5024"
        strategy="afterInteractive"
      />
    </>
  );
}