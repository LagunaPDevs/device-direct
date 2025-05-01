import { useState, useRef } from "react";

export function usePopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpenClose = () => setOpen(!open);

  return {anchorRef, open, handleOpenClose}
}
