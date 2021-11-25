import shortid from 'shortid';

const newtalkData = [
    {
        id: shortid.generate(),
        title: `비대면 '음성 대화'입니다`,
        description: `얼굴을 마주하지 않는 '음성 대화’로 쉽고 편하게 궁금한 정보를 얻을 수 있어요.`,
    },
    {
        id: shortid.generate(),
        title: `오직 나만을 위한 '1:1'입니다`,
        description: `누군가의 눈치를 볼 필요가 없어요. 나만을 위한 시간이기에 내가 궁금한 것들을 중심으로 대화를 채울 수 있어요.`,
    },
    {
        id: shortid.generate(),
        title: `철저히 '익명'입니다`,
        description: `신상정보 교류 없이 오로지 사전 질문을 바탕으로 대화가 진행됩니다. 잘 보일 필요도, 형식적인 문답도 필요하지 않아요.`,
        ps: '파트너는 나의 개인 정보를 절대 알 수 없습니다.',
    },
    {
        id: shortid.generate(),
        title: `모두가 '수평적인 관계'입니다`,
        description: `멘토링 혹은 클래스가 아닙니다. 부담 없이 커리어 정보과 경험을 묻고 답하는 수평적인 커뮤니케이션이 가능해요.`,
    },
];

export default newtalkData;