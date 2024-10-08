import { Page } from "@/types/landing";

export const page: Page = {
  template: "salient",
  theme: "light",
  header: {
    brand: {
      title: "一键职达",
      avatar: {
        src: "/imgs/logo.png",
        title: "一键职达",
      },
      url: "/",
    },
    nav: {
      items: [
        {
          title: "功能介绍",
          url: "#features",
        },
        {
          title: "用户评价",
          url: "#testimonials",
        },
        {
          title: "常见问题",
          url: "#faq",
        },
        {
          title: "联系我们",
          url: "#contact",
        },
      ],
    },
    buttons: [
      {
        title: "立即体验",
        url: "https://yijianzhi.com/start",
        target: "_blank",
      },
    ],
  },
  hero: {
    title: "帮你点亮求职之路",
    description:
      "陪你走过求职时光，助你迈向美好未来。使用一键职达，轻松优化求职材料，提升求职成功率。",
    image: {
      src: "/imgs/hero.png",
    },
    image_position: "right",
    text_align: "left",
    buttons: [
      {
        title: "开始免费试用",
        url: "https://yijianzhi.com/start",
        target: "_blank",
      },
      {
        title: "了解更多",
        url: "https://yijianzhi.com/features",
        target: "_blank",
        theme: "outline",
      },
    ],
    show_happy_users: true,
    show_proof: false,
  },
  section: {
    items: [
      {
        name: "what",
        title: "什么是一键职达",
        description:
          "一键职达是一个助力求职的工具，专为求职者设计，提供AI优化证件照、AI优化简历和AI模拟面试三大功能，帮助你提升求职竞争力。",
        image: {
          src: "/imgs/section1.png",
        },
        image_position: "left",
        text_align: "center",
        items: [
          {
            title: "AI优化证件照",
            description:
              "通过AI技术，快速生成专业的证件照，给招聘官留下深刻印象。",
          },
          {
            title: "AI优化简历",
            description:
              "智能分析简历内容，提供优化建议，帮助你展示最佳自我。",
          },
          {
            title: "AI模拟面试",
            description:
              "模拟真实面试场景，提供反馈和建议，提升你的面试表现。",
          },
        ],
      },
      {
        name: "why",
        title: "为什么选择一键职达",
        description:
          "一键职达以用户为中心，结合强大的AI技术，提供个性化服务，帮助求职者快速适应市场需求，提高求职成功率。",
        image: {
          src: "/imgs/section2.png",
        },
        image_position: "right",
        text_align: "center",
        items: [
          {
            title: "快速高效",
            description: "在短时间内优化求职材料。",
          },
          {
            title: "智能分析",
            description: "AI技术提供精准反馈，助你进步。",
          },
          {
            title: "全面支持",
            description: "一站式求职工具，满足各类需求。",
          },
        ],
      },
      {
        name: "how",
        title: "如何使用一键职达",
        description:
          "使用一键职达非常简单，按照以下步骤即可开始你的求职之旅：",
        image: {
          src: "/imgs/section3.png",
        },
        image_position: "left",
        text_align: "center",
        items: [
          {
            title: "1. 上传你的证件照",
            description:
              "选择一张你的证件照，使用AI优化功能。",
          },
          {
            title: "2. 提交简历",
            description:
              "上传你的简历，获取优化建议和修改意见。",
          },
          {
            title: "3. 进行模拟面试",
            description:
              "通过AI模拟面试，提升你的面试技巧和自信心。",
          },
        ],
        buttons: [
          {
            title: "立即体验 👉",
            url: "https://yijianzhi.com/start",
            target: "_blank",
          },
        ],
      },
    ],
  },
  feature: {
    title: "一键职达的核心功能",
    description:
      "探索一键职达强大的功能，助力你的求职之路。",
    items: [
      {
        title: "AI证件照优化",
        description:
          "让你的证件照更加专业，提升第一印象。",
        avatar: {
          src: "/imgs/icons/1.svg",
        },
      },
      {
        title: "简历智能优化",
        description:
          "提供针对性的建议，帮助你展示最佳自我。",
        avatar: {
          src: "/imgs/icons/2.svg",
        },
      },
      {
        title: "模拟面试训练",
        description:
          "通过AI模拟真实面试场景，提升面试技巧。",
        avatar: {
          src: "/imgs/icons/3.svg",
        },
      },
      {
        title: "个性化服务",
        description:
          "依据用户需求提供定制化的优化方案。",
        avatar: {
          src: "/imgs/icons/4.svg",
        },
      },
      {
        title: "用户友好界面",
        description:
          "简单易用，无需任何技术背景即可上手。",
        avatar: {
          src: "/imgs/icons/5.svg",
        },
      },
    ],
  },
  cta: {
    title: "准备好开启求职之旅了吗？",
    description: "立即体验一键职达，助你迈向美好未来。",
    buttons: [
      {
        title: "立即体验",
        url: "https://yijianzhi.com/start",
        target: "_blank",
      },
    ],
  },
  testimonial: {
    title: "用户对一键职达的评价",
    description:
      "听听我们的用户如何评价一键职达，看看它如何改变了他们的求职体验。",
    items: [
      {
        name: "李明",
        title: "求职者",
        description:
          "一键职达让我轻松优化了我的简历，面试表现也大大提升！",
        avatar: {
          src: "/imgs/user/1.png",
        },
      },
      {
        name: "张伟",
        title: "大学生",
        description:
          "AI优化证件照让我在求职中更加自信，非常推荐！",
        avatar: {
          src: "/imgs/user/2.png",
        },
      },
      {
        name: "王芳",
        title: "职场新人",
        description:
          "模拟面试功能帮助我在真实面试中表现得更加从容。",
        avatar: {
          src: "/imgs/user/3.png",
        },
      },
    ],
  },
  faq: {
    title: "关于一键职达的常见问题",
    description: "找到关于使用一键职达的常见问题及答案。",
    items: [
      {
        title: "一键职达提供哪些功能？",
        description:
          "一键职达提供AI优化证件照、AI优化简历和AI模拟面试三大功能。",
      },
      {
        title: "使用一键职达需要付费吗？",
        description:
          "一键职达提供免费试用，部分功能可能需要付费解锁。",
      },
      {
        title: "我需要具备什么技能才能使用一键职达？",
        description:
          "一键职达设计为用户友好，无需任何技术背景即可使用。",
      },
      {
        title: "一键职达如何保护我的隐私？",
        description:
          "我们重视用户隐私，所有数据均严格保密，不会外泄。",
      },
      {
        title: "如何联系客服？",
        description:
          "你可以通过邮件联系我们，或访问我们的帮助中心获取更多信息。",
      },
    ],
  },
  footer: {
    brand: {
      title: "一键职达",
      description:
        "一键职达是一个助力求职的AI工具，旨在帮助用户提升求职竞争力，顺利找到理想工作。",
      avatar: {
        src: "/imgs/logo.png",
        title: "一键职达",
      },
      url: "https://yijianzhi.com",
    },
    badge_disabled: false,
    copyright: "© 2024 • 一键职达 保留所有权利。",
    social: {
      items: [
        {
          title: "微博",
          url: "https://weibo.com/yijianzhi",
          target: "_blank",
        },
        {
          title: "知乎",
          url: "https://www.zhihu.com/yijianzhi",
          target: "_blank",
        },
        {
          title: "微信",
          url: "https://yijianzhi.com/wechat",
          target: "_blank",
        },
        {
          title: "邮件",
          url: "mailto:support@yijianzhi.com",
          target: "_self",
        },
      ],
    },
    nav: {
      items: [
        {
          title: "产品",
          children: [
            {
              title: "一键职达",
              url: "https://yijianzhi.com",
              target: "_blank",
            },
          ],
        },
        {
          title: "服务",
          children: [
            {
              title: "隐私政策",
              url: "/privacy-policy",
            },
            {
              title: "服务条款",
              url: "/terms-of-service",
            },
          ],
        },
      ],
    },
  },
};
