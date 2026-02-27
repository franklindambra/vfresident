import { getTradespeople } from "@/app/data-access/actions";
import Title from "@/components/Title";

export default async function Tradespeople() {
  const data = await getTradespeople();

  return (
    <div className="flex flex-col">
      <Title text="Tradespeople" />
      <div className="">
        {data.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-lg border border-gray-100 shadow-lg p-5"
          >
            <h3 className="">{item.name}</h3>
            {item.title && <p className="font-bold mb-2">{item.title}</p>}
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
          <p className="text-gray-500 italic">No tradespeople found.</p>
        )}
      </div>
    </div>
  );
}
