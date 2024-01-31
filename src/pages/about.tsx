import Link from "next/link";

export default function About() {
  return (
    <main className="flex h-auto items-center justify-center bg-blue-950 text-blue-100">
      <div className="h-full md:px-32 px-4 py-16 items-center border-x-2 border-blue-200 bg-blue-900">
        <div className="flex pb-4 justify-center ">
          <img
            src={"/me.jpg"}
            alt="Me on the top of Croagh Patrick, Westport, Ireland."
            width={150}
            className=" outline-blue-200 outline-2 outline outline-offset-4"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl py-4 px-2 underline underline-offset-8">
            About Me
          </h2>
          <ul className="flex flex-col space-y-2 px-8 list-disc">
            <li>Fullstack developer & machine learning engineer</li>
            <li>Born in Dublin, Ireland 🇮🇪</li>
            <li>Living in London</li>
            <li>
              Enquiries:{" "}
              <span className="underline underline-offset-2 text-blue-200">
                eannamorley@gmail.com
              </span>
            </li>
          </ul>
          <h2 className="text-2xl py-4 px-2 underline underline-offset-8">
            Work Experience
          </h2>
          <ul className="flex flex-col space-y-8 px-4">
            <li>
              <h3 className="text-lg">{"Co-Founder & CTO"}</h3>
              <p className="text-md">
                <Link href="https://audyo.ai" target="_blank">
                  {"Audyo"}
                </Link>
              </p>
              <p className="text-xs text-blue-300">{"2020 -> Present"}</p>
            </li>
            <li>
              <h3 className="text-lg">
                {"Machine Learning & Data Science Lead"}
              </h3>
              <p className="text-md">{"Jigsaw XYZ (now Motive Create)"}</p>
              <p className="text-xs text-blue-300">{"2019 -> 2020"}</p>
            </li>
            <li>
              <h3 className="text-lg">{"Analytics Analyst"}</h3>
              <p className="text-md">{"Accenture"}</p>
              <p className="text-xs text-blue-300">{"2016 -> 2018"}</p>
            </li>
          </ul>
          <h2 className="text-2xl py-4 underline underline-offset-8">
            Education
          </h2>
          <ul className="flex flex-col space-y-8 px-4">
            <li>
              <h3 className="text-lg">
                {"MSc Computational Statistics & Machine Learning"}
              </h3>
              <p className="text-md">{"University College London"}</p>
              <p className="text-sm text-blue-200">{"Distinction"}</p>
              <p className="text-xs text-blue-300">{"2018 -> 2019"}</p>
            </li>
            <li>
              <h3 className="text-lg">{"BSc Mathematics & Statistics"}</h3>
              <p className="text-md">{"University College Dublin"}</p>
              <p className="text-sm text-blue-200">{"1st Class Honours"}</p>
              <p className="text-xs text-blue-300">{"2012 -> 2016"}</p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
