import { getProperties } from "@/app/data-access/actions";
import Title from "@/components/Title";

export default async function PropertyInfo() {
  const data = await getProperties();

  return (
    <div className="flex flex-col">
      <Title text="Property Info" />
      <div className="grid gap-6">
        {data.map((item) => (
          <div
            key={item._id}
            className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm"
          >
            <h3 className="text-xl font-bold">{item.name}</h3>
            {item.title && (
              <p className="text-vf-green font-medium mb-2">{item.title}</p>
            )}
            <p className="text-gray-600 mb-3">{item.description}</p>
            <div className="text-sm space-y-1">
              {item.phone && (
                <p>
                  <strong>Phone:</strong> {item.phone}
                </p>
              )}
              {item.email && (
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${item.email}`}
                    className="text-vf-green hover:underline"
                  >
                    {item.email}
                  </a>
                </p>
              )}
              {item.url && (
                <p>
                  <strong>Website:</strong>{" "}
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-vf-green hover:underline"
                  >
                    {item.url}
                  </a>
                </p>
              )}
            </div>
          </div>
        ))}
        {data.length === 0 && (
          <p className="text-gray-500 italic">No property information found.</p>
        )}
      </div>
    </div>
  );
}
