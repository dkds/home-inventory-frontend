import { Button } from "@/components/button";
import Breadcrumbs from "@components/Breadcrumbs";
import ContainerList from "@components/ContainerList";
import Heading from "@components/Heading";
import ItemList from "@components/ItemList";
import { PlusIcon } from "@heroicons/react/16/solid";

export default function Home() {
  const handleAddContainerClick = () => {
    console.log("test");
  };

  return (
    <>
      <Breadcrumbs />
      <main>
        <Heading title="Containers">
          <Button icon={PlusIcon} onClick={handleAddContainerClick}>
            Add new container
          </Button>
        </Heading>
        <ContainerList />

        <Heading title="Items" />
        <ItemList />
      </main>
    </>
  );
}
