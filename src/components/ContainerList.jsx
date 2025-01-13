import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadContainers,
  setSelectedContainer,
} from "../store/container.actions";
import Card from "./Card";

export default function ContainerList() {
  const dispatch = useDispatch();
  const containers = useSelector((state) => state.container.containers);

  useEffect(() => {
    dispatch(loadContainers());
  }, [dispatch]);

  function handleCardClick(containerId) {
    dispatch(setSelectedContainer(containerId));
  }

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
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
          {!containers.length && <p>No containers found</p> }
        </div>
      </div>
    </>
  );
}
