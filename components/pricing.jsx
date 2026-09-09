"use client";

import React from "react";
import { PricingTable } from "@clerk/nextjs";

const Pricing = () => {
  return (
    <div className="w-full">
      <PricingTable
        appearance={{
          variables: {
            /* Base palette */
            colorBackground: "#0a1a0f",
            colorText: "#f0fdf4",
            colorTextSecondary: "#86efac",
            colorPrimary: "#20e28f",
            colorDanger: "#f87171",
            colorSuccess: "#20e28f",
            colorNeutral: "#d1fae5",

            /* Border */
            colorBorder: "rgba(16, 185, 129, 0.2)",

            /* Input */
            colorInputBackground: "#0f2a18",
            colorInputText: "#f0fdf4",

            /* Radius */
            borderRadius: "16px",

            /* Font */
            fontFamily: "Inter, sans-serif",
            fontSize: "15px",
          },
          elements: {
            /* === Card wrapper === */
            pricingTableCard: {
              background:
                "linear-gradient(160deg, rgba(16,185,129,0.08) 0%, rgba(10,26,15,0.95) 60%)",
              border: "1px solid rgba(16, 185, 129, 0.22)",
              borderRadius: "20px",
              boxShadow:
                "0 0 0 1px rgba(16,185,129,0.06), 0 8px 32px rgba(0,0,0,0.45)",
              backdropFilter: "blur(20px)",
              transition: "all 0.25s ease",
            },
            pricingTableCardHighlighted: {
              background:
                "linear-gradient(160deg, rgba(16,185,129,0.18) 0%, rgba(10,26,15,0.98) 60%)",
              border: "2px solid rgba(16, 185, 129, 0.65)",
              boxShadow:
                "0 0 35px rgba(16,185,129,0.22), 0 8px 40px rgba(0,0,0,0.55)",
              transform: "translateY(-6px)",
            },

            /* === Plan name === */
            pricingTableCardTitle: {
              color: "#f0fdf4",
              fontWeight: "700",
              fontSize: "1.2rem",
            },
            pricingTableCardTitleHighlighted: {
              color: "#20e28f",
              fontWeight: "700",
            },

            /* === Badge (Most Popular) === */
            badge: {
              background:
                "linear-gradient(90deg, #20e28f 0%, #14b8a6 100%)",
              color: "#000",
              fontWeight: "700",
              fontSize: "0.7rem",
              letterSpacing: "0.05em",
              borderRadius: "999px",
              padding: "3px 14px",
              boxShadow: "0 0 14px rgba(16,185,129,0.4)",
            },

            /* === Price === */
            pricingTableCardPrice: {
              color: "#ffffff",
              fontWeight: "800",
              fontSize: "2.6rem",
              letterSpacing: "-0.03em",
            },
            pricingTableCardPricePeriod: {
              color: "#86efac",
              fontSize: "0.85rem",
              fontWeight: "400",
            },

            /* === Feature list === */
            pricingTableCardFeatureList: {
              gap: "10px",
            },
            pricingTableCardFeatureItem: {
              color: "#d1fae5",
              fontSize: "0.875rem",
              gap: "10px",
            },
            pricingTableCardFeatureItemIcon: {
              color: "#20e28f",
            },

            /* === CTA Button === */
            pricingTableCardCta: {
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "#ffffff",
              fontWeight: "600",
              borderRadius: "12px",
              padding: "11px 20px",
              fontSize: "0.9rem",
              transition: "all 0.2s ease",
            },
            pricingTableCardCtaHighlighted: {
              background: "linear-gradient(135deg, #20e28f 0%, #14b8a6 100%)",
              border: "none",
              color: "#000000",
              fontWeight: "700",
              boxShadow: "0 4px 20px rgba(16,185,129,0.35)",
            },

            /* === Container === */
            pricingTable: {
              gap: "24px",
            },
          },
        }}
        checkoutProps={{
          appearance: {
            variables: {
              colorBackground: "#0a1a0f",
              colorText: "#f0fdf4",
              colorPrimary: "#20e28f",
              colorBorder: "rgba(16, 185, 129, 0.25)",
              borderRadius: "14px",
            },
            elements: {
              drawerRoot: {
                zIndex: 2000,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Pricing;
