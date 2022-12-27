import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CreateProductContext } from "../context/ProductContext";
import { useEffect } from "react";
import PageNav from "../otherComponent/PageNav";
import styled from "styled-components";
import PriceFormat from "../helpers/PriceFormat";
import ImgComponent from "../otherComponent/ImgComponent";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import Star from "../otherComponent/Star";
import AddToCart from "../otherComponent/AddToCart";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const Wrapper = styled.section`
    .container {
      width: 100%;
      padding: 0rem 12rem;
    }
    .product_images {
      display: flex;
      align-items: center;
    }
    .product-data {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 2rem;
      .product-data-warranty {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;
        margin-bottom: 1rem;
        .product-warranty-data {
          text-align: center;
          .warranty-icon {
            background-color: rgba(220, 220, 220, 0.5);
            border-radius: 50%;
            width: 4rem;
            height: 4rem;
            padding: 0.6rem;
          }
          p {
            font-size: 1.4rem;
            padding-top: 0.4rem;
          }
        }
      }
      .product-data-price {
        font-weight: bold;
      }
      .product-data-real-price {
        color: ${({ theme }) => theme.colors.btn};
      }
      .product-data-info {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        font-size: 1.8rem;
        span {
          font-weight: bold;
        }
      }
      hr {
        max-width: 100%;
        width: 90%;
        /* height: 0.2rem; */
        border: 0.1rem solid #000;
        color: red;
      }
    }
    .product-images {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .page_loading {
      font-size: 3.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    h2 {
      text-transform: capitalize;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      padding: 0 2.4rem;
    }
  `;
  const { id } = useParams();
  console.log(id);

  const { FetchSingleProduct, isSingleLoading, SingleProduct } =
    useContext(CreateProductContext);
  console.log(SingleProduct);

  const {
    id: alias,
    name,
    company,
    price,
    category,
    description,
    reviews,
    shipping,
    stars,
    stock,
    image,
  } = SingleProduct;

  useEffect(() => {
    FetchSingleProduct(`${API}/${id}`);
  }, []);

  if (isSingleLoading) {
    return <div className="page-loading">Loading.......</div>;
  }
  return (
    <Wrapper>
      <PageNav title={name} />
      <div className="container">
        <div className="grid grid-two-column">
          {/* Images Section */}
          <div className="product-images">
            <ImgComponent imgs={image} />
          </div>
          {/* Product Section  */}
          <div className="product-data">
            <h2>{name}</h2>
            <Star stars={stars} review={reviews} />
            <p className="product-data-price">
              MRP:{" "}
              <del>
                <PriceFormat price={price + 250000} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day: <PriceFormat price={price} />
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>
              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Harsh Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>
            <div className="product-data-info">
              <p>
                {" "}
                Available:{" "}
                <span> {stock > 0 ? "In Stock" : "Not Available"} </span>{" "}
              </p>
              <p>
                ID : <span>{id}</span>
              </p>
              <p>
                Brand : <span>{company}</span>
              </p>
            </div>
            <hr />
            {stock > 0 && <AddToCart product={SingleProduct} />}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleProduct;
