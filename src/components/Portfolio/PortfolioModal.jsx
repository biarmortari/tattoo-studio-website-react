export default function PortfolioModal({ data }) {
  if (!data) return null;

  return (
    <div>
      <img src={data.img} alt={data.title} />
    </div>
  );
}
