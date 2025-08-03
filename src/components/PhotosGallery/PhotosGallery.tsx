import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import PhotosGalleryItem from "../PhotosGalleryItem/PhotosGalleryItem";

interface PhotoGalleryProps {
  photos: Photo[];
  selectPhoto: (photo: Photo) => void;
}

export default function PhotosGallery(photos, selectPhoto): PhotoGalleryProps {
  return (
    <Grid>
      {array.map(() => (
        <GridItem key={photos.id}>
          <PhotosGalleryItem photo={photo} />
        </GridItem>
      ))}
    </Grid>
  );
}
