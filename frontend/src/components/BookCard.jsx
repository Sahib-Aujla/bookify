import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

export default function BookCard({ item }) {
  return (
    <div
      className="block relative p-0.5 bg-contain bg-no-repeat md:max-w-[24rem]"
      style={{
        backgroundImage: `url(${item.imageUrl})`,
      }}
      height={10}
      width={20}
    >
      <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
        <h5 className="h5 mb-5">{item.title}</h5>
        <p className="body-2 mb-6 text-n-3">
          {item.shortDescription.substr(0, 100)}...
        </p>
        <div className="flex items-center mt-auto">
          <img src={item.imageUrl} width={48} height={48} alt={item.title} />
          <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
            Explore more
          </p>
          <Arrow />
        </div>
      </div>

      {item.light && <GradientLight />}

      <div
        className="absolute inset-0.5 bg-n-8"
        style={{ clipPath: "url(#benefits)" }}
      >
        <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
          {item.imageUrl && (
            <img
              src={item.imageUrl}
              width={380}
              height={362}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>

      <ClipPath />
    </div>
  );
}
