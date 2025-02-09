import style from "./Footer.module.scss";
import Head from "next/head";

import {
  facebook,
  instagram,
  twitter,
  moiz,
  abdulrafay,
} from "../../utils/constant";
export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
        </Head>
        <div className={style.about}>
          <h4>About</h4>
          <div>
            <p>
              Business Executive Club is aimed at empowering individuals
              regarding the corporate business dynamics and conducting
              informative industry meetup sessions to enhance the knowledge base
              of individuals and train them for professional business world.
            </p>
          </div>
        </div>
        <div className={style.social}>
          <h4>Social</h4>
          <div>
            <a href={facebook} target="_blank" className="fa fa-facebook"></a>
            <a href={instagram} target="_blank" className="fa fa-instagram"></a>
            <a href={twitter} target="_blank" className="fa fa-twitter"></a>
          </div>
        </div>
        <div className={style.contact}>
          <h4>Contact</h4>
          <div>
            <p>
              Address: University of Central Punjab, 1 - Khayaban-e-Jinnah Road,
              Johar Town, Lahore.
            </p>
            <p className={style.email}>Email: bec.edu.pk@gmail.com</p>
          </div>
        </div>
      </div>

      <div className={style.poweredby}>
        <div>
          Powered by{" "}
          <span className={style.link}>
            <a href={abdulrafay} target="_blank" rel="noopener noreferrer">
              AR
            </a>{" "}
            &{" "}
            <a href={moiz} target="_blank" rel="noopener noreferrer">
              MZ
            </a>{" "}
            Solution
          </span>
        </div>
      </div>
    </div>
  );
}
