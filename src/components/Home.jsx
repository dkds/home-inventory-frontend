import { Button } from "@/components/button";
import ContainerEntry from "@/components/ContainerEntry";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContainerList from "@/components/ContainerList";
import Heading from "@/components/Heading";
import ItemList from "@/components/ItemList";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { useRef } from "react";

const DIALOG_TITLE_NEW_CONTAINER = "Add new container";

export default function Home() {
  const containerEntryDialog = useRef();
  const [containerEntryTitle, setContainerEntryTitle] = useState(
    DIALOG_TITLE_NEW_CONTAINER
  );
  const handleAddContainerClick = () => {
    setContainerEntryTitle(DIALOG_TITLE_NEW_CONTAINER);
    containerEntryDialog.current.open();
  };

  return (
    <>
      <ContainerEntry ref={containerEntryDialog} title={containerEntryTitle} />
      <Breadcrumbs />
      <main>
        <Heading title="Containers">
          <Button icon={PlusIcon} onClick={handleAddContainerClick}>
            Add new container
          </Button>
        </Heading>
        <ContainerList />

        <Heading title="Items">
          <Button icon={PlusIcon}>Add new item</Button>
          <Button icon={PencilIcon}>Edit</Button>
          <Button icon={TrashIcon}>Delete</Button>
        </Heading>
        <ItemList />
      </main>
    </>
  );
}
