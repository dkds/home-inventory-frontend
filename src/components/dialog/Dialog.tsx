import { forwardRef, useImperativeHandle, useRef } from "react";

interface DialogProps {
  title: string;
  children: React.ReactNode;
  actions: React.ReactNode;
  className: string;
}

const Dialog: React.FC<DialogProps> = forwardRef(
  ({ title, children, actions, className }, ref) => {
    const dialog = useRef<HTMLDialogElement | null>(null);

    useImperativeHandle(ref, () => {
      return {
        open() {
          dialog.current?.showModal();
        },
      };
    });

    const classes = `max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${className}`;
    return (
      <dialog ref={dialog} className={classes}>
        <h2>{title}</h2>
        <div>{children}</div>
        <form action="">{actions}</form>
      </dialog>
    );
  }
);

export default Dialog;
