"use client";
import PropertyDetails from "@/components/PropertyDetails";
import PropertyDetailsHeader from "@/components/PropertyDetailsHeader";
import { fetchSingleProperty } from "@/utils/fetch";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";

const PropertyInfo = () => {
  const [property, setProperty] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    async function getInfo() {
      const data = await fetchSingleProperty(id);
      setProperty(data);
    }
    if (property === null) {
      getInfo();
    }
  }, [property, id]);

  return (
    <>
      <PropertyDetailsHeader />
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <i className="fas fa-arrow-left mr-2">
              <FaArrowLeft />
            </i>
            Back to Properties
          </Link>
        </div>
      </section>

      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <PropertyDetails property={property} />
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyInfo;
