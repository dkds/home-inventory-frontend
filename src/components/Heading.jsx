/* eslint-disable react/prop-types */
export default function Heading({ title, children }) {
  return (
    <div className="mx-auto max-w-7xl px-5 py-2 sm:px-6 lg:px-7 bg-white mt-5 border rounded border-gray-200 ">
      <div className="flex gap-2">
        <h1 className="text-lg leading-8 text-gray-900">{title}</h1>
        <div className="flex grow gap-2 justify-end">{children}</div>
      </div>
    </div>
  );
}
