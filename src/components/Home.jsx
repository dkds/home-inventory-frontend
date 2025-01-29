import { Button } from "@/components/button";
import ContainerEntry from "@/components/ContainerEntry";
import Breadcrumbs from "@components/Breadcrumbs";
import ContainerList from "@components/ContainerList";
import Heading from "@components/Heading";
import ItemList from "@components/ItemList";
import { PlusIcon } from "@heroicons/react/16/solid";
import { useRef } from "react";

export default function Home() {
  const dialog = useRef();
  const handleAddContainerClick = () => {
    console.log("test");
    dialog.current.open();
  };

  return (
    <>
      <ContainerEntry ref={dialog} title="Test Heading" />
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
