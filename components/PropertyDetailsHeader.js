import Image from "next/image";
import React from "react";
import propertyImage from "@/assets/images/properties/a2.jpg";

const PropertyDetailsHeader = () => {
  return (
    <div>
      <section>
        <div className="container-xl m-auto">
          <div className="grid grid-cols-1">
            <Image
              src={propertyImage}
              alt=""
              className="object-cover h-[400px] w-full"
              width={0}
              height={0}
              sizes="500"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetailsHeader;
