import React from 'react';
import { Inners } from '../../styles/Common';
import { Newtalks } from './Style';
import newtalkData from '../../data/newtalkData';
import img_uservp3 from '../../assets/images/img_uservp3.png';

function Newtalk () {
    const newtalkList = newtalkData.map((data, index) => {
        return (
            <li key={data.id}>
                <p className="newtalk-list-num"><b>{index + 1}</b></p>
                <p className="newtalk-list-tit"><b>{data.title}</b></p>
                <small className="newtalk-list-desc">{data.description}</small>
                {data.ps && <small className="xsmall newtalk-list-ps">{data.ps}</small>}
            </li>
        );
    });

    return (
        <Newtalks>
            <Inners>
                <h1 className="newtalk-tit">새로운 대화의 시작, 커피챗</h1>
                <article className="newtalk-con">
                    <figure className="newtalk-img">
                        <img src={img_uservp3} alt="" />
                    </figure>
                    <div className="newtalk-txt">
                        <ol className="newtalk-list">
                            {newtalkList}
                        </ol>
                    </div>
                </article>
            </Inners>
        </Newtalks>
    );
}

export default Newtalk;