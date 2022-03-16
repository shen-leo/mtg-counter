import React from "react";
import background from "../../img/cultivate_wallpaper.jpeg";

function Background() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      Hello World
    </div>
  );
}

export default Background