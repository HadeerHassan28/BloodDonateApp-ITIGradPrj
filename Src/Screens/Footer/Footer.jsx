import React from "react";
import styles from "./Footer.module.css";
import logoREv from "../../heart-rev.png";
import { AiFillFacebook } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import {t} from "../../../i18n/i18n";

const Footer = () => {
  return (
    <>
      <div
        className={`${styles.footerItem} text-center position-relative mt-5`}
      >
        <div className={`${styles.main}`}>
          <img
            src={logoREv}
            alt=""
            style={{ width: "50px", paddingBottom: "10px" }}
          />
          <Text className={`${styles.header} h2`}>
            {" "}
            {JSON.parse(t('BloodDonation-footer'))}
          </Text>
        </div>
        <Text className="text-light fs-7 text-center">
          {t("blood-donation-definition")}
          <Text className={`main-color text-center mt-2 fw-bold`}>
            {" "}
            {t("Join us in our efforts to make a difference in the world.")}
          </Text>
        </Text>
        <AiFillFacebook
          color="white"
          size={30}
          className="me-5"
        ></AiFillFacebook>
        <SiGmail color="white" size={30} className="me-5"></SiGmail>
        <AiFillLinkedin color="white" size={30}></AiFillLinkedin>
        <Text className="text-light position-absolute bottom-0 start-0 end-0 mb-0 p-2">
          {JSON.parse(t("copyright"))}
        </Text>
        <Link to="terms" className="text-decoration-none">
          <p className=" text-light my-2 pt-2">{t("Terms & Conditions")}</p>
        </Link>
      </div>
    </>
  );
};

export default Footer;
