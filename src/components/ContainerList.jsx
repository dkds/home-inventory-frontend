import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadContainers } from "../store/container.actions";
import Card from "./Card";
import Header from "./Header";

export default function ContainerList() {
  const dispatch = useDispatch();
  const containers = useSelector((state) => state.container.containers);

  useEffect(() => {
    dispatch(loadContainers());
  }, [dispatch]);

  return (
    <>
      <Header title="Containers" />
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
