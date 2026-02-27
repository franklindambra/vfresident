import Title from "@/components/Title";
import ClickableImage from "@/components/ClickableImage";
import Link from "next/link";

export default function BergstromCommunityGardens() {
  const plotPricing = [
    { size: "4' x 4'", price: "$30/yr" },
    { size: "4' x 8'", price: "$35/yr" },
    { size: "4' x 12'", price: "$40/yr" },
  ];

  const communities = [
    "Village Farm",
    "Loma Vista",
    "Oak Forest",
    "Citizen House Decker",
    "Spectra Park",
    "Agave",
    "Community First",
  ];

  const offerings = [
    "Raised beds with rich soil and amendments.",
    "Multiple affordable plot sizes.",
    "Shared tools and wheelbarrows.",
    "Water spigots and hoses.",
    "Plants/seeds for purchase.",
    "Upcoming educational workshops and a children's area.",
  ];

  return (
    <div>
      <Title text="Bergstrom Community Gardens" />

      <div className="mt-8 mb-12">
        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
          <img
            src="/bergstrom-hero.jpg"
            alt="Bergstrom Community Gardens Hero"
            className="w-full h-auto object-cover max-h-[600px]"
          />
        </div>
        <p className="text-2xl font-bold mt-6 text-vf-green">
          Open for Business!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
        <div className="space-y-6">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="leading-relaxed">
              The long-awaited Bergstrom Community Garden (BCG) allotments are
              now in place and ready for our neighbors to begin planting. The
              vision for this community garden is to provide garden plots and
              education to our east central Austin neighbors.
            </p>
            <p className="leading-relaxed">
              We want to give a huge thanks to Roberts Communities for providing
              the space for the garden and the beautiful fence. We also want to
              thank the many volunteers from around the neighborhood who came
              out to help construct the garden.
            </p>
          </div>

          <div className="bg-vf-green/5 p-8 rounded-2xl border border-vf-green/10">
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              The BCG Offers:
            </h3>
            <ul className="space-y-3">
              {offerings.map((offering) => (
                <li key={offering} className="flex gap-3 text-gray-700">
                  <svg
                    className="w-5 h-5 text-vf-green flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {offering}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSd8LYCdkpRHnYk_xtAaTnIjaPqaVgPzU3q2hllisw2fw9Ni-A/viewform?usp=dialog"
              target="_blank"
              className="bg-vf-green text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-md active:scale-95"
            >
              Apply Now
            </Link>
            <Link
              href="https://docs.google.com/document/d/1WVY-JukqHPO_yq9nAxPlb9qPicuDGvnPDUygBPEPujQ/edit?tab=t.0#heading=h.woxhtcc0bahg"
              target="_blank"
              className="border-2 border-vf-green text-vf-green px-8 py-3 rounded-full font-bold hover:bg-vf-green hover:text-white transition-all active:scale-95"
            >
              Read the Handbook
            </Link>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              Participating Communities
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {communities.map((community) => (
                <li
                  key={community}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-vf-green"></span>
                  {community}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="max-w-[500px] mx-auto lg:ml-auto lg:mr-0">
            <ClickableImage
              src="/garden-map.png"
              alt="Garden Allotment Map"
              caption="Garden Layout & Numbering"
              className="w-full"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Allotment Pricing & Fees
          </h2>
          <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 font-bold text-gray-900 uppercase tracking-wider text-sm">
                    Plot Size
                  </th>
                  <th className="px-6 py-4 font-bold text-gray-900 uppercase tracking-wider text-sm">
                    Annual Cost
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {plotPricing.map((item) => (
                  <tr
                    key={item.size}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-gray-700">{item.size}</td>
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-500 text-sm italic">
            * All beds range from 16" – 24" in height. There is a one-time $20
            tool fee.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-inner italic text-gray-600 leading-relaxed relative">
          <svg
            className="absolute top-4 left-4 w-12 h-12 text-vf-green/10 -z-10"
            fill="currentColor"
            viewBox="0 0 32 32"
          >
            <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H7.1c.5-2.2 2.4-4 4.9-4V8H10zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6.9c.5-2.2 2.4-4 4.9-4V8h-2z" />
          </svg>
          <p>
            The vision for this community garden is to provide garden plots and
            education to our east central Austin neighbors. We value
            stewardship, and we ask our members to do the same. We want to work
            in community and model sustainable living and connection to our
            residents and our land.
          </p>
        </div>
      </div>
    </div>
  );
}
