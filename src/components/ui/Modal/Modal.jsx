import React, { useEffect } from "react";
import "./Modal.scss";

export default function Modal({
  isOpen,
  onClose,
  children,
  closeLabel = "Close",
}) {
  // close on ESC
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    document.addEventListener("keydown", handleKey);

    // lock scroll
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal" role="dialog" aria-modal="true" onClick={onClose}>
      <button
        type="button"
        className="modal__close"
        aria-label="Close modal"
        onClick={onClose}
      >
        {closeLabel}
      </button>

      <div className="modal__panel" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
