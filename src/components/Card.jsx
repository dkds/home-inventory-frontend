/* eslint-disable react/prop-types */
export default function Card({
  title,
  children,
  actions,
  image,
  className,
  onClick,
}) {
  const classes = `max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${className}`;
  return (
    <div className={classes} onClick={onClick}>
      {image && <img className="rounded-t-lg pb-1" src={image} alt="" />}
      {title && (
        <h5 className="px-4 pt-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      )}
      {children && (
        <div className="font-normal px-4 py-2 text-gray-700 dark:text-gray-400">
          {children}
        </div>
      )}
      {actions && (
        <div className="inline-flex p-4 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {actions}
        </div>
      )}
    </div>
  );
}
