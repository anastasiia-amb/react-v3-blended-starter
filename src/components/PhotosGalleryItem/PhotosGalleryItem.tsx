import GridItem from "../GridItem/GridItem";
import { Photo } from "../../types/photo";

import styles from "./PhotosGalleryItem.module.css";

interface PhotosGalleryItemProps {
  photo: Photo;
  selectPhoto: (photo: Photo) => void;
}

export default function PhotosGalleryItem(
  photo,
  selectPhoto
): PhotosGalleryItemProps {
  return (
    <GridItem>
      <div
        className={styles.thumb}
        style={{
          backgroundColor: "avg_color",
          borderColor: "avg_color",
        }}
        onClick={() => selectPhoto(photo)}
      >
        <img src={photo.src.large} alt={photo.src.original} />
      </div>
    </GridItem>
  );
}
