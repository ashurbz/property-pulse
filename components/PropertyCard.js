import React from "react";
import Image from "next/image";
import propertyImage from "@/assets/images/properties/a1.jpg";
import {
  FaBed,
  FaBath,
  FaMoneyBill,
  FaMarker,
  FaRulerCombined,
} from "react-icons/fa";
import Link from "next/link";

const PropertyCard = ({ property }) => {
  const rateDisplay = () => {
    const { rates } = property;

    if (rates.monthly) {
      return `${rates.monthly}$/month`;
    } else if (rates.weekly) {
      return `${rates.weekly}$/week`;
    } else if (rates.nightly) {
      return `${rates.nightly}$/night`;
    }
  };

  return (
    <div className="rounded-xl shadow-md relative">
      <Image
        src={propertyImage}
        alt={property.name}
        className="w-full h-auto rounded-t-xl"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          <div className="text-gray-600">{property.type}</div>
          <h3 className="text-xl font-bold">{property.name}</h3>
        </div>
        <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
          {rateDisplay()}
        </h3>

        <div className="flex justify-center gap-4 text-gray-500 mb-4">
          <p>
            <i className="fa-solid fa-bed">
              <FaBed />
            </i>
            <span className="md:hidden lg:inline">{property.beds} Beds</span>
          </p>
          <p>
            <i className="fa-solid fa-bath">
              <FaBath />
            </i>
            <span className="md:hidden lg:inline">{property.baths} Bath</span>
          </p>
          <p>
            <i className="fa-solid fa-ruler-combined">
              <FaRulerCombined />
            </i>
            {property.square_feet}{" "}
            <span className="md:hidden lg:inline">sqft</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
          <p>
            {property.rates.nightly && (
              <p>
                <i className="fa-solid fa-money-bill">
                  <FaMoneyBill />
                </i>{" "}
                Nightly
              </p>
            )}
          </p>
          <p>
            {property.rates.weekly && (
              <p>
                <i className="fa-solid fa-money-bill">
                  <FaMoneyBill />
                </i>{" "}
                Weekly
              </p>
            )}
          </p>
          <p>
            <i className="fa-solid fa-money-bill"></i>{" "}
            {property.rates.monthly && (
              <p>
                <i className="fa-solid fa-money-bill">
                  <FaMoneyBill />
                </i>{" "}
                Monthly
              </p>
            )}
          </p>
        </div>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            <i className="fa-solid fa-location-dot text-lg text-orange-700">
              <FaMarker />
            </i>
            <span className="text-orange-700">
              {`${property.location.city} ${property.location.state}`}{" "}
            </span>
          </div>
          <Link
            href={`/properties/${property._id}`}
            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
