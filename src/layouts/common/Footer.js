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
    <div className="grid grid-cols-5 gap-x-10 wrapper py-14">
      <div className="flex flex-col items-center font-semibold text-green">
        <img src={Images.logo} alt="" className="w-full" />
        <h4 className="pt-10 pb-2 text-5xl">100,000+</h4>
        <p className="uppercase ">trees planted to date</p>
      </div>
      <div className="grid-cols-4 col-span-4">
        <div className="flex mb-5">
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
            <div className="flex capitalize gap-y-5">
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
          <div className="flex justify-between">
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
