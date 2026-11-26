
import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  X,
  ImageOff,
} from "lucide-react";

import "./ProductGallery.css";

const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.5;

export default function ProductGallery({
  product,
}) {
  const images = [
    ...new Set(
      [
        product.image,
        ...(product.gallery || []),
      ].filter(Boolean)
    ),
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [zoom, setZoom] = useState(MIN_ZOOM);

  const dialogRef = useRef(null);
  const imageButtonRef = useRef(null);
  const triggerRef = useRef(null);

  const imageCount = images.length;
  const hasMultipleImages = imageCount > 1;

  const activeImage = images[activeIndex];

  const selectImage = (index) => {
    setActiveIndex(index);
    setZoom(MIN_ZOOM);
  };

  const previousImage = () => {
    if (!hasMultipleImages) return;

    setActiveIndex((previous) =>
      (previous - 1 + imageCount) % imageCount
    );

    setZoom(MIN_ZOOM);
  };

  const nextImage = () => {
    if (!hasMultipleImages) return;

    setActiveIndex((previous) =>
      (previous + 1) % imageCount
    );

    setZoom(MIN_ZOOM);
  };

  const increaseZoom = () => {
    setZoom((previous) =>
      Math.min(previous + ZOOM_STEP, MAX_ZOOM)
    );
  };

  const decreaseZoom = () => {
    setZoom((previous) =>
      Math.max(previous - ZOOM_STEP, MIN_ZOOM)
    );
  };

  const resetZoom = () => {
    setZoom(MIN_ZOOM);
  };

  const openPreview = (event) => {
    const dialog = dialogRef.current;

    if (!dialog || dialog.open) return;

    triggerRef.current = event?.currentTarget;

    setZoom(MIN_ZOOM);
    dialog.showModal();
  };

  const closePreview = () => {
    dialogRef.current?.close();
  };

  const handleDialogClose = () => {
    setZoom(MIN_ZOOM);

    const trigger = triggerRef.current;

    if (trigger?.isConnected) {
      trigger.focus();
    } else {
      imageButtonRef.current?.focus();
    }
  };

  const handleDialogKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      previousImage();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      nextImage();
    }

    if (event.key === "+" || event.key === "=") {
      event.preventDefault();
      increaseZoom();
    }

    if (event.key === "-") {
      event.preventDefault();
      decreaseZoom();
    }

    if (event.key === "0") {
      event.preventDefault();
      resetZoom();
    }
  };

  const handleGalleryKeyDown = (event) => {
    if (!hasMultipleImages) return;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      previousImage();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      nextImage();
    }
  };

  useEffect(() => {
    const dialog = dialogRef.current;

    return () => {
      if (dialog?.open) {
        dialog.close();
      }
    };
  }, []);

  if (!imageCount) {
    return (
      <div className="product-gallery-unavailable">
        <ImageOff size={48} strokeWidth={1.3} />
        <p>Product image unavailable</p>
      </div>
    );
  }

  return (
    <div className="product-gallery">
      {/* Main Image */}
      <div
        className="product-gallery-main"
        role="group"
        aria-label={`${product.name} image gallery`}
        onKeyDown={handleGalleryKeyDown}
      >
        <button
          ref={imageButtonRef}
          type="button"
          className="product-gallery-image-button"
          onClick={openPreview}
          aria-label={`Enlarge ${product.name} image`}
        >
          <img
            src={activeImage}
            alt={`${product.name} - image ${activeIndex + 1}`}
            className="product-gallery-image"
            decoding="async"
          />
        </button>

        <div
          className="product-gallery-label"
          aria-hidden="true"
        >
          PRODUCT GALLERY
        </div>

        <button
          type="button"
          className="product-gallery-fullscreen"
          onClick={openPreview}
          aria-label="Open fullscreen image preview"
          title="Fullscreen preview"
        >
          <Maximize2 size={21} strokeWidth={1.7} />
        </button>

        {hasMultipleImages && (
          <>
            <button
              type="button"
              className="product-gallery-navigation previous"
              onClick={previousImage}
              aria-label="Previous product image"
            >
              <ChevronLeft size={25} strokeWidth={1.8} />
            </button>

            <button
              type="button"
              className="product-gallery-navigation next"
              onClick={nextImage}
              aria-label="Next product image"
            >
              <ChevronRight size={25} strokeWidth={1.8} />
            </button>

            <div
              className="product-gallery-counter"
              aria-live="polite"
            >
              {activeIndex + 1} / {imageCount}
            </div>
          </>
        )}
      </div>

      {/* Image Thumbnails */}
      {hasMultipleImages && (
        <div
          className="product-gallery-thumbnails"
          role="group"
          aria-label="Product image thumbnails"
        >
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              className={`product-gallery-thumbnail ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => selectImage(index)}
              aria-label={`View product image ${index + 1}`}
              aria-pressed={activeIndex === index}
            >
              <img
                src={image}
                alt={`${product.name} thumbnail ${index + 1}`}
                loading="lazy"
                decoding="async"
              />
            </button>
          ))}
        </div>
      )}

      <div className="product-gallery-hint">
        <ZoomIn size={17} strokeWidth={1.7} />
        <span>Click image to enlarge</span>
      </div>

      {/* Fullscreen Image Preview */}
      <dialog
        ref={dialogRef}
        className="product-gallery-dialog"
        aria-labelledby="product-gallery-dialog-title"
        onClose={handleDialogClose}
        onKeyDown={handleDialogKeyDown}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closePreview();
          }
        }}
      >
        <div className="product-gallery-dialog-content">
          {/* Preview Header */}
          <header className="product-gallery-dialog-header">
            <div className="product-gallery-dialog-heading">
              <h2 id="product-gallery-dialog-title">
                {product.name}
              </h2>

              <span>
                Image {activeIndex + 1} of {imageCount}
              </span>
            </div>

            <button
              type="button"
              className="product-gallery-dialog-close"
              onClick={closePreview}
              aria-label="Close image preview"
            >
              <X size={25} strokeWidth={1.7} />
            </button>
          </header>

          {/* Zoomable Image Area */}
          <div
            className="product-gallery-dialog-stage"
            tabIndex={0}
            aria-label="Zoomed image viewing area"
          >
            <div
              className="product-gallery-zoom-canvas"
              style={{
                width: `${zoom * 100}%`,
                height: `${zoom * 100}%`,
              }}
            >
              <img
                src={activeImage}
                alt={`${product.name} enlarged image`}
                draggable={false}
              />
            </div>
          </div>

          {/* Preview Controls */}
          <footer className="product-gallery-dialog-toolbar">
            {hasMultipleImages && (
              <button
                type="button"
                onClick={previousImage}
                aria-label="Previous image"
                title="Previous image"
              >
                <ChevronLeft size={23} />
              </button>
            )}

            <button
              type="button"
              onClick={decreaseZoom}
              disabled={zoom <= MIN_ZOOM}
              aria-label="Zoom out"
              title="Zoom out"
            >
              <ZoomOut size={21} />
            </button>

            <span
              className="product-gallery-zoom-value"
              aria-live="polite"
            >
              {Math.round(zoom * 100)}%
            </span>

            <button
              type="button"
              onClick={increaseZoom}
              disabled={zoom >= MAX_ZOOM}
              aria-label="Zoom in"
              title="Zoom in"
            >
              <ZoomIn size={21} />
            </button>

            <button
              type="button"
              onClick={resetZoom}
              disabled={zoom === MIN_ZOOM}
              aria-label="Reset zoom"
              title="Reset zoom"
            >
              <RotateCcw size={19} />
            </button>

            {hasMultipleImages && (
              <button
                type="button"
                onClick={nextImage}
                aria-label="Next image"
                title="Next image"
              >
                <ChevronRight size={23} />
              </button>
            )}
          </footer>

          <div className="product-gallery-dialog-hint">
            Use + and − to zoom, 0 to reset and Esc to close.
          </div>
        </div>
      </dialog>
    </div>
  );
}
