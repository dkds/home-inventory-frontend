import { useEffect, useState } from "react";
import { listTopContainers } from "../services/container.service";
import Header from "./Header";
import List from "./List";

export default function ContainerList() {
  const [containers, setContainers] = useState([]);

  useEffect(() => {
    listTopContainers()
      .then((response) => {
        setContainers(response.data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      <Header title="Containers" />
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <List items={containers} />
        </div>
      </main>
    </>
  );
}
