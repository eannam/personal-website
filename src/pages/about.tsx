import Link from "next/link";

export default function About() {
  return (
    <main className="flex justify-center text-zinc-50 h-screen">
      <div className="lg:px-16 md:px-8 px-4 py-8 md:border-x-2 border-green-500 h-full min-h-fit">
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl py-4 px-2 underline underline-offset-8 text-green-500">
            Me
          </h2>
          <ul className="flex flex-col space-y-2 px-8 list-disc text-green-50">
            <li>Full stack developer & machine learning engineer</li>
            <li>Born in Dublin, Ireland 🇮🇪</li>
            <li>Living in London</li>
            <li>
              For contract work or general enquiries:{" "}
              <span className="">
                <a href="mailto:eannamorley@gmail.com" target="_blank">
                  eannamorley@gmail.com
                </a>
              </span>
            </li>
          </ul>
          <h2 className="text-green-500 text-2xl py-4 px-2 underline underline-offset-8">
            Experience
          </h2>
          <ul className="flex flex-col space-y-8 px-4">
            <li>
              <h3 className="text-lg">{"Co-Founder & CTO"}</h3>
              <p className="text-md">
                <Link href="https://audyo.ai" target="_blank">
                  {"Audyo"}
                </Link>
              </p>
              <p className="text-xs text-green-300">{"2020 -> Present"}</p>
            </li>
            <li>
              <h3 className="text-lg">
                {"Machine Learning & Data Science Lead"}
              </h3>
              <p className="text-md">{"Jigsaw XYZ (now Motive Create)"}</p>
              <p className="text-xs text-green-300">{"2019 -> 2020"}</p>
            </li>
            <li>
              <h3 className="text-lg">{"Data Scientist"}</h3>
              <p className="text-md">{"Accenture"}</p>
              <p className="text-xs text-green-300">{"2016 -> 2018"}</p>
            </li>
          </ul>
          <h2 className="text-2xl py-4 underline underline-offset-8 text-green-500">
            Education
          </h2>
          <ul className="flex flex-col space-y-8 px-4">
            <li>
              <h3 className="text-lg">
                {"MSc Computational Statistics & Machine Learning"}
              </h3>
              <p className="text-md">{"University College London"}</p>
              <p className="text-sm text-green-300">{"Distinction"}</p>
              <p className="text-xs text-green-300">{"2018 -> 2019"}</p>
            </li>
            <li>
              <h3 className="text-lg">{"BSc Mathematics & Statistics"}</h3>
              <p className="text-md">{"University College Dublin"}</p>
              <p className="text-sm text-green-300">{"1st Class Honours"}</p>
              <p className="text-xs text-green-300">{"2012 -> 2016"}</p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
