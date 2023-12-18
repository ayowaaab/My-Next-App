import React from "react";
import styles from  "./ProductCard.module.css"


const ProductCard = () => {
  return (
    <>
      <div className={styles.card}>
        <h1>My card</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eos
          nisi voluptatibus facere et ab enim expedita, nemo tempore veniam.
        </p>
        <button>View More</button>
      </div>
    </>
  );
};

export default ProductCard;
