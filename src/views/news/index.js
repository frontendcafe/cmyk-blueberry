import React from "react";
import { useWindow } from "../../hooks/useWindow";

import CardMainMobile from "../../components/CardMainMobile";

export const News = () => {

    const size = useWindow();
    
    return (
        <section className={`news`}>
            <div className="news__cards">
                {size.width < 576 ? <CardMainMobile /> : "desktop"}
            </div>
        </section>
    );
};

export default News;