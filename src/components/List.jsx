/* eslint-disable react/prop-types */

import { MD5 } from "object-hash";

export default function List({ items, listItem }) {
  const listItemInternal =
    listItem || ((item) => <div key={MD5(item.id)}>{item}</div>);
  console.log(listItemInternal);

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {items.map((item) => listItemInternal(item))}
    </div>
  );
}
