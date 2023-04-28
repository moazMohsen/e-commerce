import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Container } from "../StyledComponents";
import { useSelector } from "react-redux";

import ProductDetail from "../components/products/ProductDetail/ProductDetail";
import RelatedProduct from "../components/products/ProductDetail/RelatedProduct";

const ProductDetailPage = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("productID");
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState();
  const [category, setCategory] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Object.keys(products[0]).forEach((category) => {
      let product = products[0][category].filter(
        (product) => product.id === +productId
      );
      if (product.length > 0) {
        setProduct(product);
        setCategory(category);
        setLoading(false);
      }
    });
  }, [productId, products]);
  useEffect(() => {
    window.scrollTo(0, 70);
  }, [productId]);

  return (
    <>
      <Container>
        {loading ? (
          <p>loading...</p>
        ) : (
          <>
            {product.map((product) => (
              <ProductDetail product={product} key={product.id} />
            ))}
            {<RelatedProduct products={products[0][category]} />}
          </>
        )}
      </Container>
    </>
  );
};

export default ProductDetailPage;
