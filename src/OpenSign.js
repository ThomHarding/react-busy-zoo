import React from 'react';

export default function OpenSign({ isOpen }) {
  return (
    <div>
      {
        isOpen 
          ? 'zoo\'s open come right in :)' 
          : 'get out of my entire zip code'
      }
    </div>
  );
}