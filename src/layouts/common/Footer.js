import React from "react";
import SocialItem from "../../components/SocialItem";
import SocialData from "../../data/Social";
import { Images } from "../../images/Images";
const left = [
  "home",
  "deal",
  "wholesale",
  "our story",
  "our partners",
  "our process",
  "1 million trees",
  "why we work with wood",
];
const right = [
  "shop by categories",
  "shop by wood type",
  "product categories",
  "deals/offers",
  "become an ambassador",
  "Blog",
  "faq",
  "customer reviews",
];
const Footer = () => {
  return (
    <div className="md:grid md:grid-cols-5 gap-x-4 xl:gap-x-10 wrapper py-14">
      <div className="font-semibold md:w-full text-green">
        <img src={Images.logo} alt="" className="mx-auto md:w-full" />
        <h4 className="pt-4 pb-2 text-5xl text-center md:text-2xl xl:pt-10 lg:text-3xl xl:text-5xl md:text-left">100,000+</h4>
        <p className="text-center uppercase md:text-left">trees planted to date</p>
      </div>
      <p className='py-5 text-center text-black md:hidden'>
              Rainforest Bowls strives to provide the best of what Mother Nature
              has to offer throughout our entire process—from sourcing and
              packaging to our Earth-focused mission. By partnering with
              multigenerational family businesses of master artisans all over
              the world, we offer timeless pieces curated for your home.
            </p>
      <div className="grid-cols-4 col-span-4">
        <div className="hidden mb-5 md:flex gap-x-4 xl:gap-x-10 ">
          <div className="flex flex-col flex-1 gap-y-5">
            <h4 className="heading-footer">About us</h4>
            <p>
              Rainforest Bowls strives to provide the best of what Mother Nature
              has to offer throughout our entire process—from sourcing and
              packaging to our Earth-focused mission. By partnering with
              multigenerational family businesses of master artisans all over
              the world, we offer timeless pieces curated for your home.
            </p>
            <a href="mailto:sales@rainforestbowls.com">
              sales@rainforestbowls.com
            </a>
            <a href="tel:8054520659">(805)-452-0659</a>
          </div>
          <div className="flex-1 ">
            <h4 className="pb-5 heading-footer">Navigation</h4>
            <div className="flex capitalize gap-x-3">
              <div className="flex-1">
                {left.map((item) => (
                  <div className="pb-2" key={item}>
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex-1">
                {right.map((item) => (
                  <div className="pb-2" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-5 border-b border-borderColor"></div>
          <div className="flex flex-col items-center justify-center gap-5 md:justify-between md:flex-row ">
            <span>
              © {new Date().getFullYear()}, Rainforest Bowls. All rights
              reserved.
            </span>
            <div className="flex gap-x-2">
              {SocialData.map((social) => (
                <SocialItem data={social} key={social.name}></SocialItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
