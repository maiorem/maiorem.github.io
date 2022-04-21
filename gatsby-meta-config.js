module.exports = {
  title: `Ἥφαιστος`,
  description: `코드 짓는 타자기`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://maiorem.github.io/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `django-web-framework-intro`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `홍세영`,
    bio: {
      role: `개발자`,
      description: ['도전이 즐거운', '함께 일하는', '숲을 보는', '사람을 중심한'],
      thumbnail: 'itsme.png', // Path to the image in the 'asset' folder
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
          '서울문화재단 후원으로 꿈을 기록하고 저장하여 같은 키워드로 서로의 꿈을 이어주는 Dream Network를 개발하였다.',
        techStack: ['Django', 'Mecab'],
        thumbnailUrl: 'blog.png',
        links: {
          post: '/django-web-framework-intro',
          github: 'https://github.com/maiorem/koldsleep',
          demo: 'https://www.koldsleep.com',
        },
      },
    ],
  },
};
