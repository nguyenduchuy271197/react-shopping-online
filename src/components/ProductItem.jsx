export default function ProductItem({
  title,
  description,
  thumbnail,
  brand,
  category,
}) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={thumbnail} alt={title} className="h-[200px] object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{brand}</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
        </div>
      </div>
    </div>
  );
}
