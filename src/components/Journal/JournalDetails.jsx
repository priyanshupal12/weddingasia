import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import blogOne from "../../assets/blog-one";

const Author = () => {
  return (
    <div className="flex items-center mb-6">
      <div className="mr-2">
        <img
          src={blogOne}
          alt=""
          className="max-w-full h-auto rounded-full border"
          width="47"
        />
      </div>
      <div>
        <p>
          By<b> Alan Bell</b>
        </p>
      </div>
      <p className="opacity-75">
        <FontAwesomeIcon icon={faCalendarAlt} className="ms-4 me-2" />
        August 10th, 2020
      </p>
    </div>
  );
};

const Contents = () => (
  <>
    <h1 className="text-2xl md:text-3xl leading-snug font-medium mb-6">
      A Petite Bride’s Guide to Wedding Dress Shopping
    </h1>
    <p className="text-lg leading-relaxed opacity-75">
      Dear petite bride to be, if you find yourself at 5’3″ or under, this guide
      is tailor-made for you! Wedding dress shopping can be a magical
      experience, but it can also present unique challenges, especially for
      those with petite frames. Fear not! With the right tips and tricks, you’ll
      navigate the world of bridal fashion with ease and find the dress of your
      dreams. These tips will not only help you with your bridal shopping but
      will also help you navigate and enhance your personal style in general.
      Understanding Your Body Type: Before delving into the vast array of
      wedding dress options, it’s crucial to understand your body type.
      Understanding your body shape is a powerful tool for creating a wardrobe
      that enhances your best features and makes you feel confident. Instead of
      fixating on rigid categorizations, focus on identifying which areas of
      your body you might want to visually balance. There are five general body
      shapes—rectangular, triangular, hourglass, apple, and pear. By resonating
      with one of the primary body shapes, you can start making informed style
      choices that highlight your assets and harmonize your overall look.
    </p>
    <p>
        <strong>Rectangle Body Shape</strong>
        The rectangle shape, often described as a column, features a straight silhouette with minimal waist definition. Your bust, shoulders, and hips are nearly the same size, with your waist being less than 25% smaller than your bust. If this is you, your goal might be to create curves and define your waist.
    </p>
    <p>
        <strong>Pear Body Shape</strong>
        With a pear shape, your hips are the most prominent feature, measuring at least 5% larger than your bust and shoulders. Your waist is the smallest part of your body, giving you a beautifully defined lower body. Dressing a pear shape often involves balancing the lower and upper body by adding volume to the shoulders and bust.
    </p>
  </>
);

const JournalDetails = () => {
  return (
    <section className="ezy__blogdetails3 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container px-4">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-7">
            <h2 className="text-2xl leading-none font-bold md:text-6xl md:leading-none mb-6">
              Blog Details
            </h2>
            <p className="text-lg opacity-80 mb-2">
              Teaching is a noble profession. Think about the most respected
              persons in our society. Yes, they are the teachers. If you ask
              someone about some of his favourite persons, it is most likely to
              find a teacher of him in his answer. So, being a teacher is an
              amazing thing.
            </p>
          </div>

          <div className="col-span-12">
            <div className="my-6 md:my-12 w-full">
              <img
                src="https://cdn.easyfrontend.com/pictures/blog-details/blogDetails3.jpg"
                alt=""
                className="w-full max-h-[700px] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 justify-center">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <div className="md:px-20">
              <Author />
              <Contents />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JournalDetails;
