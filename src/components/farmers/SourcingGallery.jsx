
import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Camera,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  Info,
  ImageOff,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";

import {
  galleryCategories,
  sourcingGallery,
  getGalleryImages,
  getGalleryCategoryCounts,
} from "../../data/sourcingGallery";

import "./SourcingGallery.css";

export default function SourcingGallery() {
  const reduceMotion = useReducedMotion();

  const [activeCategory, setActiveCategory] =
    useState("all");

  const [activeImageId, setActiveImageId] =
    useState(null);

  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const closeButtonRef = useRef(null);

  const filteredImages =
    getGalleryImages(activeCategory);

  const categoryCounts =
    getGalleryCategoryCounts();

  const activeImageIndex =
    filteredImages.findIndex(
      (item) => item.id === activeImageId
    );

  const activeImage =
    filteredImages[activeImageIndex] || null;

  const hasMultipleImages =
    filteredImages.length > 1;

  const hasIllustrativeImages =
    sourcingGallery.some(
      (item) => item.illustrative
    );

  // Open the native dialog after React has
  // rendered the selected image.
  useEffect(() => {
    const dialog = dialogRef.current;

    if (
      activeImageId !== null &&
      dialog &&
      !dialog.open
    ) {
      dialog.showModal();

      closeButtonRef.current?.focus();
    }
  }, [activeImageId]);

  // Close the dialog if the component unmounts.
  useEffect(() => {
    const dialog = dialogRef.current;

    return () => {
      if (dialog?.open) {
        dialog.close();
      }
    };
  }, []);

  function handleCategoryChange(category) {
    setActiveCategory(category);
  }

  function openPreview(imageId, event) {
    triggerRef.current = event.currentTarget;

    setActiveImageId(imageId);
  }

  function closePreview() {
    dialogRef.current?.close();
  }

  function handleDialogClose() {
    setActiveImageId(null);

    if (triggerRef.current?.isConnected) {
      triggerRef.current.focus();
    }

    triggerRef.current = null;
  }

  function navigateImage(direction) {
    if (
      !hasMultipleImages ||
      activeImageIndex < 0
    ) {
      return;
    }

    const nextIndex =
      (
        activeImageIndex +
        direction +
        filteredImages.length
      ) % filteredImages.length;

    setActiveImageId(
      filteredImages[nextIndex].id
    );
  }

  function handleDialogKeyDown(event) {
    if (!hasMultipleImages) {
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();

      navigateImage(-1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();

      navigateImage(1);
    }

    // Escape is handled natively by the dialog.
  }

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
      closePreview();
    }
  }

  return (
    <section
      id="sourcing-gallery"
      className="sourcing-gallery"
      aria-labelledby="sourcing-gallery-title"
    >
      <div className="sourcing-gallery-container">
        {/* Section Heading */}
        <motion.div
          className="sourcing-gallery-heading"
          initial={{
            opacity: reduceMotion ? 1 : 0,
            y: reduceMotion ? 0 : 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
          }}
        >
          <div className="sourcing-gallery-eyebrow">
            <span aria-hidden="true" />

            A GLIMPSE INTO AGRICULTURE

            <span aria-hidden="true" />
          </div>

          <h2 id="sourcing-gallery-title">
            Beyond the Produce.

            <span>
              Closer to Our Roots.
            </span>
          </h2>

          <p>
            Explore the agricultural environment,
            regional market ecosystem and fresh
            produce sourcing concepts that inspire
            our vision at Sharanga Global Exports.
          </p>
        </motion.div>

        {/* Gallery Filters */}
        <div
          className="sourcing-gallery-filters"
          role="group"
          aria-label="Filter sourcing gallery"
        >
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`sourcing-gallery-filter ${
                activeCategory === category.id
                  ? "sourcing-gallery-filter-active"
                  : ""
              }`}
              aria-pressed={
                activeCategory === category.id
              }
              onClick={() =>
                handleCategoryChange(category.id)
              }
            >
              <span>{category.label}</span>

              <span className="sourcing-gallery-filter-count">
                {categoryCounts[category.id]}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Summary */}
        <div className="sourcing-gallery-summary">
          <div className="sourcing-gallery-summary-label">
            <Camera
              size={19}
              strokeWidth={1.7}
              aria-hidden="true"
            />

            Agricultural Gallery
          </div>

          <p
            role="status"
            aria-live="polite"
          >
            Showing {filteredImages.length} of{" "}
            {sourcingGallery.length} photographs
          </p>
        </div>

        {/* Image Grid */}
        <motion.div
          layout={!reduceMotion}
          className={`sourcing-gallery-grid ${
            activeCategory === "all"
              ? "sourcing-gallery-grid-masonry"
              : ""
          }`}
        >
          <AnimatePresence
            initial={false}
            mode="popLayout"
          >
            {filteredImages.map((item) => (
              <motion.div
                key={item.id}
                layout={!reduceMotion}
                className={`sourcing-gallery-item ${
                  activeCategory === "all" &&
                  item.layout === "tall"
                    ? "sourcing-gallery-item-tall"
                    : ""
                }`}
                initial={{
                  opacity: reduceMotion ? 1 : 0,
                  scale: reduceMotion ? 1 : 0.96,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: reduceMotion ? 1 : 0.96,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.3,
                }}
              >
                <button
                  type="button"
                  className="sourcing-gallery-image-button"
                  onClick={(event) =>
                    openPreview(item.id, event)
                  }
                  aria-label={`View ${item.title}`}
                  aria-haspopup="dialog"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                  />

                  <span
                    className="sourcing-gallery-image-overlay"
                    aria-hidden="true"
                  />

                  <span
                    className="sourcing-gallery-expand-icon"
                    aria-hidden="true"
                  >
                    <Maximize2
                      size={20}
                      strokeWidth={1.7}
                    />
                  </span>

                  <span className="sourcing-gallery-image-content">
                    <span className="sourcing-gallery-image-category">
                      {item.categoryLabel}
                    </span>

                    <span className="sourcing-gallery-image-title">
                      {item.title}
                    </span>
                  </span>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Gallery State */}
        {filteredImages.length === 0 && (
          <div className="sourcing-gallery-empty">
            <ImageOff
              size={40}
              strokeWidth={1.4}
              aria-hidden="true"
            />

            <h3>No Images Available</h3>

            <p>
              Please select another gallery category.
            </p>

            <button
              type="button"
              onClick={() =>
                handleCategoryChange("all")
              }
            >
              View All Images
            </button>
          </div>
        )}

        {/* Gallery Information */}
        {hasIllustrativeImages && (
          <div className="sourcing-gallery-note">
            <Info
              size={18}
              strokeWidth={1.7}
              aria-hidden="true"
            />

            <p>
              This gallery includes illustrative
              agricultural photographs. They are
              intended to represent agricultural
              sourcing concepts and do not imply
              ownership of farms, facilities or
              specific supplier operations.
            </p>
          </div>
        )}
      </div>

      {/* Fullscreen Image Preview */}
      <dialog
        ref={dialogRef}
        className="sourcing-gallery-dialog"
        aria-labelledby="sourcing-gallery-dialog-title"
        onClose={handleDialogClose}
        onKeyDown={handleDialogKeyDown}
        onClick={handleBackdropClick}
      >
        {activeImage && (
          <div className="sourcing-gallery-dialog-inner">
            {/* Dialog Header */}
            <div className="sourcing-gallery-dialog-header">
              <div className="sourcing-gallery-dialog-heading">
                <span>
                  {activeImage.categoryLabel}
                </span>

                <h2 id="sourcing-gallery-dialog-title">
                  {activeImage.title}
                </h2>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                className="sourcing-gallery-dialog-close"
                onClick={closePreview}
                aria-label="Close image preview"
              >
                <X
                  size={24}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </button>
            </div>

            {/* Main Preview Image */}
            <div className="sourcing-gallery-dialog-stage">
              <img
                key={activeImage.id}
                src={activeImage.image}
                alt={activeImage.alt}
                decoding="async"
              />

              {hasMultipleImages && (
                <>
                  <button
                    type="button"
                    className="sourcing-gallery-dialog-arrow sourcing-gallery-dialog-prev"
                    onClick={() => navigateImage(-1)}
                    aria-label="Previous image"
                  >
                    <ChevronLeft
                      size={28}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </button>

                  <button
                    type="button"
                    className="sourcing-gallery-dialog-arrow sourcing-gallery-dialog-next"
                    onClick={() => navigateImage(1)}
                    aria-label="Next image"
                  >
                    <ChevronRight
                      size={28}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </button>
                </>
              )}
            </div>

            {/* Image Description */}
            <div className="sourcing-gallery-dialog-footer">
              <div
                className="sourcing-gallery-dialog-description"
                aria-live="polite"
                aria-atomic="true"
              >
                <p>{activeImage.description}</p>

                {activeImage.illustrative && (
                  <span>
                    Illustrative photograph
                  </span>
                )}
              </div>

              <div className="sourcing-gallery-dialog-counter">
                {activeImageIndex + 1} /{" "}
                {filteredImages.length}
              </div>
            </div>

            {/* Keyboard Instructions */}
            <div className="sourcing-gallery-dialog-hint">
              {hasMultipleImages
                ? "Use arrow keys to navigate. Press Esc to close."
                : "Press Esc to close the image preview."}
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
