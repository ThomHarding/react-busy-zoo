import React from 'react';

export default function AnimalEmoji({ animal }) {
  return (
    <>
      {animal === 'wolf' && <span>🐺</span>}
      {animal === 'elephant' && <span>🐘</span>}
      {animal === 'snail' && <span>🐌</span>}
    </>
  );
}