
import {
  Link,
  useParams,
} from "react-router-dom";

import {
  ArrowLeft,
  ChevronRight,
  Home,
  Info,
} from "lucide-react";

import ProductGallery from "../components/product-details/ProductGallery";
import ProductOverview from "../components/product-details/ProductOverview";
import ProductSpecifications from "../components/product-details/ProductSpecifications";
import ProductPackaging from "../components/product-details/ProductPackaging";
import ProductAvailability from "../components/product-details/ProductAvailability";
import ProductEnquiry from "../components/product-details/ProductEnquiry";
import RelatedProducts from "../components/product-details/RelatedProducts";
import ProductNotFound from "../components/product-details/ProductNotFound";

import {
  getProductBySlug,
} from "../data/products";

import {
  ROUTES,
} from "../data/navigation";

import "./ProductDetailsPage.css";

export default function ProductDetailsPage() {
  const { slug } = useParams();

  const product = getProductBySlug(slug);

  if (!product) {
    return <ProductNotFound />;
  }

  return (
    <div
      key={product.slug}
      className="product-details-page"
    >
      {/* Product Breadcrumb */}
      <div className="product-details-breadcrumb-bar">
        <div className="product-details-container">
          <nav
            className="product-details-breadcrumb"
            aria-label="Breadcrumb"
          >
            <ol>
              <li>
                <Link to={ROUTES.HOME}>
                  <Home
                    size={15}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                  Home
                </Link>
              </li>

              <li>
                <ChevronRight
                  size={14}
                  aria-hidden="true"
                />

                <Link to={ROUTES.PRODUCTS}>
                  Products
                </Link>
              </li>

              <li>
                <ChevronRight
                  size={14}
                  aria-hidden="true"
                />

                <span aria-current="page">
                  {product.name}
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Product Details */}
      <section
        className="product-details-main"
        aria-labelledby="product-details-title"
      >
        <div className="product-details-container">
          <Link
            to={ROUTES.PRODUCTS}
            className="product-details-back-link"
          >
            <ArrowLeft
              size={17}
              strokeWidth={1.8}
              aria-hidden="true"
            />

            Back to All Products
          </Link>

          <div className="product-details-main-grid">
            <ProductGallery product={product} />

            <ProductOverview product={product} />
          </div>
        </div>
      </section>

      {/* Product Specifications */}
      <ProductSpecifications product={product} />

      {/* Packaging & Availability */}
      <section
        id="product-packaging-supply"
        className="product-details-supply"
        aria-labelledby="product-details-supply-title"
      >
        <div className="product-details-container">
          <div className="product-details-supply-heading">
            <div className="product-details-supply-eyebrow">
              <span aria-hidden="true" />

              PACKAGING &amp; SUPPLY

              <span aria-hidden="true" />
            </div>

            <h2 id="product-details-supply-title">
              Prepared for Your Requirements.

              <span>
                Focused on Your Market.
              </span>
            </h2>

            <p>
              Explore packaging options and supply
              arrangements for {product.name},
              with consideration for your business
              and destination market requirements.
            </p>
          </div>

          <div className="product-details-supply-grid">
            <ProductPackaging product={product} />

            <ProductAvailability product={product} />
          </div>

          <div className="product-details-supply-note">
            <Info
              size={18}
              strokeWidth={1.7}
              aria-hidden="true"
            />

            <p>
              Final packaging specifications, order
              quantities and supply arrangements are
              confirmed before order acceptance.
            </p>
          </div>
        </div>
      </section>

      {/* Product-Specific Enquiry */}
      <ProductEnquiry product={product} />

      {/* Related Products */}
      <RelatedProducts product={product} />
    </div>
  );
}
