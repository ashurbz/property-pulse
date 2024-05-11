"use client";
import { fetchSingleProperty } from "@/utils/fetch";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

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

  return <div></div>;
};

export default PropertyInfo;
