import Section from "../Section/Section";
import Container from "../Container/Container";
import { getPhotos } from "../../services/photos";
import { useState } from "react";
import { Photo } from "../../types/photo";
import PhotosGallery from "../PhotosGallery/PhotosGallery";

export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<>(null);

  const handleSearch = async (query: string) => {
    const data = await getPhotos(query);
    setPhotos(data.photos);
    console.log(data.photos);
  };

  const selectPhoto = (photo: Photo | null) => {
    setSelectedPhoto(photo);
  };

  return (
    <>
      <Section>
        <Container>
          <Form onSubmit={handleSearch} />
          {/* Компоненти застосунку */}
          <PhotosGallery photos={photos} selectPhoto={selectPhoto} />
        </Container>
      </Section>
    </>
  );
}
