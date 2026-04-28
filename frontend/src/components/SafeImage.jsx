import React, { useState } from "react";

/**
 * SafeImage — wraps <img> with graceful broken-image handling.
 * If the source fails to load, shows a soft ivory placeholder
 * with a subtle label so the layout never collapses.
 */
const SafeImage = ({ src, alt, className = "", fallbackLabel = "Image unavailable", ...rest }) => {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`${className} flex items-center justify-center bg-[#efe9dc] text-[#8a6a3a]`}
        aria-label={alt || fallbackLabel}
        role="img"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || ""}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
      {...rest}
    />
  );
};

export default SafeImage;
