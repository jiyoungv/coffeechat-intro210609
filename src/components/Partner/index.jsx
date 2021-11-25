import React from 'react';
import { Inners } from '../../styles/Common';
import { Partners } from './Style';
import img_3d_globe from '../../assets/images/img_3d_globe.png';
import img_company_logos from '../../assets/images/img_company_logos.png';

function Partner () {
    return (
        <Partners>
            <Inners>
                <div className="partner-top">
                    <figure className="partner-top-img">
                        <img src={img_3d_globe} alt="" />
                    </figure>
                    <h3 className="partner-tit">전 세계 25개국 파트너들과 정보와 경험을 나누는 새로운 대화</h3>
                    <p>커피챗의 모든 파트너는 소속 기업/학교의 이메일 인증과 증명서 제출, 커피챗 인증 위원회 검토까지 꼼꼼한 인증 과정을 통과한 검증된 분들입니다.</p>
                </div>
                <figure className="partner-logo-img">
                    <img src={img_company_logos} alt="파트너 로고 이미지" />
                </figure>
                <div className="partner-bottom">
                    <p>나의 지식과 경험을 나누고 수익을 창출해보세요.</p>
                    <a href="https://www.coffeechat.kr/partnerBenefit" title="커피챗 파트너 등록 안내" rel="noreferrer" className="partner-info-btn"><b>커피챗 파트너 등록 안내</b></a>
                </div>
            </Inners>
        </Partners>
    );
}

export default Partner;