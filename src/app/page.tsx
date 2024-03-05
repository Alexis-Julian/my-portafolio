import Image from "next/image";

export default async function Home() {
  function AboutMe() {
    return (
      <section className="w-[90%] min-h-[300px] mx-auto  ">
        <h4 className="text-center font-extrabold text-2xl mb-2">Sobre mi</h4>
        <p className="text-wrap text-md ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa voluptate at inventore dolore blanditiis ullam atque, nam magnam, laudantium, temporibus quam ratione repellendus dolores
          reprehenderit. Doloribus rerum laudantium dicta molestias!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa voluptate at inventore dolore blanditiis ullam atque, nam magnam,
          laudantium, temporibus quam ratione repellendus dolores reprehenderit. Doloribus rerum laudantium dicta molestias!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa voluptate at
          inventore dolore blanditiis ullam atque, nam magnam, laudantium, temporibus quam ratione repellendus dolores reprehenderit. Doloribus rerum laudantium dicta molestias!
        </p>
      </section>
    );
  }
  function Experience() {
    return (
      <section className="min-h-[300px]">
        <h4 className="text-center text-2xl font-extrabold ">Experiencia</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt rerum at explicabo ratione perferendis libero consequuntur dolore, amet optio sint reprehenderit deserunt repudiandae quo vel
          maiores voluptatibus dolores, earum ad!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt rerum at explicabo ratione perferendis libero consequuntur dolore, amet optio sint
          reprehenderit deserunt repudiandae quo vel maiores voluptatibus dolores, earum ad!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt rerum at explicabo ratione perferendis libero
          consequuntur dolore, amet optio sint reprehenderit deserunt repudiandae quo vel maiores voluptatibus dolores, earum ad!
        </p>
      </section>
    );
  }
  function Projects() {
    return (
      <section className="min-h-[300px]">
        <h4 className="text-center text-2xl font-extrabold">Proyectos</h4>
      </section>
    );
  }
  function Skills() {
    return (
      <section className="min-h-[300px]">
        <h4 className="text-center text-2xl font-extrabold">Skills</h4>
      </section>
    );
  }
  function Presentation() {
    return <section className="min-h-[300px]">Presentacion</section>;
  }

  const sections = [Presentation, AboutMe, Experience, Projects, Skills];

  return (
    <main className="h-full w-[50%]  grid grid-row-5  border-x-2 bordeer-black/5 mx-auto overflow-x-hidden  relative   text-black">
      {sections.map((section) => {
        return section();
      })}
    </main>
  );
}
{
  /* <div className="bg-cover bg-center blur-sm h-full w-full bg-[url('/abstract-timekeeper.svg')] absolute "></div> */
}
