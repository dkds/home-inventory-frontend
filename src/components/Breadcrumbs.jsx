/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  loadContainerParentList,
  setSelectedContainer,
} from "../store/container.actions";
import { useSelector } from "react-redux";
import { HomeIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

export default function Breadcrumbs({ containerId }) {
  const dispatch = useDispatch();
  const parentContainers = useSelector(
    (state) => state.container.parentContainers
  );

  useEffect(() => {
    if (containerId) {
      dispatch(loadContainerParentList(containerId));
    }
  }, [containerId, dispatch]);

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
      className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
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
