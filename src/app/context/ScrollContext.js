'use client'

import { createContext } from 'react';

const ScrollContext = createContext({
  sectionsInView: {}
});

export default ScrollContext;