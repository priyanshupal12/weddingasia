import React from "react";


const blogs = [
  {
    title: "A Petite Bride’s Guide to Wedding Dress Shopping",
    description:
      "Dear petite bride to be, if you find yourself at 5’3″ or under, this guide is tailor-made for you! Wedding dress shopping can be a",

    image:
      "https://weddingasiaofficial.com/wp-content/uploads/2024/06/xWA-13th-Mar24_-4523-F-min-1024x683.jpg.pagespeed.ic.OXtQSVO12j.webp",
  },
  {
    title: "DESIGN IS CHANGING, BUT STYLE ENDURES”: JJ VALAYA",
    description:
      "The couture king and master of ornamentation talks about his latest Ottoman collection, his Hollywood collaboration, bridal wear and the digital move.",
    image:
      "https://weddingasiaofficial.com/wp-content/uploads/2024/03/x7-1.jpeg.pagespeed.ic.NkRzxJhZJ3.webp",
  },
  {
    title: "The evolution of haute couture",
    description:
      "The confluence of traditional textiles, embroideries and weaves with contemporary western silhouettes has helped Indian couture and bridal wear evolve an entirely new design and",

    image:
      "https://weddingasiaofficial.com/wp-content/uploads/2024/03/xHaute_Couture_Thumbnail4-1.jpg.pagespeed.ic.SfyRKgVR7Q.webp",
  },
  {
    title: "Signature Weddings by Pullman New Delhi, Aerocity",
    description:
      "Signature Weddings by Pullman’ an exclusive Wedding roadshow held on 23rd March 2022 at the Peacock Ballroom., Pullman New Delhi, Aerocity.",

    image:
      "https://weddingasiaofficial.com/wp-content/uploads/2021/03/xThumbnail-1.jpg.pagespeed.ic.WWjujaBbNA.webp",
  },
  {
    title: "Suit Up! Differently",
    description:
      "Stealing pages from Aditi Rao Hydari’s lookbook for wedding season inspiration.",

    image:
      "https://weddingasiaofficial.com/wp-content/uploads/2024/03/xcover_image_1-1.jpeg.pagespeed.ic.DRZQoZkXwV.webp",
  },
  {
    title:
      "The new normal in fashion will remain what was always normal”: Leena Singh",
    description:
      "Leena Singh, co-founder of the iconic fashion label Ashima-Leena is among the original ladies of Delhi’s fashion scene. Her flagship store is at Emporio, New",

    image:
      "https://weddingasiaofficial.com/wp-content/uploads/2019/01/xLeena_Singh_Thumbnail-leena-1.jpg.pagespeed.ic.rS1pu0dkJX.webp",
  },
];

const BlogItem = ({ blog }) => {
  const { title, description, image } = blog;

  return (
    <article className="rounded-lg shadow-lg bg-white dark:bg-[#1E2735] dark:shadow-none overflow-hidden p-3 md:p-6 h-full">
      <img src={image} alt="" className="h-auto w-full rounded-lg" />
      <div className="mt-6 mb-3">
        <h4 className="font-medium text-2xl mb-2">{title}</h4>
        <p className="opacity-60 mt-3 mb-6">{description}</p>
        <a
          href="#!"
          className="bg-transparent hover:bg-blue-600 border border-blue-600 hover:text-white py-2 px-5 rounded transition"
        >
          Read More
        </a>
      </div>
    </article>
  );
};

const JournalPage = () => {
  return (
    <section className="ezy__blog10 light py-14 md:py-24 text-stone-800 bg-white dark:bg-[#0b1727] dark:text-white overflow-hidden">
      <div className="container px-8 md:px-24">
        <div className="grid grid-cols-12 justify-center">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 lg:col-end-11 text-center">
            <h2 className="text-[32px] lg:text-[45px] leading-none font-bold mb-4">
              Heal the world with banking blog.
            </h2>
            <p className="text-lg font-medium opacity-80 lg:px-12 mb-9">
              Banking crises have developed many times throughout history when
              one or more risks have emerged for a banking sector as a whole.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-6 mt-3 md:mt-12 text-center gap-x-6">
          {blogs.map((blog, i) => (
            <div
              className="col-span-6 md:col-span-3 lg:col-span-2 mt-6"
              key={i}
            >
              <BlogItem blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default JournalPage;
