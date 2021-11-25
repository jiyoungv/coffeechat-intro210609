import React, { useCallback, useState } from 'react';
import { Inners } from '../../styles/Common';
import { Usages } from './Style';
import usageData from '../../data/usageData';
import { IsMobile } from '../../utils/mediaQuery';

function Usage () {
    const [tab, setTab] = useState(0);

    const onUsageTab = useCallback((activeIndex) => () => {
        setTab(activeIndex);
    }, []);

    const usageTabControl = usageData.map((data, index) => {
        return (
            <li key={data.id} className={index === tab ? 'on' : ''}>
                <h6>
                    <button type="button" title={IsMobile() ? data.titleM : data.title} onClick={onUsageTab(index)}>
                        {IsMobile() 
                            ? data.titleM
                                ? data.titleM
                                : data.title // 모바일이 없으면 데스크탑 데이터
                            : data.title
                        }
                    </button>
                </h6>
            </li>
        );
    });

    const usageTabText = usageData.map((data, index) => {
        // 텍스트
        if (!data.contents) return '';
        const txts = data.contents?.map((content, index2) => {
            return (
                <p key={index2}>{content}</p>
            )
        });

        // 리스트
        const lists = data.lists 
            ? IsMobile() 
                ? data.listsM
                    ? data.listsM?.map((list, index2) => { // 모바일 리스트
                        return (
                            <small key={index2} className="xsmall">{list}</small>
                        );
                    }) 
                    : data.lists?.map((list, index2) => { // 데스크탑 리스트
                        return (
                            <small key={index2} className="xsmall">{list}</small>
                        );
                    }) 
                : data.lists?.map((list, index2) => { // 데스크탑 리스트
                    return (
                        <small key={index2} className="xsmall">{list}</small>
                    );
                })
            : '';

        return (
            <div className={`usage-tab-txt-con usage-tab-txt-con${index} ${index === tab ? 'on' : ''} ${index === 2 ? 'long' : ''}`}>
                {txts}
                {lists}
            </div>
        );
    });

    const usageTabImg = usageData.map((data, index) => {
        return (
            <img src={data.image} className={index === tab ? 'on' : ''} alt=""/>
        );
    });

    return (
        <Usages>
            <Inners>
                <article className="usage-con">
                    <div className="usage-txt">
                        <h1 className="usage-tit">커피챗 이용 방법</h1>
                        <div className="usage-tab">
                            <ul className="usage-tab-control">
                                {usageTabControl}
                            </ul>
                            <div className="usage-tab-txt">
                                {usageTabText}
                            </div>
                        </div>
                    </div>
                    <figure className="usage-tab-img">
                        {usageTabImg}
                    </figure>
                </article>
            </Inners>
        </Usages>
    );
}

export default Usage;