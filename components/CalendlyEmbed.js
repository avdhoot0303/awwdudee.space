import React, { useEffect } from "react";

const CalendlyEmbed = ({ url }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }, []);

  return (
    <div class="calendly-inline-widget"
    data-url={url}
    data-resize="true"
    style="min-width:320px;height:700px;">
    </div>

    
  );
};

export default CalendlyEmbed;