export default async function Article({ params }) {
  const slug = (await params).slug;

  return (
    <div>
      <p className="mt-30 text-red-400">{slug}</p>
    </div>
  );
}
