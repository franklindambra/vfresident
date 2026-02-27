export const dynamic = "force-dynamic";
export default async function Event({ params }) {
  const slug = (await params).slug;

  return (
    <div>
      <p className="mt-30 text-red-400">{slug}</p>
    </div>
  );
}
