import { StarFill } from "react-bootstrap-icons";

function ProductCard({product}) {
  const {image, name, description, price, category, brand, rating, created_at} = product
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <figure className="relative">
        <img src={image} className="w-full h-60 rounded-t-lg object-cover" alt="" />
        <span className="absolute top-4 left-4 flex gap-1.5 items-center bg-teal-100 text-primary font-semibold px-2.5 py-0.5 rounded dark:bg-teal-200"> <StarFill /> {rating} </span>
      </figure>
      <div className="p-4">
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
        <p className="mb-2 text-sm text-gray-600">{description}</p>
        <p className="mb-2">Category: {category}</p>
        <p className="mb-2">Brand: {brand}</p>
        <p className="mb-2">Published: {new Date(created_at).toLocaleString()}</p>
        <p className="text-xl font-semibold text-primary">${price}</p>
      </div>
    </div>
  );
}
export default ProductCard