"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

const RENDER_IMAGES = Array.from({ length: 16 }, (_, i) => ({
  src: `/renders/render-${String(i + 1).padStart(2, "0")}.png`,
  alt: `Render arquitectónico ${i + 1}`,
}));

function ZoomIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
      <path d="M11 8v6" />
      <path d="M8 11h6" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export default function RendersGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const openLightbox = (index: number) => setLightboxIndex(index);

  const goToPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === null || prev === 0 ? RENDER_IMAGES.length - 1 : prev - 1));
  }, [lightboxIndex]);

  const goToNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === null || prev === RENDER_IMAGES.length - 1 ? 0 : prev + 1));
  }, [lightboxIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, goToPrev, goToNext]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {RENDER_IMAGES.map((img, index) => (
          <button
            key={img.src}
            type="button"
            onClick={() => openLightbox(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg border transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--card-bg)",
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
            />
            <div
              className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              aria-hidden
            >
              <span className="text-white">
                <ZoomIcon />
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada del render"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Cerrar"
          >
            <CloseIcon />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            className="absolute left-2 rounded-full p-3 text-white/80 transition-colors hover:bg-white/10 hover:text-white sm:left-4"
            aria-label="Anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div
            className="relative max-h-[90vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={RENDER_IMAGES[lightboxIndex].src}
              alt={RENDER_IMAGES[lightboxIndex].alt}
              width={1920}
              height={1080}
              className="max-h-[90vh] w-auto object-contain"
              sizes="90vw"
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-2 rounded-full p-3 text-white/80 transition-colors hover:bg-white/10 hover:text-white sm:right-4"
            aria-label="Siguiente"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
