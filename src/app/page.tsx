'use client'

import Photo from "@/components/Photo";
import photoList from "@/data/photoList";

export default function Home() {
  return (
    <div className="mx-2">
      <h1 className="text-center text-4xl font-bold my-10 md:text-6xl">Galeria de Fotos</h1>
      <section className="container mx-auto grid pb-2 grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
        {photoList.map(photo => <Photo key={photo.id} id={photo.id} url={photo.url} />)}
      </section>
    </div>
  );
}
