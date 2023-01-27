import React from "react";

import "./styles.css";

const GoogleMap = () => {
  return (
    <div className="map-responsive">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2908.7451122980674!2d-4.0589493845171!3d43.1938587791397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4919328ab98133%3A0xb9cee063208af643!2sCas%C3%B3n%20de%20la%20Marquesa!5e0!3m2!1ses!2ses!4v1674838841000!5m2!1ses!2ses"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
