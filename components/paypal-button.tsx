"use client";
import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { payPalInitialOptions } from "@/lib/constants";

function PayPalbutton() {
  const [donationAmount, setDonationAmount] = useState(""); // State to store donation amount
  const [error, setError] = useState(""); // State to store validation error message

  const handleDonationChange = (e: any) => {
    setDonationAmount(e.target.value);
  };

  return (
    <PayPalScriptProvider options={payPalInitialOptions}>
      <div>
        <input
          type="text"
          value={donationAmount}
          onChange={handleDonationChange}
          placeholder="Spendenbetrag eingeben"
        />
      </div>
      <PayPalButtons
        fundingSource="paypal"
        style={{ layout: "horizontal", label: "donate" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: donationAmount, // specify donation amount here
                  currency_code: "EUR",
                  breakdown: {
                    item_total: {
                      currency_code: "EUR",
                      value: donationAmount, // specify donation amount here
                    },
                  },
                },
                items: [
                  {
                    name: "Donation",
                    category: "DONATION",
                    quantity: "1",
                    unit_amount: {
                      value: donationAmount,
                      currency_code: "EUR",
                    },
                  },
                ],
              },
            ],
          });
        }}
      />
    </PayPalScriptProvider>
  );
}

export default PayPalbutton;
