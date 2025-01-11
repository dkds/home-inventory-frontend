import { useEffect, useState } from "react";
import { listContainers } from "../services/container.service";
import Header from "./Header";
import Card from "./Card";

export default function ItemList() {
  const [containers, setContainers] = useState([]);

  useEffect(() => {
    listContainers()
      .then((response) => {
        setContainers(response.data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      <Header title="Items" />
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {containers.map((item) => (
              <Card key={item.id} title={item.name} className="cursor-pointer">
                <p>
                  Containers: {item.childContainerCount}
                  <br />
                  Items: {item.itemCount}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
