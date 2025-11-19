export default function CatalogModal({ data }) {
  if (!data) return null;

  return (
    <div>
      <img src={data.image} alt={data.title} />
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <span>{data.price}</span>
    </div>
  );
}
