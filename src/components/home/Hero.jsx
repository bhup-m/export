
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectFade,
  Pagination,
  Navigation,
  A11y,
} from "swiper/modules";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import farmImage from "../../assets/images/hero/hero-farm.jpg";
import productsImage from "../../assets/images/hero/hero-products.jpg";
import exportImage from "../../assets/images/hero/hero-export.jpg";

import "./Hero.css";

const slides = [
  {
    id: 1,
    image: farmImage,
    subtitle: "ROOTED IN INDIA. CONNECTED GLOBALLY.",
    title: "From Indian Farms",
    highlight: "To Global Markets.",
    description:
      "Connecting India's agricultural produce with businesses across international markets through responsible sourcing and trusted partnerships.",
    primaryButton: "Explore Products",
    primaryLink: "#products",
    secondaryButton: "Contact Us",
    secondaryLink: "#contact",
  },
  {
    id: 2,
    image: productsImage,
    subtitle: "FRESHNESS. QUALITY. COMMITMENT.",
    title: "Nature's Finest.",
    highlight: "Delivered Globally.",
    description:
      "Discover our range of fresh agricultural produce, with a focus on quality, freshness and international market requirements.",
    primaryButton: "View Our Products",
    primaryLink: "#products",
    secondaryButton: "Our Farmers",
    secondaryLink: "#farmers",
  },
  {
    id: 3,
    image: exportImage,
    subtitle: "BUILDING GLOBAL PARTNERSHIPS.",
    title: "Connecting Markets.",
    highlight: "Growing Together.",
    description:
      "Building lasting relationships between Indian agricultural suppliers and international buyers.",
    primaryButton: "Global Markets",
    primaryLink: "#markets",
    secondaryButton: "Let's Connect",
    secondaryLink: "#contact",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const animation = (delay = 0) => ({
    initial: {
      opacity: reduceMotion ? 1 : 0,
      y: reduceMotion ? 0 : 25,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: reduceMotion ? 0 : 0.7,
      delay: reduceMotion ? 0 : delay,
      ease: "easeOut",
    },
  });

  return (
    <section
      id="home"
      className="hero-section"
      aria-label="Sharanga Global Exports introduction"
    >
      <Swiper
        modules={[
          Autoplay,
          EffectFade,
          Pagination,
          Navigation,
          A11y,
        ]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={reduceMotion ? 0 : 1000}
        loop={true}
        autoplay={
          reduceMotion
            ? false
            : {
                delay: 6500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
        }
        pagination={{ clickable: true }}
        navigation={true}
        onSlideChange={(swiper) =>
          setActiveIndex(swiper.realIndex)
        }
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="hero-slide">
              {/* Background Image */}
              <div
                className="hero-background"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              />

              {/* Dark Overlay */}
              <div className="hero-overlay" />

              {/* Main Content */}
              <div className="hero-container">
                {activeIndex === index && (
                  <div className="hero-content">
                    {/* Subtitle */}
                    <motion.div
                      {...animation(0.1)}
                      className="hero-subtitle"
                    >
                      <span className="hero-gold-line" />
                      <span>{slide.subtitle}</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                      {...animation(0.25)}
                      className="hero-title"
                    >
                      {slide.title}

                      <span className="hero-highlight">
                        {slide.highlight}
                      </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                      {...animation(0.4)}
                      className="hero-description"
                    >
                      {slide.description}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                      {...animation(0.55)}
                      className="hero-actions"
                    >
                      <a
                        href={slide.primaryLink}
                        className="hero-btn-primary"
                      >
                        {slide.primaryButton}
                        <ArrowUpRight size={19} />
                      </a>

                      <a
                        href={slide.secondaryLink}
                        className="hero-btn-secondary"
                      >
                        {slide.secondaryButton}
                        <ArrowRight size={18} />
                      </a>
                    </motion.div>
                  </div>
                )}
              </div>

              {/* Slide Number */}
              <div className="hero-slide-number">
                <span>0{index + 1}</span>
                <span className="hero-number-divider" />
                <span>0{slides.length}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
