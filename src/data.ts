export const profile = {
  name: "MD Saimom Islam",
  title: "Full Stack Software Engineer",
  email: "saimomislam1107@gmail.com",
  phone: "(+880) 1871266651",
  location: "Shewarapara, Mirpur, Dhaka, Bangladesh",
  github: "https://github.com/saimomislam26",
  linkedin: "https://www.linkedin.com/in/saimom-islam-5023b5183/",
  leetcode: "https://leetcode.com/Saimom_islam26/",
  roles: ["Node.js & NestJS Engineer", "React & Next.js Developer", "Microservices Architect", "Performance & Security Minded"],
  summary:
    "Full stack engineer with 5 years of experience building scalable backends and fast, polished frontends. I currently work on MyRobi, MyCirkle and Robi WiFi — platforms serving over 66 million subscribers combined.",
};

export const stats = [
  { value: 5, suffix: "+", label: "Years of experience" },
  { value: 66, suffix: "M+", label: "Subscribers served" },
  { value: 3, suffix: "", label: "Companies" },
  { value: 6, suffix: "", label: "Featured projects" },
];

export const skills: { title: string; items: string[] }[] = [
  { title: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "PHP"] },
  { title: "Backend", items: ["Node.js", "NestJS", "AdonisJS", "Express.js", "Laravel", "Slim", "REST APIs"] },
  { title: "Frontend", items: ["React.js", "Next.js", "React Hooks", "Semantic HTML"] },
  { title: "State Management", items: ["Redux", "Redux Toolkit", "Context API", "React Query"] },
  { title: "UI & Styling", items: ["Material UI", "Tailwind CSS", "CSS", "Atomic Design"] },
  { title: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL"] },
  { title: "Architecture & Scale", items: ["Microservices", "Redis caching", "Distributed locking", "Rate limiting", "Logging & monitoring"] },
  { title: "Security & Auth", items: ["SSO", "JWT", "OTP hardening", "SQL injection prevention"] },
  { title: "Performance", items: ["Lighthouse", "PageSpeed Insights", "Code splitting", "Lazy loading"] },
  { title: "Testing & Quality", items: ["Jest", "React Testing Library", "ESLint", "Prettier", "SonarQube"] },
  { title: "Cloud & DevOps", items: ["AWS EC2", "Lambda", "ELB", "S3", "DocumentDB", "Docker", "Git", "Cloudinary"] },
  { title: "Tools & AI", items: ["Figma", "Postman", "Copilot", "Claude", "ChatGPT", "LLM API integration"] },
];

export const marquee = ["Node.js", "NestJS", "React", "Next.js", "TypeScript", "Redis", "MongoDB", "PostgreSQL", "MySQL", "AWS", "Docker", "Microservices", "Tailwind CSS", "Redux Toolkit"];

export const experience = [
  {
    company: "Portonics Ltd.",
    role: "Software Engineer",
    period: "Jun 2025 – Present",
    points: [
      "Contributed to MyRobi, MyCirkle and Robi WiFi — platforms serving a combined 66M+ subscribers.",
      "Led Robi WiFi feature development: owned the technical design, coordinated with product and QA, and delivered to production.",
      "Led, designed and developed a scalable Loyalty Programme: customers earn and redeem points, progress through loyalty tiers, claim partner benefits and receive daily rewards.",
      "Built and enhanced backend microservices across MyRobi and MyCirkle: authentication, OTP, package and bundle management.",
      "Strengthened security with IP-based OTP request restrictions and SQL injection prevention, reducing OTP abuse and protecting backend services.",
      "Fixed a critical duplicate daily-login-bonus bug using Redis-based distributed locking, guaranteeing exactly-once reward processing under concurrent load.",
      "Built Portman, an internal Postman alternative (Node.js + React) used by all engineers, with a dynamic proxy service that bypasses CORS while preserving headers and payloads.",
      "Contributed to technical solution design and architecture discussions focused on scalability, reliability and production stability.",
    ],
  },
  {
    company: "Next Solution Lab",
    role: "Software Engineer",
    period: "Jan 2022 – May 2025",
    points: [
      "Built several large-scale annotation tools for AI training.",
      "Developed scalable SaaS applications with React, TypeScript and Redux Toolkit.",
      "Developed an office portal to manage attendance, projects, leaves and employee evaluation, used by 60+ employees.",
      "Improved frontend performance: memoization (React.memo, useMemo, useCallback) to cut re-renders, and a smaller JS bundle by removing unused dependencies and refining imports.",
      "Integrated REST APIs with AWS Lambda-based services and deployed on AWS EC2.",
    ],
  },
  {
    company: "Core Devs Ltd.",
    role: "Full Stack Developer",
    period: "Sep 2021 – Dec 2021",
    points: ["Developed a full-stack Courier Service Portal and Parcel Tracking System using the MERN stack (MongoDB, Express.js, React.js, Node.js)."],
  },
];

export const projects = [
  { title: "MyRobi", desc: "Telecom self-care platform with auth, OTP, bundles, loyalty points and rewards, serving millions of subscribers.", link: "https://www.robi.com.bd/", tags: ["Node.js", "Microservices", "Redis"] },
  { title: "Robi WiFi", desc: "Robi's WiFi service platform, part of the 66M+ subscriber ecosystem.", link: "https://robiwifi.robi.com.bd/", tags: ["Web", "Backend"] },
  { title: "E-learning Website", desc: "Online learning platform for courses and learners.", link: "https://bugresistance.com/", tags: ["Web"] },
  { title: "আয়ব্যয় — Finance Management", desc: "Personal finance manager to track income and expenses.", link: "https://ayebya.vercel.app/login", tags: ["Next.js", "React", "TypeScript", "Material UI"] },
  { title: "Office Portal", desc: "Manage attendance, projects, leaves and employee evaluation in one place.", link: "https://managementportal-saimoms-projects.vercel.app/", tags: ["Web app"] },
  { title: "Portfolio", desc: "This very site — responsive, animated and built from scratch.", link: "https://portfolio-saimom.netlify.app/", tags: ["React", "Tailwind CSS"] },
];

export const education = {
  degree: "BSc in Computer Science and Engineering",
  school: "Ahsanullah University of Science and Technology",
  meta: "CGPA 3.56 / 4.00 · July 2021",
};

export const strengths = [
  "Lead features end-to-end — technical design, planning, production release.",
  "Performance optimisation, security best practices and clean architecture.",
  "Committed to code quality and long-term system scalability.",
  "Translate business requirements into reliable technical solutions with cross-functional teams.",
];

// Confidential work is described generically (no client/product names, no screenshots).
// Edit freely — only add details you are cleared to share.
export const caseStudies = [
  {
    title: "Large-Scale AI Training Annotation Tools",
    tag: "Confidential · NDA",
    company: "Next Solution Lab",
    summary:
      "Built several large-scale annotation tools used for AI training. Names, data and screenshots are withheld for security, but I'm happy to walk through the engineering in an interview.",
    flow: ["Annotator UI (React)", "API Layer", "Annotation Services", "Queue / Cache", "Storage"],
    highlights: [
      "Scalable full stack architecture for heavy, concurrent annotation work",
      "Performance-focused React UI built for large volumes of data",
      "Secure, role-aware access and reliable backend services",
      "Deployed on AWS with REST and Lambda-based services",
    ],
  },
];

export const posts = [
  {
    title: "Exactly-once rewards with Redis distributed locks",
    date: "Engineering notes",
    read: "3 min read",
    tags: ["Redis", "Node.js", "Concurrency"],
    body: [
      "When two requests claim the same daily reward at the same moment, a naive 'check then insert' lets both through — each sees that no claim exists yet. This is a classic race condition, and it only shows up under concurrent load.",
      "The fix is to serialise claims per user. Acquire a lock keyed by user and day with SET key value NX PX ttl: NX makes it succeed only if the key does not exist, and the TTL guarantees the lock is released even if the process crashes.",
      "Inside the lock, re-check whether the reward was already claimed, write the claim, then release the lock — only if you still own it, by comparing a unique token. Pair this with a unique database constraint as a final safety net.",
      "Result: every user gets the reward exactly once, no matter how many parallel requests arrive.",
    ],
  },
  {
    title: "Bypassing CORS safely with a proxy service",
    date: "Engineering notes",
    read: "3 min read",
    tags: ["Node.js", "CORS", "Tooling"],
    body: [
      "CORS is enforced by browsers, not servers. A frontend calling another domain is blocked unless that server allows the origin — which is a problem for internal API tools that must call many different hosts.",
      "A small Node.js proxy sidesteps this: the frontend calls the proxy on its own origin, and the proxy forwards the request server-side to the configured target, passing through method, headers and body unchanged.",
      "Keep it safe: only allow configured target domains, never forward credentials you did not intend to, and add auth and rate limiting so the proxy cannot be abused as an open relay.",
    ],
  },
  {
    title: "Cutting React re-renders without over-optimising",
    date: "Engineering notes",
    read: "3 min read",
    tags: ["React", "Performance"],
    body: [
      "Start by measuring. The React DevTools Profiler shows which components re-render and why, so you optimise real hotspots instead of guessing.",
      "React.memo skips re-rendering when props are unchanged; useMemo and useCallback keep object and function props referentially stable so memoised children can actually skip. Without stable props, memo does nothing.",
      "Also shrink the bundle: drop unused dependencies, import only what you need, and use code splitting and lazy loading. Smaller bundles help load time as much as fewer re-renders help interaction.",
    ],
  },
];
