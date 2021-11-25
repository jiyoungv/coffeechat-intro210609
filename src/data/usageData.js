import shortid from 'shortid';
import img_screen_step1 from '../assets/images/img_screen_step1.png';
import img_screen_step2 from '../assets/images/img_screen_step2.png';
import img_screen_step3 from '../assets/images/img_screen_step3.png';
import img_screen_step4 from '../assets/images/img_screen_step4.png';
import img_screen_step5 from '../assets/images/img_screen_step5.png';

const usageData = [
    {
        id: shortid.generate(),
        title: '파트너 탐색',
        image: img_screen_step1,
        contents: [
            '업계/직무 카테고리 또는 검색창을 통해 내가 찾고 있는 회사/업계/학교의 파트너를 검색해보세요.',
            '누구와 커피챗을 할지 막막하다면, 나의 고민을 남기고 커피챗 파트너를 추천받을 수도 있어요.',
        ],
    },
    {
        id: shortid.generate(),
        title: '일정 선택',
        image: img_screen_step2,
        contents: [
            '파트너 프로필에서 커피챗 신청 버튼을 클릭하고 선택 가능한 일정에서 내가 가장 선호하는 시간을 최대 3개 제안할 수 있습니다.',
        ],
    },
    {
        id: shortid.generate(),
        title: '사전 질문 작성',
        titleM: '질문 작성',
        image: img_screen_step3,
        contents: [
            '나의 고민과 그동안 궁금했던 것들을 충분히 작성하여 미리 전달할 수 있어요.',
        ],
        lists: [
            '신청자의 정보는 ‘직무/연차 범위’(직장인) 또는 ‘전공/학년’(학생)만 전달됩니다. 이외의 개인 정보나 회사 등 모든 정보는 철저히 비공개로 보호합니다.',
            '사전 질문이 충분하지 않을 경우, 파트너가 수락하지 않을 수도 있습니다.'
        ],
        listsM: [
            '신청자의 정보는 ‘직무/연차 범위’(직장인) 또는 ‘전공/학년’(학생)만 전달됩니다.',
            '사전 질문 작성 시 최소한 어떤 내용으로 대화할 것인지 적어주세요.'
        ],
    },
    {
        id: shortid.generate(),
        title: '커피챗 확정',
        titleM: '진행 확정',
        image: img_screen_step4,
        contents: [
            '커피챗 신청 완료 시 개별적으로 입금 안내를 드리며 입금 완료 후 최대 48시간 이내에 파트너가 커피챗을 수락합니다.',
            '카카오톡을 통해 유의사항과 함께 확정 알림을 보내드려요.',
        ],
    },
    {
        id: shortid.generate(),
        title: '커피챗 진행',
        titleM: '커피챗',
        image: img_screen_step5,
        contents: [
            '카카오톡 알림톡을 통해 받은 콜(call) 링크로 입장해 주세요.', 
            '1:1 익명 기반으로 20분 동안 음성 대화를 나누어보세요.',
        ],
        lists: [
            'ZOOM 이용 (올 하반기 앱 내 커피챗 구현 예정)',
        ],
    },
];

export default usageData;