import shortid from 'shortid';
import img_review_profile1 from '../assets/images/img_review_profile1.png';
import img_review_profile2 from '../assets/images/img_review_profile2.png';
import img_review_profile3 from '../assets/images/img_review_profile3.png';

const reviewData = [
    {
        id: shortid.generate(),
        name: 'T******님',
        profileImg: img_review_profile1,
        review: '외국계는 정보가 제한적이고 인터뷰 프로세스도 길어서 걱정이 많았어요. 뻔하지 않은 진짜 실무의 이야기를 들을 수 있는 곳이 정말 없는데, 가감 없는 장단점부터 소중한 꿀팁들까지 커피챗은 최소한의 시간과 노력으로 알맹이만 쏙 빼먹을 수 있어서 진짜 좋아요!',
    },
    {
        id: shortid.generate(),
        name: '이******님',
        profileImg: img_review_profile2,
        review: '취업 이후에도 커리어 패스는 계속 변화하며 이어지는데, 경력 이직을 원하는 저 같은 사람을 위한 서비스는 처음입니다. 이직이 가장 고민인 요즘, 가고 싶은 컨설팅펌에 계신 분에게 케이스 인터뷰 팁과 워라밸 등 궁금한 것들을 커피챗하며 해결할 수 있었습니다.',
    },
    {
        id: shortid.generate(),
        name: '닉***님',
        profileImg: img_review_profile3,
        review: '대기업 7년 차로 스타트업으로 이동하고 싶은 이직 꿈나무  입니다. 대기업에서 스타트업으로 간 선배나 지인을 찾기도 힘들고, 궁금한 회사는 많은데 스타트업 네트워크도 없어서 많이 답답하던 차에 커피챗으로 찾고 있던 회사 분들과 이야기하고 정보와 기회를 얻을 수 있어 좋았어요!',
    },
    {
        id: shortid.generate(),
        name: 'S****님',
        profileImg: img_review_profile1,
        review: '온라인에는 정보가 너무나 제한적이고 주위에 이야기를 들려줄 지인도 없는 나에게 딱 필요한 커피챗! 애매하게 궁금하고, 어디 가서 물을 수도 없는 그러나 정말 고민인 지점들을 해결할 수 있었어요.',
    },
    {
        id: shortid.generate(),
        name: '한*****님',
        profileImg: img_review_profile2,
        review: '링크드인을 통해서 콜드 메일 보내기 쉽지 않은 분들도 커피챗으로 쉽게 부담 없이 연락할 수 있다는 게 가장 좋아요. 음성 대화라 즉각적인 피드백을 들을 수 있는 점도 만족스럽고, 익명이라 솔직한 정보를 얻을 수 있는 건 정말 최고! ',
    },
    {
        id: shortid.generate(),
        name: 'J*님',
        profileImg: img_review_profile3,
        review: '평소 인맥으로는 연결되지 못하는 사람들과 주저 없이 대화할 수 있다니! MBA 졸업 후 커리어가 또 고민인 시점에 이런 서비스가 생겼으면 했었는데, 커피챗을 알게 되어 다양한 업계 탐색을 할 수 있어서 좋습니다.',
    },
    {
        id: shortid.generate(),
        name: 'k*******님',
        profileImg: img_review_profile1,
        review: '제 개인 네트워크를 통해서 만날 수 없는 분야에 계신 분에게 편하게 커피챗을 신청하고 대화할 수 있어서 시행착오와 비용 모두 확실히 줄어드는 것 같아요. 최고의 가성비 커피챗 진짜 강추합니다! ',
    },
];

export default reviewData;