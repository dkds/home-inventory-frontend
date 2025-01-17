import Breadcrumbs from "@components/Breadcrumbs";
import ContainerList from "@components/ContainerList";
import Heading from "@components/Heading";
import ItemList from "@components/ItemList";

export default function Home() {
  return (
    <>
      <Breadcrumbs />
      <main>
        <Heading title="Containers" />
        <ContainerList />

        <Heading title="Items" />
        <ItemList />
      </main>
    </>
  );
}
