"use client";

import OpeningBox from "./component/OpeningBox";
import style from "./page.module.css";
import openings from "./assets/dummy/openings";
import React from "react";
import { motion } from "framer-motion";
import { BsFacebook } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import Link from "next/link";
export default function Home() {
  window.addEventListener(`contextmenu`, (e) => {
    e.preventDefault();
});
  return (
    <motion.main className={style.homeMain}>
      <div className={style.heading}>
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            when: "beforeChildren",
            mass: 0.4,
            damping: 8,
            staggerChildren: 0.2,
          }}
        >
          <div className={style.headingTitle}>Our Openings</div>
          <div className={style.headingQuotation}>
            If you believe you're a good match, don't hesitate to apply. We're
            looking forward to a meeting.
          </div>
          <div className={style.jobOpeningBox}>
            {openings.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <OpeningBox item={item} />
                </React.Fragment>
              );
            })}
          </div>
        </motion.div>

        <div className={style.contactBox}>
          <motion.div
            className={style.contactSection}
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{
              delay: 1.2,
              type: "spring",
              stiffness: 60,
            }}
          >
            <div className={style.contactTitle}>
              Any Queries? Feel Free to contact us:
            </div>
            <div className={style.contactDetails}>
              <Link href="https://www.facebook.com/syvartech">
                <motion.div
                  className={style.contactFacebook}
                  whileHover={{ scale: 1.2, originX: 0 }}
                >
                  <BsFacebook />
                  <motion.span whileHover={{ color: "#FFB736" }}>
                    https://www.facebook.com/syvartech
                  </motion.span>
                </motion.div>
              </Link>
              <Link href="tel:+977-9840-575-736">
                <motion.div
                  className={style.contactPhone}
                  whileHover={{ scale: 1.2, originX: 0 }}
                >
                  <BiSolidPhoneCall />
                  <motion.span whileHover={{ color: "#FFB736" }}>
                    +977-9840-575-736
                  </motion.span>
                </motion.div>
              </Link>
              <Link href="mailto:info@syvar.com.np">
                <motion.div
                  className={style.contactMail}
                  whileHover={{ scale: 1.2, originX: 0 }}
                >
                  <GrMail />
                  <motion.span whileHover={{ color: "#FFB736" }}>
                    info@syvar.com.np
                  </motion.span>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className={style.footer}>
          &copy; All Right Reserved by Syvar Technology
        </div>
      </div>
    </motion.main>
  );
}
