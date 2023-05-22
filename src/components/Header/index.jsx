import React from 'react';
import styles from './style.module.css';
import logo from './img/logo.png'
import cart from './img/shopping-cart.png'

export default function Index() {
  return (
    <div id={styles.header}>
      <div id={styles.logo}>
        <a href="">
          <img src={logo} width="63" />
        </a>
      </div>
      <div id={styles.cartWrapper}>
        <div id={styles.accountButton}>
          <p>Hi, <a href="">Log in</a></p>
        </div>
        <div id={styles.cart}>
          <div id={styles.cartButton}>
            <a href=""><img src={cart} width="25" /></a>
          </div>
          <div id={styles.productCount}>
            <p>0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
