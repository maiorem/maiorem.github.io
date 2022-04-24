module.exports = {
  title: `Ἥφαιστος`,
  description: `코드 짓는 타자기`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://maiorem.github.io/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `maiorem.github.io/dreamNetwork1`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `홍세영`,
    bio: {
      role: `개발자`,
      description: ['도전이 즐거운', '함께 일하는', '숲을 보는', '사람을 중심한'],
      thumbnail: 'itsme.jpg', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/maiorem`, // `https://github.com/maiorem`,
      linkedIn: `https://www.linkedin.com/in/seyoung-hong-8155b21bb`, // `https://www.linkedin.com/in/seyoung-hong-8155b21bb`,
      email: `maiorem00@gmail.com`, // `maiorem00@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2021.01 ~ 현재',
        activity: '현재 보고정보시스템주식회사 재직 중',
        links: {},
      },
      {
        date: '2021.01 ~ 2021.05',
        activity: 'LG CNS Smart SMA 빅데이터 분석 및 분석 자동화 시스템 개발',
        links: {},
      },
      {
        date: '2021.06 ~ ',
        activity: 'LG Chem 챗봇 화면 기능 개발 및 운영',
        links: {},
      },
      {
        date: '2021.06 ~ ',
        activity: '뉴스킨코리아 CS챗봇 발화 이벤트 인텐트 개발 및 운영',
        links: {},
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: 'Dream Network 꿈 아카이빙 시스템 개발',
        description:
          '꿈을 기록하고 저장하여 같은 키워드로 서로의 꿈을 이어주는 Dream Network. koldsleep 주관, 서울문화재단 후원으로 개발하였으며 이인환각연쇄고리의 제 1차 고리의 소재로 활용되었다.',
        techStack: ['Django', 'Mecab', 'Ubuntu', 'gunicorn'],
        thumbnailUrl: 'blog.png',
        links: {
          demo: 'http://www.koldsleep.com',
        },
      },
      {
        title: '우리 동네 대여서비스, 망치',
        description:
          '당근마켓을 벤치마킹한 프로젝트로, 사용자가 입력한 주소의 주변에서 사용자가 필요로 하는 물건을 대여해 줄 수 있는 사람을 매칭해주는 서비스. 6명이 한 조로 MSA 방식으로 구현하였다.',
        techStack: ['Spring', 'AWS', 'MSA', 'Restful'],
        thumbnailUrl: 'mangchi.PNG',
        links: {
          github: 'https://github.com/maiorem/Mangchi-Final',
        },
      },
      {
        title: 'Sketch-to-Photo',
        description: '스케치 혹은 밑그림을 업로드하면 사진으로 바꾸어주는 인공지능 웹 서비스',
        techStack: ['Flask', 'TensorFlow', 'Pix2Pix', 'OpenCv'],
        links: {
          github: 'https://github.com/maiorem/sketch_to_photo',
        },
      },
    ],
  },
};
