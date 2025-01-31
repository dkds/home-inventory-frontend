import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/button";
import ContainerEntry from "@/components/ContainerEntry";
import ContainerList from "@/components/ContainerList";
import Heading from "@/components/Heading";
import ItemList from "@/components/ItemList";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/16/solid";
import { useRef, useState } from "react";

const DIALOG_TITLE_NEW_CONTAINER = "Add new container";

export default function Home() {
  const containerEntryDialog = useRef<any>(null);
  const [containerEntryTitle, setContainerEntryTitle] = useState(
    DIALOG_TITLE_NEW_CONTAINER
  );
  const handleAddContainerClick = () => {
    if (containerEntryDialog.current) {
      setContainerEntryTitle(DIALOG_TITLE_NEW_CONTAINER);
      containerEntryDialog.current.open();
    } else {
      console.error("Container dialog is not initialized");
    }
  };

  return (
    <>
      <ContainerEntry
        ref={containerEntryDialog}
        title={containerEntryTitle}
        parentContainer=""
        container=""
      />
      <Breadcrumbs />
      <main>
        <Heading title="Containers">
          <Button icon={PlusIcon} onClick={handleAddContainerClick}>
            Add new container
          </Button>
        </Heading>
        <ContainerList />

        <Heading title="Items">
          <Button icon={PlusIcon} onClick={() => {}}>
            Add new item
          </Button>
          <Button icon={PencilIcon} onClick={() => {}}>
            Edit
          </Button>
          <Button icon={TrashIcon} onClick={() => {}}>
            Delete
          </Button>
        </Heading>
        <ItemList />
      </main>
    </>
  );
}
