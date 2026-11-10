```
src/
│
└── components/
    │
    └── Hero.tsx
```

Note - Mount inside `Home.tsx`

```

import Hero from "../components/Hero"


const Home = () => {
  return (
    <div>
      <Hero/>
    </div>
  )
}

export default Home

```

Now design it 

---

```
import img1 from "../assets/p1.jpg";
import img2 from "../assets/p2.jpg";
import img3 from "../assets/p3.jpg";
import img4 from "../assets/p4.jpg";


const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-200">
      {/* Left side */}

      <div className="relative w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 overflow-hidden">
        {/* Top-left triangle */}
        <div className="absolute inset-0 bg-linear-to-br from-red-400 via-blue-600 [clip-path:polygon(0_0,100%_0,0_45%)]"></div>

        {/* Bottom-left triangle */}
        <div className="absolute inset-0  bg-linear-to-tr from-green-300 via-blue-400 [clip-path:polygon(0_55%,0_100%,100%_100%)]"></div>

        {/* Content */}
        <div className="relative z-10 text-black">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-0.5 bg-blue-600"></p>
            <p className="font-medium text-sm md:text-base">Our Best Sellers</p>
          </div>

          <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>

          <div className="flex items-center gap-2">
            <p className="font-medium text-sm md:text-base">Shop Now</p>
            <p className="w-8 md:w-11 h-0.5 bg-blue-600"></p>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-1/2 grid grid-cols-2 gap-2 p-3 sm:p-4">
        <div className="overflow-hidden rounded-lg">
          <img
            src={img3}
            alt="Latest collection"
            className="w-full h-40 sm:h-48 lg:h-64 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="overflow-hidden rounded-lg">
          <img
            src={img4}
            alt="Featured collection"
            className="w-full h-40 sm:h-48 lg:h-64 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="overflow-hidden rounded-lg">
          <img
            src={img1}
            alt="New arrivals"
            className="w-full h-40 sm:h-48 lg:h-64 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="overflow-hidden rounded-lg">
          <img
            src={img2}
            alt="Popular products"
            className="w-full h-40 sm:h-48 lg:h-64 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

```

