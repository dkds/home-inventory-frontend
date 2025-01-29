import { XMarkIcon } from "@heroicons/react/16/solid";
import { RefObject, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

interface DialogProps {
  ref: RefObject<{}>;
  title?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
  open?: () => void;
  close?: () => void;
}

const Dialog: React.FC<DialogProps> = ({
  ref,
  title,
  children,
  actions,
  className = "",
}) => {
  const dialog = useRef<HTMLDialogElement | null>(null);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current?.showModal();
      },
      close() {
        dialog.current?.close();
      },
    };
  });

  const classes = `${className}`;
  return createPortal(
    <dialog ref={dialog} className={classes}>
      <div className="overflow-y-auto flex justify-center items-center overflow-x-hidden bg-gray-600/50 fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>
              <button
                type="button"
                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="authentication-modal"
                onClick={() => dialog.current?.close()}
              >
                <XMarkIcon className="size-6" />
              </button>
            </div>
            <div className="p-4 md:p-5">{children}</div>
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
              {actions}
            </div>
          </div>
        </div>
      </div>
    </dialog>,
    document.getElementById("modal") as Element
  );
};

export default Dialog;
