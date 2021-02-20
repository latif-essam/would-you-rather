import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    {itemIds.map(({ i, label, src }) => (
      <MenuItem i={i} key={label} label={label} src={src} />
    ))}
  </motion.ul>
);

const itemIds = [
  { i: 1, label: "Home", src: "./../images/1.jpg" },
  { i: 2, label: "Dashboard", src: "./../images/1.jpg" },
  { i: 3, label: "New Question", src: "./../images/1.jpg" },
  { i: 4, label: "Account", src: "./../images/1.jpg" },
];
