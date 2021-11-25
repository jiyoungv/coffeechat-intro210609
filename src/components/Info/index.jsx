import React from 'react';
import { Inners } from '../../styles/Common';
import { Infos } from './Style';
import img_uservp2 from '../../assets/images/img_uservp2.png';

function Info () {
    return (
        <Infos>
            <Inners>
                <article className="info-con">
                    <figure className="info-img">
                        <img src={img_uservp2} alt="" />
                    </figure>
                    <div className="info-txt">
                        <h3 className="info-tit">커피챗이란?</h3>
                        <p>커피챗(Coffee Chat)은 서구권에서는 이미 일상이 된 정보형 미팅으로 ‘궁금한 업계/회사/직무/학교’의 사람과 실제 만남을 통해 커피 한 잔 마시며 부담 없이 정보를 묻고 답하는 문화입니다.</p>
                        <p>커피챗 서비스는 일대일 비대면 음성 대화입니다. 신상정보 교류 없이 익명으로 진행하기에 잘 보일 필요도 부담을 가질 이유도 없습니다. 편하게 내가 원하는 날 것의 정보를 묻고 답을 구할 수 있습니다.</p>
                    </div> 
                </article>
            </Inners>
        </Infos>
    );
}

export default Info;