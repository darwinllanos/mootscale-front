// Puedes poner este componente en cualquier archivo, por ejemplo, FloatingWhatsappButton.tsx
export const Whatsapp = () => (
  <a
    href="https://wa.me/573172313500" // Reemplaza con tu número
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 rounded-full shadow-lg p-4 flex items-center justify-center transition-transform duration-300 hover:scale-110"
    aria-label="WhatsApp"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="white"
      viewBox="0 0 24 24"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.59 1.382 5.09L2 22l4.91-1.382A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.64 0-3.17-.5-4.45-1.36l-.32-.21-2.92.82.82-2.92-.21-.32A7.963 7.963 0 0 1 4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8zm4.13-6.19c-.22-.11-1.3-.64-1.5-.71-.2-.07-.34-.11-.48.11-.14.22-.55.71-.67.86-.12.15-.25.16-.47.05-.22-.11-.93-.34-1.77-1.09-.65-.58-1.09-1.29-1.22-1.51-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.36.07-.14.04-.27-.02-.38-.06-.11-.48-1.16-.66-1.59-.17-.41-.35-.35-.48-.36-.12-.01-.27-.01-.42-.01-.15 0-.38.05-.58.27-.2.22-.77.75-.77 1.83s.79 2.13.9 2.28c.11.15 1.56 2.38 3.79 3.23.53.18.94.29 1.26.37.53.13 1.01.11 1.39.07.43-.04 1.3-.53 1.48-1.04.18-.51.18-.95.13-1.04-.05-.09-.2-.14-.42-.25z"/>
    </svg>
  </a>
);