import { titlefon } from "@/config/fonts"; // Asegúrate de usar titlefon si es necesario en el código
import Image from "next/image";
import { ProductGrid, Title } from "@/components"; // Importa el componente Title correctamente
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function Home() {
  return (
    <>
      <Title
        title="Tienda"
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid
      products={ products }/>


    </>
  );
}
