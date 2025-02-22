// filepath: /var/www/ky_drive/kyton_thaundi/components/ui/button.js
import React from 'react';

export function Button({ children, asChild, className }) {
  const Component = asChild ? 'div' : 'button';
  return (
    <Component className={`bg-blue-500 text-white py-2 px-4 rounded ${className}`}>
      {children}
    </Component>
  );
}
