export type BlogPostEntry = {
  id: string;
  slug: string;
  date: string;
  title: string;
  subtitle: string;
  author: string;
  authorRole: string;
  readTime: string;
  categories: string[];
  coverImage: {
    src: string;
    alt: string;
  };
};

export const blogPostContent: BlogPostEntry[] = [
  {
    id: "post-01",
    slug: "systems-thinking-for-design-teams",
    date: "24 MAY 2026",
    title: "SYSTEMS THINKING FOR MODERN DESIGN TEAMS",
    subtitle:
      "How cross-functional rituals and modular design rules improve velocity without sacrificing craft.",
    author: "Maya Chen",
    authorRole: "Design Director",
    readTime: "6 min read",
    categories: ["DESIGN", "OPERATIONS"],
    coverImage: {
      src: "/assets/design-teams.png",
      alt: "Creative team workshop around large design boards",
    },
  },
  {
    id: "post-02",
    slug: "frontend-budgeting-at-scale",
    date: "19 MAY 2026",
    title: "MARKETING STRATEGY THROUGH DESIGN SYSTEM THINKING",
    subtitle:
      "How brand storytelling, campaign structure, and interface design can align to deliver memorable and consistent digital experiences.",
    author: "Linda Patel",
    authorRole: "Brand Architect",
    readTime: "9 min read",
    categories: ["MARKETING", "DESIGN", "ARCHITECTURE"],
    coverImage: {
      src: "/assets/design-system-dark.png",
      alt: "Laptop displaying a performance analytics dashboard",
    },
  },
  {
    id: "post-03",
    slug: "designing-for-speed-and-clarity",
    date: "11 MAY 2026",
    title: "DESIGNING FOR SPEED WITHOUT LOSING CLARITY",
    subtitle:
      "Balancing expressive visual direction with efficient interaction patterns that help users move faster.",
    author: "Alex Reyes",
    authorRole: "Product Designer",
    readTime: "7 min read",
    categories: ["UX", "PRODUCT"],
    coverImage: {
      src: "/assets/automotive-design.jpg",
      alt: "Interface design mockups with annotation overlays",
    },
  },
  {
    id: "post-04",
    slug: "content-architecture-for-product-storytelling",
    date: "03 MAY 2026",
    title: "CONTENT ARCHITECTURE FOR PRODUCT STORYTELLING",
    subtitle:
      "Structuring landing page narratives so each section supports both comprehension and conversion.",
    author: "Sofia Martinez",
    authorRole: "Content Strategist",
    readTime: "5 min read",
    categories: ["CONTENT", "STRATEGY"],
    coverImage: {
      src: "/assets/storytelling.webp",
      alt: "Editorial layout planning on a digital canvas",
    },
  },
];
