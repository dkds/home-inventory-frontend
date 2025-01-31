import { useForm } from "@tanstack/react-form";
import { RefObject } from "react";
import { Dialog } from "@/components/dialog";

interface ContainerEntryProps {
  ref: RefObject<any>;
  title?: string;
  children?: React.ReactNode;
  parentContainer: string;
  containerName: string;
  onContainerNameChange?: (containerName: string) => void
  className?: string;
  open?: () => void;
  close?: () => void;
}

const ContainerEntry: React.FC<ContainerEntryProps> = ({ ref, title }) => {
  const form = useForm({
    defaultValues: {
      containerName: "",
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
    },
  });

  return (
    <Dialog ref={ref} title={title}>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div className="">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white focus">
            Parent container
          </label>
          <input
            value="Parent container"
            disabled
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          />
        </div>
        <div className="">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white focus">
            Container name
          </label>
          <form.Field
            name="containerName"
            children={(field) => (
              <input
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            )}
          />
        </div>
        <div className="pt-3">
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save Changes
          </button>
        </div>
      </form>
    </Dialog>
  );
};

export default ContainerEntry;
