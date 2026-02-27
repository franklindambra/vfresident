import React from "react";
import Title from "@/components/Title";
import Link from "next/link";

export default function About() {
  const committees = [
    {
      name: "Steering Committee",
      members:
        "Lisa Apfelberg, Brandy Beverly, Van Thompson, Tisa Wheeler, Dennis Gillespie",
    },
    {
      name: "Communications Committee",
      members:
        "Brandy Beverly, Lisa Apfelberg, Mary Connor, Angela Kopit, Wendy Schuelke",
    },
    {
      name: "Programming Committee",
      members: "Lisa Apfelberg, Regina Kubelka, Tisa Wheeler",
    },
    { name: "Welcome Committee", members: "Lisa Apfelberg" },
  ];

  const events = [
    {
      name: "First Thursday",
      detail:
        "Monthly meeting at the Red Barn, 5:30-7:00 PM. Sustainability & community news.",
    },
  ];

  const groups = [
    {
      name: "Garden Club",
      detail: "Meets monthly, 2nd Wednesdays, 5:30-7:00 PM.",
    },
    { name: "Bird Club", detail: "Monthly meetings for bird enthusiasts." },
    {
      name: "Food Forest Initiative",
      detail: "Community-led permaculture project.",
    },
  ];

  return (
    <div className="space-y-12 pb-10">
      <Title text="About Village Farm & Getting Involved" />

      {/* Hero Section */}
      <div className="relative group overflow-hidden rounded-2xl shadow-lg border border-gray-100">
        <img
          src="/about-hero.jpg"
          alt="Village Farm Community"
          className="w-full h-auto object-cover max-h-[600px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
          <p className="text-white text-lg md:text-xl font-medium max-w-2xl italic">
            "Residents come together to create a vibrant community, transforming
            this collection of tiny houses and a farm into a proper
            neighborhood."
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: Context & Vision */}
        <div className="space-y-8">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-header">
              Our Journey
            </h2>
            <p>
              Over the years, Village Farm residents have created a unique
              culture through garden and bird clubs, cooking classes, movie
              nights, and more. These activities require careful planning,
              coordination, and a shared spirit of stewardship.
            </p>
            <p>
              While our community thrives, we face ongoing challenges with
              management follow-through and high staff turnover. To meet these
              challenges, the **Steering Committee** was established as a
              dedicated unified voice to advocate for residents and hold
              management accountable.
            </p>
            <p className="font-medium text-vf-green italic">
              We want to work in community and model sustainable living and
              connection to our residents and our land.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="mailto:brandybeverly14@gmail.com"
              className="cta inline-block px-6 py-3 text-white text-center rounded-sm focus:outline-none bg-vf-green font-bold ease-in-out duration-200 hover:scale-[104%] shadow-lg active:scale-95"
            >
              Contact Steering Committee
            </Link>
            <Link
              href="mailto:vfresidentsassoc@gmail.com"
              className="cta inline-block px-6 py-3 text-vf-green border-2 border-vf-green text-center rounded-sm focus:outline-none font-bold ease-in-out duration-200 hover:scale-[104%] shadow-lg active:scale-95"
            >
              Email Resident Assoc.
            </Link>
          </div>
        </div>

        {/* Right Column: Get Involved Details */}
        <div className="space-y-6">
          <div className="bg-vf-green/5 p-8 rounded-2xl border border-vf-green/10 shadow-lg transition-all hover:shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <svg
                className="w-6 h-6 text-vf-green"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              Get Involved
            </h2>

            <div className="space-y-8">
              <section>
                <h3 className="text-lg font-bold text-vf-green uppercase tracking-wider mb-4 text-sm">
                  Committees
                </h3>
                <ul className="space-y-4">
                  {committees.map((c) => (
                    <li
                      key={c.name}
                      className="border-l-2 border-vf-green/20 pl-4 py-1"
                    >
                      <span className="block font-bold text-gray-900">
                        {c.name}
                      </span>
                      <span className="text-sm text-gray-600">{c.members}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-gray-100">
                <section>
                  <h3 className="text-lg font-bold text-vf-green uppercase tracking-wider mb-4 text-sm">
                    Regular Events
                  </h3>
                  <ul className="space-y-4">
                    {events.map((e) => (
                      <li key={e.name}>
                        <span className="block font-bold text-gray-900">
                          {e.name}
                        </span>
                        <span className="text-sm text-gray-600">
                          {e.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-vf-green uppercase tracking-wider mb-4 text-sm">
                    Interest Groups
                  </h3>
                  <ul className="space-y-4">
                    {groups.map((g) => (
                      <li key={g.name}>
                        <span className="block font-bold text-gray-900">
                          {g.name}
                        </span>
                        <span className="text-sm text-gray-600">
                          {g.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 italic text-sm text-gray-600">
            <p>
              Beyond the Steering Committee, we have additional opportunities to
              get involved. **Your talents are needed!** You can contact anyone
              on the committees to get more information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
