// // import properties from "@/properties.json";
import { fetchPropertiesData } from "@/utils/fetch";
import PropertyCard from "@/components/PropertyCard";

const PropertiesPage = async () => {
  const properties = await fetchPropertiesData();

  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties?.map((property) => {
              return <PropertyCard property={property} key={property._id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertiesPage;
