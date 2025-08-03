import { PROPERTYLISTINGSAMPLE } from "../../constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "../../components/property/PropertyDetail";

export default function PropertyPage() {
  const router = useRouter();
  const id = typeof router.query?.id === "string" ? router.query.id : undefined;
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property) return <p>Property not found</p>;

  return (
    <div>
      <PropertyDetail property={property} />
    </div>
  );
}
