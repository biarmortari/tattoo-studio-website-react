export default function PortfolioModal({ data }) {
  if (!data) return null;

  return (
    <div>
      <img src={data.src} alt={data.title} />
    </div>
  );
}
