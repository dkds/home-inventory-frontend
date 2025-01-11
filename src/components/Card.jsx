/* eslint-disable react/prop-types */
export default function Card({ title, children, actions, className }) {
  const classes = `max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${className}`;
  return (
    <div className={classes}>
      {title && (
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      )}
      {children && (
        <div className="font-normal text-gray-700 dark:text-gray-400">
          {children}
        </div>
      )}
      {actions && (
        <div className="inline-flex items-center px-3 py-2 mt-3  text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {actions}
        </div>
      )}
    </div>
  );
}
