import React, { useState, useCallback } from 'react';
import { Inners } from '../../styles/Common';
import { Faqs } from './Style';
import faqData from '../../data/faqData';
import img_3d_bubble from '../../assets/images/img_3d_bubble.png';

function Faq () {
    const [isChecked, setIsChecked] = useState(Array(faqData.length).fill(false));

    const onFaqCheckChange = useCallback((checkIndex) => (e) => {
        setIsChecked(isChecked.map((check, index) => {
            return check = index === checkIndex ? e.target.checked : false;
        }));
    }, [isChecked]);

    const faqList = faqData.map((data, index) => {
        const on = isChecked[index] ? 'on' : '';

        return (
            <li key={data.id} className={`faq-list${index} ${on}`}>
                <div className="faq-list-tit">
                    <input type="checkbox" className="faq-list-check" id={'faq-list-check' + index} onChange={onFaqCheckChange(index)} checked={isChecked[index]} />
                    <label htmlFor={'faq-list-check' + index}>
                        <b>{data.title}</b>
                        <div className="faq-list-tit-mark"></div>
                    </label>
                </div>
                <div className="faq-list-desc">
                    <div className="faq-list-desc-txt">
                        {data.description.map((desc, index) => {
                            return (
                                <p key={index}>{desc}</p>
                            );
                        })}
                    </div>
                </div>
            </li>
        ); 
    });

    return (
        <Faqs>
            <Inners>
                <article className="faq-con">
                    <div className="faq-tit">
                        <figure className="faq-tit-img">
                            <img src={img_3d_bubble} alt="" />
                        </figure>
                        <h1 className="faq-tit-tit">자주 묻는 질문</h1>
                    </div>
                    <ul className="faq-list">
                        {faqList}
                    </ul>
                </article>
            </Inners>
        </Faqs>
    );
}

export default Faq;