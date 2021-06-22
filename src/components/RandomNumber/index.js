import React from 'react';

const min = 1;
const max = 98;

export default function Random(min, max) {
    return Math.random() * (max - min) + min;
  }
