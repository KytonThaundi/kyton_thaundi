// filepath: /var/www/ky_drive/kyton_thaundi/components/ui/card.js
import React from 'react';

export function Card({ children }) {
  return (
    <div className="border rounded shadow p-4">
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return (
    <div className="p-2">
      {children}
    </div>
  );
}
