import React from "react";
import { Element , Link as LinkScroll} from "react-scroll";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 ">
      <Element name="hero">
        <div className="container">
          <div className="z-2 relative max-w-512 max-lg:max-w-388">
            <div className="caption small-2 test-p3 uppercase">
              Video Editing
            </div>
            <div className="mb-6 text-p4 h1 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:leading-12 max-md:text-5xl">
              Amazingly simple
            </div>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              We designed XORA AI Video Editor to 
              be an easy to use, quick to learn, 
              and surprisingly powerful.
            </p>
            <LinkScroll to="features" offset={-250} spy smooth >
              <Button icon='/images/zap.svg' childern={'Try it now'}></Button>
            </LinkScroll>
          </div>
          <div className="absolute -top-32  w-[1230px] pointer-events-none left-[calc(50%-320px)] hero-img_res">
            <img src="/images/hero.png" alt="hero" className="size-1230 max-lg:h-auto " />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
