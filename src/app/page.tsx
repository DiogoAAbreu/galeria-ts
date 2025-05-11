'use client'

import Modal from "@/components/Modal";
import Photo from "@/components/Photo";
import photoList from "@/data/photoList";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>('');

  const openModal = (url: string) => {
    setSelectedImage(url);
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <div className="mx-2">
      <h1 className="text-center text-4xl font-bold my-10 md:text-6xl">Galeria de Fotos</h1>
      <section className="container mx-auto grid pb-2 grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
        {photoList.map(photo =>
          <Photo key={photo.id}
            url={photo.url}
            openModal={openModal} />)}
      </section>
      {showModal && <Modal
        url={selectedImage}
        closeModal={closeModal} />}
    </div>
  );
}
