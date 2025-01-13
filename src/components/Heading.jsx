/* eslint-disable react/prop-types */
export default function Heading({ title }) {
  return (
    <div className="mx-auto max-w-7xl px-5 py-2 sm:px-6 lg:px-7 bg-white mt-5 border rounded border-gray-200 ">
      <h1 className="text-lg text-gray-900">{title}</h1>
    </div>
  );
}
