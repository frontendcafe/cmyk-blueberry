import React from "react";
import { useWindow } from "../../hooks/useWindow";
import './styles.scss';

import CardMainMobile from "../../components/CardMainMobile";
import CardMainDesktop from "../../components/CardMainDesktop";

export const News = () => {

    const size = useWindow();
    
    return (
        <section className={`news`}>
            <div className="news__cards">
                {size.width < 576 ? <CardMainMobile /> : <CardMainDesktop />}
            </div>
        </section>
    );
};

export default News;