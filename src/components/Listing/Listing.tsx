import React from "react";
import { ListingProps, ListingItem } from "../../types";
import "./Listing.css";

const Listing: React.FC<ListingProps> = ({ items = [] }) => {
  const truncateTitle = (title: string): string => {
    if (title.length > 50) {
      return title.slice(0, 50) + "…";
    }
    return title;
  };

  const formatPrice = (price: string, currencyCode: string): string => {
    const currencySymbols: Record<string, string> = {
      USD: "$",
      GBP: "£",
      EUR: "€",
      CAD: "C$",
    };
    const symbol = currencySymbols[currencyCode] || currencyCode;
    return `${symbol}${price}`;
  };

  const getStockClass = (quantity: number): string => {
    if (quantity > 50) return "stock-high";
    if (quantity > 10) return "stock-medium";
    return "stock-low";
  };

  return (
    <div className="listing-grid">
      {items.map((item: ListingItem) => {
        if (!item.MainImage || !item.MainImage.url_570xN) return null;

        return (
          <div className="product-card" key={item.listing_id}>
            <img
              src={item.MainImage.url_570xN}
              alt={item.title}
              className="product-image"
            />
            <div className="product-info">
              <h3 className="product-title">{truncateTitle(item.title)}</h3>
              <div className="price-container">
                <div className="product-price">
                  {formatPrice(item.price, item.currency_code)}
                </div>
                {item.quantity !== undefined && (
                  <span
                    className={`stock-badge ${getStockClass(item.quantity)}`}
                  >
                    {item.quantity} left
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Listing;
