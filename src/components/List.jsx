/* eslint-disable react/prop-types */

import Card from "./Card";

export default function List({ items }) {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {items.map((product) => (
        <Card key={product.id}>{product.name}</Card>
      ))}
    </div>
  );
}
