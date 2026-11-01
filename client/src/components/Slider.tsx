
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import image1 from '../assets/bannr1.jpg'
import image2 from '../assets/bannr2.jpg'


const slides = [
  {
    image: image1,
    alt: "Featured collection",
  },
  {
    image: "https://mdbcdn.b-cdn.net/img/new/slides/042.webp",
    alt: "New arrivals",
  },
  {
    image:image2,
    alt: "Featured products",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    setCurrentIndex((index) =>
      index === 0 ? slides.length - 1 : index - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((index) => (index + 1) % slides.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label="Featured products"
    >
      <div className="relative aspect-[16/7] w-full bg-gray-100">
        {slides.map((slide, index) => (
          <img
            key={slide.image}
            src={slide.image}
            alt={slide.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              index === currentIndex
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition hover:bg-black/75"
      >
        <FiChevronLeft size={24} />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition hover:bg-black/75"
      >
        <FiChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : undefined}
            className={`h-2.5 rounded-full transition-all ${
              index === currentIndex
                ? "w-7 bg-white"
                : "w-2.5 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
