import React, { useState } from "react";

const WhatsAppModal = () => {
  const [open, setOpen] = useState(false);

  const phoneNumber = "2348012345678"; 
  const defaultMessage = "Hello! I saw your portfolio and want to get in touch.";

  return (
    <>
      {/* Floating WhatsApp icon */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow z-50"
        aria-label="WhatsApp"
      >
        {/* Inline WhatsApp SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-7 h-7"
        >
          <path d="M20.52 3.48A11.897 11.897 0 0012 0C5.373 0 0 5.373 0 12c0 2.114.555 4.09 1.518 5.84L0 24l6.36-1.515A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12 0-3.195-1.246-6.19-3.48-8.52zM12 22c-1.883 0-3.63-.5-5.18-1.366l-.37-.22-3.78.902.98-3.68-.24-.38C2.497 16.556 2 14.847 2 12 2 6.486 6.486 2 12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10zm5.2-7.8c-.27-.135-1.6-.785-1.85-.875-.25-.09-.435-.135-.62.135-.185.27-.715.875-.875 1.06-.16.185-.32.21-.59.075-.27-.135-1.14-.42-2.17-1.34-.8-.715-1.34-1.595-1.5-1.865-.16-.27-.02-.415.115-.55.12-.12.27-.32.405-.48.135-.16.18-.27.27-.45.09-.185.045-.345-.022-.48-.065-.135-.62-1.5-.85-2.055-.225-.545-.455-.475-.62-.485l-.53-.01c-.185 0-.48.07-.73.345s-.96.94-.96 2.29c0 1.35.985 2.65 1.12 2.835.135.185 1.93 2.945 4.68 4.125.655.285 1.16.455 1.555.585.65.21 1.245.18 1.715.11.525-.075 1.6-.655 1.825-1.29.225-.635.225-1.18.16-1.29-.065-.11-.245-.18-.515-.315z" />
        </svg>
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-80 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4 text-green-600">
              Message Me on WhatsApp
            </h2>
            <p className="text-gray-700 mb-4">
              Click below to start a direct conversation.
            </p>

            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                defaultMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-block bg-green-500 hover:bg-green-600 text-white text-center py-2 rounded-xl font-semibold transition"
            >
              Send Message
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppModal;
