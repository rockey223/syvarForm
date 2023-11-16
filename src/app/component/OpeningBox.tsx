'use client'
import React from "react";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import "./openingBox.css";
import {motion} from 'framer-motion'
import Link from "next/link";
type opening = {
  id: number;
  position: string;
  tags: string[];
  link: string;
};

const OpeningBox = ({ item }: { item: opening } ) => {
  const { id, position, tags, link } = item;
  return (
    <>
      <motion.div className="opening-box" initial={{ y: "100vh" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: item.id * 0.4 + 0.2,
                    type: "spring",
                    stiffness: 60,
                  }}>
        <div className="opening-box-content">
          <PiSuitcaseSimpleLight className="opening-icon" />
          <div className="opening-desc">
            <div className="opening-title">{position}</div>
            <div className="opening-tags">
              {tags.map((tag, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className="opening-tag">{tag}</div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
        <Link href={link}>
        
        
        <motion.button className="opening-box-apply-btn" whileHover={{scale: 0.9}}>
          <div className="applynow-btn" >Apply Now</div>
        </motion.button>
        </Link>
      </motion.div>
    </>
  );
};

export default OpeningBox;
