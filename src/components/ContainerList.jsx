import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadContainers,
  setSelectedContainer,
} from "../store/container.actions";
import Card from "./Card";
import Header from "./Header";
import Breadcrumbs from "./Breadcrumbs";

export default function ContainerList() {
  const dispatch = useDispatch();
  const containers = useSelector((state) => state.container.containers);
  const selectedContainer = useSelector(
    (state) => state.container.selectedContainer
  );

  useEffect(() => {
    dispatch(loadContainers());
  }, [dispatch]);

  function handleCardClick(containerId) {
    dispatch(setSelectedContainer(containerId));
  }

  return (
    <>
      <Header title="Containers" />
      <Breadcrumbs containerId={selectedContainer} />
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {containers.map((container) => (
              <Card
                key={container.id}
                title={container.name}
                className="cursor-pointer"
                onClick={() => handleCardClick(container.id)}
              >
                <p>
                  Containers: {container.childContainerCount}
                  <br />
                  Items: {container.itemCount}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
