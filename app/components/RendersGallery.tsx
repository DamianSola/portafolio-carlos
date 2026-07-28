import fs from "fs";
import path from "path";
import RendersGalleryClient from "./RendersGalleryClient";

function getRenderImages() {
  const rendersDir = path.join(process.cwd(), "public", "renders");
  const files = fs.readdirSync(rendersDir)
    .filter((file) => file.toLowerCase().endsWith(".png"))
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }))
    .map((file) => ({
      src: `/renders/${file}`,
      alt: `Render arquitectónico ${file}`,
    }));

  return files;
}

export default function RendersGallery() {
  const images = getRenderImages();

  return <RendersGalleryClient images={images} />;
}
