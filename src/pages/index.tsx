import { HeadFC, Link } from "gatsby";
import React from "react";
import { zsh } from "../partials/icons";
import Layout from "../partials/Layout";

const index = () => {
  const data = [
    {
      _id: "67cc8e4e-6d6c-4a16-b9f2-bb280db8fd22",
      description: "Ability to work as full stack dev with MERN stack",
      imgUrl: {
        _type: "image",
        asset: {
          _ref: "image-f760cd28bc51148d58957df1d6afce5d7835c04e-600x598-png",
          _type: "reference",
        },
      },
      profile: "MERN stack ",
    },
    {
      _id: "9c4328f4-c7cc-4180-9546-7580be79ff8d",
      description:
        "Familiar to both SQL , No-Sql databases and CMS' eg. sanity.io , airtable",
      imgUrl: {
        _type: "image",
        asset: {
          _ref: "image-6a363e4408fda47a06300bda7d2ed040a4862d8d-600x598-png",
          _type: "reference",
        },
      },
      profile: "Databse and CMS",
    },
    {
      _id: "ddde4479-a4b9-421d-adad-22b87a65bf95",
      description:
        "Decent knowledge of Backend technologies , Completed lots of project  in NodeJS , PHP",
      imgUrl: {
        _type: "image",
        asset: {
          _ref: "image-d84065351b3f1b8b9f1a9d7a5b71e4ddb462d885-600x598-png",
          _type: "reference",
        },
      },
      profile: "Backend Developer",
    },
    {
      _id: "df5aa7ed-53cc-4f40-bd26-e0996d79f3f3",
      description:
        "Good knowledge and practical experience of client-side builds and interactive websites",
      imgUrl: {
        _type: "image",
        asset: {
          _ref: "image-8720d47c466e45e23b34aceb17ebe95cd778be24-600x598-png",
          _type: "reference",
        },
      },
      profile: "Frontend Developer",
    },
  ];

  return (
    <Layout>
      <section className="flex flex-col h-max">
        {/* hero section */}
        <section className="flex items-center flex-col md:flex-row p-6 md:p-20 ">
          <div className="w-full md:w-1/2 py-8 md:order-1">
            <a
              href="https://github.com/sanket-gawande"
              className="rounded-lg font-medium text-[13px] mb-12 inline-block px-4 py-2 bg-gradient-to-br from-bg to-bg border border-slate-400 via-slate-800 text-slate-300 hover:underline"
            >
              {/* <span className='bg-clip-text bg-gradient-to-bl via-primary from-slate-100 to-slate-200 text-transparent inline-block'> */}
              Sanket Gawande from Maharashtra, India
              {/* </span> */}
            </a>
            <h1 className="text-3xl md:text-[3rem] leading-snug font-bold">
              Start building stuffs together!
            </h1>
            <p className="w-10/12 text-lg">
              Hello there, I'm sanket gawande, Full stack web developer
            </p>
            <div className="flex  text-[15px] items-center pt-8 space-x-4">
              <Link to="/about" className="btn-primary text-slate-800">
                Lets connect !
              </Link>
              <a
                href="https://sanket.vercel.app/resume%20-%20Google%20Docs_compressed.pdf"
                download={
                  "https://sanket.vercel.app/resume%20-%20Google%20Docs_compressed.pdf"
                }
                className="btn-ghost border-normal"
                target={"_blank"}
              >
                Download resume
              </a>
            </div>
          </div>
          <div className="w-full relative md:w-1/2 p-4  sm:p-8 md:px-20 order-1 md:order-1">
            <img
              src="/images/profile.webp"
              alt="Sanket Gawande"
              className="w-full  p-4 object-cover rounded-tr-[5rem] rounded-tl-[6rem]  rounded-br-[6rem] rounded-bl-[7rem] overflow-hidden grayscale hover:grayscale-[.5] duration-300 ease-in-out"
            />
            {/* floating icons */}

            <img
              src="/images/react.webp"
              alt="react"
              className="absolute top-0 h-14 shadow-lg w-14 left-0 bg-slate-800 p-2 rounded-full"
            />
            <img
              src="/images/javascript.webp"
              className="absolute top-5 h-16 shadow-lg w-16 left-8 bg-slate-800 p-2 rounded-full"
              alt="Javascript"
            />
            <img
              src="/images/nodejs.webp"
              className="absolute bottom-0 h-16 shadow-lg w-16 left-0 bg-slate-800 p-2 rounded-full"
              alt="Nodejs"
            />
            <img
              src="/images/mongodb.webp"
              className="absolute bottom-0 shadow-lg  h-14 w-14 right-0 bg-slate-800 p-2 rounded-full"
              alt="mongodb"
            />
            <img
              src="/images/typescript.webp"
              className="absolute bottom-0 shadow-lg  w-12 h-12 right-8 bg-slate-800 p-2 rounded-full"
              alt="typescript"
            />
          </div>
        </section>

        <section className="md:h-screen py-12 w-full border-t border-slate-700 md:border-none backdrop-filter backdrop-hue-rotate-45 md:p-20 bg-sky-500/5">
          <section className="w-full md:text-  mx-auto space-y-4 p-8">
            <h1 className="text-2xl md:text-[3rem] leading-snug font-bold">
              Transforming Ideas into Stunning Web Experiences
            </h1>
            <p className="text-sm md:text-lg">
              Experienced Full-Stack JavaScript Developer | React, Next.js,
              Gatsby.js, Node.js, Express.js
            </p>
            <Link
              target={"blank"}
              to="https:github.com/sanket-gawande"
              className="btn-primary text-slate-800"
            >
              View on github
            </Link>
          </section>
          <section className="w-full">
            <div className="scrollbar-hidden flex   overflow-x-scroll md:justify-center items-center p-6 md:p-12 space-x-6">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="w-2/3 md:w-1/3 shrink-0 lg:shrink lg:w-1/4 rounded-xl p-3 flex flex-col border-primary/20 border-2  bg-gray-800 shadow-lg"
                >
                  <section className="relative group rounded-xl aspect-[9/10] overflow-hidden">
                    <img
                      src={
                        "https://cdn.sanity.io/images/8y4chsdv/production/f760cd28bc51148d58957df1d6afce5d7835c04e-600x598.png"
                      }
                      alt={item.profile}
                      className=" object-cover h-full"
                    />
                    <div className="h-0 overflow-hidden opacity-0 group-hover:opacity-100 group-hover:h-full transition-all duration-200 bottom-0 absolute flex flex-col from-bg/50 via-bg/80 to-bg bg-gradient-to-b">
                      <p className="text-sm md:text-sm p-2 py-4 mt-auto font-medium text-slate-300 translate-y-12 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
                        {item.description}
                      </p>
                    </div>
                  </section>
                  <h4 className="text-md font-semibold pt-3 text-transparent bg-clip-text bg-gradient-to-br from-primary to-slate-300">
                    {item.profile}
                  </h4>
                </div>
              ))}
            </div>
          </section>
        </section>

        <section className="md:h-screen py-12 w-full border-t border-slate-700 md:border-none backdrop-filter -backdrop-hue-rotate-30 md:p-20 bg-green-500/5">
          <section className="w-full md:text-right mx-auto space-y-4 p-8">
           
            <h1 className="text-2xl md:text-[3rem] leading-snug font-bold">
              Embark on a Journey Through My Web Portfolio
            </h1>

            <p className="text-sm md:text-lg">
              Exploring Dynamic Web Creations Powered by React, Node.js, and
              More
            </p>
            <Link
              target={"blank"}
              to="https:github.com/sanket-gawande"
              className="btn-primary text-slate-800"
            >
              View on github
            </Link>
          </section>
          <section className="w-full">
           
          </section>
        </section>
      </section>
    </Layout>
  );
};

export default index;
export const Head: HeadFC = () => (
  <>
    <title>{"Home | Sanket Gawande (MERN)"}</title>
    <meta
      name="description"
      content={"Sanket Gawande, Portfolio, react, tailwindcss, Gatsby"}
    />
    <link rel="shortcut icon" href="/images/icon.png" type="image/png" />
  </>
);
