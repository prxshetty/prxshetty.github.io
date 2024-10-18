"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Tooltip } from 'react-tooltip';
import { Roboto_Mono } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faKaggle, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Add the icons to the library
library.add(faTwitter, faKaggle, faLinkedin, faGithub, faFileAlt, faChevronLeft, faChevronRight);

const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: ['300'] });

// ... (rest of your existing code)

export default function Home() {
  // ... (your existing component code)
}
