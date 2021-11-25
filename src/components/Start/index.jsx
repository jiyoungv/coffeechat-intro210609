import React from 'react';
import { Inners } from '../../styles/Common';
import { Starts } from './Styles';
import img_3d_chat from '../../assets/images/img_3d_chat.png';

function Start () {
    return (
        <Starts>
            <Inners>
                <article className="start-con">
                    <div className="start-tit">
                        <figure className="start-tit-img">
                            <img src={img_3d_chat} alt="" />
                        </figure>
                        <h3 className="start-tit-tit">언제 어디서나 자유롭게, 생생한 정보와 경험이 가득한 대화</h3>
                    </div>
                    <div className="start-txt">
                        <ul className="start-txt-list">
                            <li>어디서부터 시작해야 할지 막막할 때</li>
                            <li>내 주위 인맥으로는 한계가 있을 때</li>
                            <li>남 몰래 커리어 고민 해결이 필요할 때</li>
                        </ul>
                        <p>20분 동안의 따뜻하고 생산적인 대화로 답을 구할 수 있습니다.</p>
                    </div>
                    <a href="https://www.coffeechat.kr" title="커피챗 시작하기" className="start-btn"><b>커피챗 시작하기</b></a>
                </article>
            </Inners>
        </Starts>
    );
}

export default Start;