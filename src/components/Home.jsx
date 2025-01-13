import Breadcrumbs from "./Breadcrumbs";
import ContainerList from "./ContainerList";
import Heading from "./Heading";
import ItemList from "./ItemList";

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
