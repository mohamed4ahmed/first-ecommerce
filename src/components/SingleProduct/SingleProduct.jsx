import {
  CircularProgress,
  Container,
  Button,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./SingleProduct.elements";
import { FaAngellist, FaWhatsapp } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import BlockContent from "@sanity/block-content-to-react";

const SingleProduct = ({ product, special }) => {
  const classes = useStyles();
  return (
    <div className={classes.singleProduct}>
      {!product ? (
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
      ) : (
        <div className={classes.productComponent}>
          <Container maxWidth="lg">
            <div className={classes.product}>
              <div className={classes.breadcrumbs}>
                <Link to="/products">PRODUCTS </Link>
                <Link to="/products"> | {product.projectType} </Link>
                <p> | {product.title}</p>
              </div>
              <div className={classes.body}>
                <div className={classes.productImg}>
                  <img
                    src={product.mainImage.asset.url}
                    alt={product.mainImage.asset._id}
                    className={classes.img}
                  />
                </div>
                <div className={classes.content}>
                  <div className={classes.header}>
                    <Typography variant="h4" className={classes.headerText}>
                      {product.title}
                    </Typography>
                    {/* <p className={classes.price}>{product.price} $</p> */}
                    <Link to="/membership/">
                      <Button
                        variant="contained"
                        className={`${classes.button}`}
                      >
                        Request now 
                      </Button>
                    </Link>
                    <p className={classes.phone}>
                      {" "}
                      Call for order:{" "}
                      <a href="tel:+966539941921">+966539941921</a>
                    </p>
                    <p className={classes.phone}>
                      {" "}
                      Order By WhatsApp:{" "}
                      <a
                        href="whatsapp://send?text=order-from-website&phone=+966539941921"
                        className={classes.whatsappicon}
                      >
                        <FaWhatsapp />
                      </a>
                    </p>
                    {/* <p className={classes.phone}>
                      {" "}
                      Order By Messenger:{" "}
                      <a
                        href="https://www.messenger.com/t/61566517260195/?messaging_source%3Apages%message_shortlink"
                        className={classes.whatsappicon}
                        target="__blank"
                        aria-label="Messenger"
                        rel="noreferrer"
                      >
                        <FaFacebookMessenger />
                      </a>
                    </p> */}
                  </div>
                </div>
              </div>
              <div className={classes.blockContent}>
                <BlockContent
                  blocks={product.body}
                  projectId="1spqvbhe" //sanityID
                  dataset="production"
                />
              </div>
              <div className={classes.headerRecentPosts}>
                <Typography
                  variant="h5"
                  className={classes.headerRecentPostsText}
                >
                  YOU MAY LIKE
                </Typography>
              </div>
              <div className={classes.listProduct}>
                {!special ? (
                  <div className={classes.spinner}>
                    <CircularProgress />
                  </div>
                ) : (
                  special.map((product, index) => (
                    <div className={classes.specialProduct} key={index}>
                      <div className={classes.productImage}>
                        <Link to={"/products/" + product.slug.current}>
                          <LazyLoadImage
                            src={product.mainImage.asset.url}
                            alt={product.mainImage.asset.alt}
                            className={`${classes.img} ${classes.imgSpecial}`}
                            effect="blur"
                          />
                          {product.new && (
                            <span className={classes.newLabel}>
                              new <FaAngellist />
                            </span>
                          )}
                          {product.bestSeller && (
                            <span className={classes.trendLabel}>
                              <AiOutlineLike /> Bestseller
                            </span>
                          )}
                        </Link>
                      </div>
                      <div className={classes.contentProduct}>
                        <p className={classes.title}>{product.title}</p>
                        {/* <p className={classes.price}>{product.price} $</p> */}
                        <Link to={"/products/" + product.slug.current}>
                          <Button
                            variant="contained"
                            className={`${classes.button} ${classes.buttonProduct}`}
                          >
                            DETAILS
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
