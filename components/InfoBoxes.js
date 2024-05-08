import React from "react";
import { InfoBox } from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="For Renters"
            backgroundColor="bg-gray-100"
            buttonInfo={{
              text: "Browse Properties",
              textColor: "text-white",
              bg: "bg-black",
              color: "bg-gray-700",
            }}
          >
            Find your dream rental property. Bookmark properties and contact
            owners.
          </InfoBox>

          <InfoBox
            heading="For Property Owners"
            backgroundColor="bg-blue-100"
            buttonInfo={{
              text: "Add Properties",
              textColor: "text-white",
              bg: "bg-blue-500",
              color: "bg-blue-600",
            }}
          >
            List your properties and reach potential tenants. Rent as an airbnb
            or long term
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
