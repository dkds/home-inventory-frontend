import { ChevronRightIcon, HomeIcon } from "@heroicons/react/16/solid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadContainerParentList,
  setSelectedContainer,
} from "@/store/container.actions";

export default function Breadcrumbs() {
  const dispatch = useDispatch();
  const parentContainers = useSelector(
    (state) => state.container.parentContainers
  );
  const selectedContainer = useSelector(
    (state) => state.container.selectedContainer
  );

  useEffect(() => {
    if (selectedContainer) {
      dispatch(loadContainerParentList(selectedContainer));
    }
  }, [selectedContainer, dispatch]);

  function handleItemClick(index, containerId) {
    if (index !== parentContainers.length) {
      dispatch(setSelectedContainer(containerId));
    }
  }

  function getItemClasses(index) {
    let classes = "ms-1 text-sm font-medium";
    if (index !== parentContainers.length) {
      classes +=
        " text-gray-500 md:ms-2 dark:text-gray-400 hover:text-blue-500 cursor-pointer";
    } else {
      classes += " text-gray-800 md:ms-2 dark:text-gray-200";
    }
    return classes;
  }

  return (
    <nav
      className="mx-auto max-w-7xl flex px-5 py-1 text-gray-700 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 shadow "
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 py-3 overflow-x-scroll">
        <li
          className="inline-flex items-center"
          onClick={() => handleItemClick(0, null)}
        >
          <div className="flex items-center">
            <HomeIcon className="size-5 text-blue-400" />
            <span className={getItemClasses(0)}>Home</span>
          </div>
        </li>
        {parentContainers.map((container, i) => (
          <li key={container.id}>
            <div className="flex items-center">
              <ChevronRightIcon className="size-5 text-blue-400" />
              <span
                className={getItemClasses(i + 1)}
                onClick={() => handleItemClick(i + 1, container.id)}
              >
                {container.name}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
