"use client";
import React, { FC, useCallback, useState } from "react";
import styles from "../../styles/movie.module.css";
import Modal from "./Modal";
import SlideModal from "./SlideModal";
import { useStateValue } from "@/app/context/contextProvider";
import { actionType } from "@/app/context/reducer";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface MoviemodalProps {}

const Moviemodal: FC<MoviemodalProps> = ({}) => {
  const [{ modalShow, movieStream }, dispatch] = useStateValue();
  const router = useRouter();

  enum ScreenSize {
    Small = "SMALL",
    Medium = "MEDIUM",
    Large = "LARGE",
  }

  const checkScreenSize = () => {
    if (typeof window !== "undefined") {
      const screenWidth = window.innerWidth;

      if (screenWidth < 640) {
        return ScreenSize.Small;
      } else if (screenWidth < 1024) {
        return ScreenSize.Medium;
      } else {
        return ScreenSize.Large;
      }
    }
  };

  const screenSize = checkScreenSize();

  const displayCart = () => {
    dispatch({
      type: actionType.SET_MODAL_SHOW,
      modalShow: !modalShow,
    });
  };

  const view = () => {
    displayCart();
    router.push(`/listings/${movieStream.imdbID}`);
  };

  const bodyContent = (
    <div className={styles.container}>
      <div className={styles.card}>
        <Image
          src={movieStream?.Poster}
          alt="Card Background"
          className={styles.image}
          fill
        />
      </div>
      <p className={styles.title}>{movieStream?.Title}</p>
      <p className={styles.paragraph}> {movieStream?.Plot}</p>
      <button type="submit" className={styles.button} onClick={view}>
        Watch
      </button>
    </div>
  );

  return (
    <div>
      {screenSize === ScreenSize.Small ? (
        <SlideModal isOpen={modalShow} onClose={displayCart} />
      ) : (
        <Modal
          children={bodyContent}
          isOpen={modalShow}
          onClose={displayCart}
        />
      )}
    </div>
  );
};

export default Moviemodal;
