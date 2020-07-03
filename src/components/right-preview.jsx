import React from "react";
import './right-preview.scss'
const RightPreview=({imgUrl,text,alt})=>(
    <div className="col preview">
      <img className="preview__image" src={imgUrl} alt={alt} />
      <section className="preview__section">
        <h2 className="preview__title">{text}</h2>
      </section>
    </div>
)
export default RightPreview;