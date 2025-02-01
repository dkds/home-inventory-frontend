import { Card } from "@/components/card";
import { RootState, useAppDispatch } from "@/store";
import {
  loadContainerList,
  setSelectedContainer
} from "@/store/container.actions";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ItemList() {
  const dispatch = useAppDispatch();
  const items = useSelector(
    (state: RootState) => state.container.containerList
  );

  useEffect(() => {
    dispatch(loadContainerList(null));
  }, [dispatch]);

  function handleCardClick(containerId: number) {
    dispatch(setSelectedContainer(containerId));
  }

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {items.map((item) => (
            <Card
              key={item.id}
              className="cursor-pointer"
              image="https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ"
              onClick={() => handleCardClick(item.id)}
            >
              <Card.Content>
                <p>{item.name}</p>
              </Card.Content>
            </Card>
          ))}
          {!items.length && <p>No items found</p>}
        </div>
      </div>
    </>
  );
}
