import { GridItem } from "./Grid-Item";

export default function GridSection({
  title,
  items,
  className = "",
  itemClassName = "",
  columns = 3,
}) {
  const getColumnsClass = () => {
    switch (columns) {
      case 2:
        return "md:grid-cols-2";
      case 3:
        return "md:grid-cols-3";
      case 4:
        return "md:grid-cols-4";
      default:
        return "md:grid-cols-3";
    }
  };

  return (
    <section className={`w-full ${className}`}>
      <div className="container mx-auto px-4">
        <div className="heading lg:pt-12 lg:pb-10 pb-8">
          {title && (
            <h2 className="text-xl  lg:text-5xl font-semibold mb-6 text-gray-800 text-center ">
              {title}
            </h2>
          )}
          <div className="border-1 border-[#0C8582] w-30 items-center text-center m-auto mt-2 "></div>
        </div>

        <div className={`grid grid-cols-1 ${getColumnsClass()} gap-6`}>
          {items.map((item, index) => (
            <GridItem
              key={index}
              title={item.title}
              description={item.description}
              image={item.icon}
              hoverImage={item.image}
              className={itemClassName}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
