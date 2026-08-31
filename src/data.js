// Personal content for Jiaxi Chen's academic homepage.
// Empty arrays are hidden automatically by the page template.

import photo from "./assets/photo.jpg";
import shantouLogo from "./assets/logos/shantou-university.png";

export const CV_URL = "Jiaxi_Chen_CV_Aug2026.pdf";

export const profile = {
  nameEn: "Jiaxi Chen",
  nameCn: "",
  role: [
    "Undergraduate in Data Science and Big Data Technology,",
    "Shantou University",
  ],
  location: "Shantou, China",
  photo,
  links: [
    { label: "Email", href: "mailto:24jxchen5@stu.edu.cn" },
    { label: "GitHub", href: "https://github.com/garylovemark" },
    { label: "CV (PDF)", href: CV_URL, newTab: true },
  ],
};

export const about = [
  `I am an undergraduate student in Data Science and Big Data Technology at
   <a href="https://www.stu.edu.cn/" target="_blank" rel="noopener noreferrer">Shantou University</a>.
   My research interests broadly lie in graph machine learning and representation learning.`,
  `My recent work focuses on learning from complex structured data, including
   structural learning for hyperedge prediction and parameter-efficient adaptation
   for motor-imagery EEG decoding. I am particularly interested in developing
   learning methods that capture meaningful structure beyond conventional feature representations.`,
  `I am always glad to hear from people working on related problems in graph learning,
   representation learning, and machine learning for scientific data. You can reach me by
   <a href="mailto:24jxchen5@stu.edu.cn">email</a>.`,
];

export const news = [];

export const education = [
  {
    org: "Shantou University",
    role: "Bachelor of Engineering in Data Science and Big Data Technology · GPA: 3.97/5.0 (top 10%) · Average score: 89.7/100",
    date: "Sep. 2024 - Jun. 2028 (expected)",
    url: "https://www.stu.edu.cn/",
    logo: shantouLogo,
  },
];

export const publications = [
  {
    title: "Structural-Evidence Perturbation Learning for Hyperedge Prediction",
    authors: "<strong>Jiaxi Chen</strong>, Zichun Lin, Dan Yang, et al.",
    venue: "Under review at the <em>41st AAAI Conference on Artificial Intelligence (AAAI 2027, CCF-A)</em>",
  },
  {
    title: "SPD: Side-Path Decoupled Adaptation for Few-Shot Motor Imagery EEG Decoding",
    authors: "<strong>Jiaxi Chen</strong>, Jiahui Zhong, Zhifeng Hao, et al.",
    venue: "Under review at the <em>IEEE International Conference on Bioinformatics and Biomedicine (BIBM 2026, CCF-B)</em>",
  },
  {
    title: "Dual-View Fuzzy Membership and Candidate-Adaptive Multi-Source Evidence Fusion for Hyperedge Prediction",
    authors: "Zichun Lin, <strong>Jiaxi Chen</strong>, Dan Yang, et al.",
    venue: "Under review at the <em>15th International Conference on Learning Representations (ICLR 2027, CCF-A)</em>",
  },
];

export const patents = [
  {
    org: "A Multi-Class Classification Method for Medical Data Based on Intuition-Driven Fuzzy Least Squares",
    role: "Jiajun Xian, Li Qi, Can Zhou, Jiaxi Chen, et al. · Invention Patent 202610640838.X · Preliminary review passed",
  },
];

export const workingPapers = [];

export const experience = [
  {
    org: "Structural-Evidence Perturbation for Hyperedge Prediction",
    desc: "Developed SEP-HP to address hard negatives that static overlap and co-occurrence cannot distinguish. Designed SEDR to model candidate-specific structural dependencies and integrated risk-aware gated refinement. Evaluation across six hypergraph benchmarks and four negative-sampling protocols achieved the best average AUROC/AP on all six datasets.",
    role: "Project Lead",
    date: "Mar. 2026 - Jul. 2026",
  },
  {
    org: "Side-Path Decoupled Adaptation for Motor-Imagery EEG Decoding",
    desc: "Designed a lightweight side-path adapter that preserves the pretrained main route during few-shot adaptation. The approach uses a shallow convolutional side encoder, zero-initialized residual injection, stop-gradient alignment, and an auxiliary loss, improving mean accuracy across three public MI datasets with 2.13% additional parameters.",
    role: "Project Lead",
    date: "May 2026 - Jul. 2026",
  },
  {
    org: "COVID-19 Excess Disease Burden Forecasting Based on GBD Data",
    desc: "Built standardized longitudinal datasets for incidence, mortality, and DALY indicators. Developed a hybrid counterfactual forecasting model and compared expected trajectories with observed 2020-2023 data to quantify excess disease burden associated with the pandemic.",
    role: "Research Group Member",
    date: "Sep. 2025 - Mar. 2026",
  },
];

export const projects = [];

export const awards = [
  {
    org: "National Encouragement Scholarship",
    date: "Nov. 2025",
  },
  {
    org: "Third Prize, Comprehensive Scholarship, Shantou University",
    date: "Nov. 2025",
  },
  {
    org: "Third Prize, 2025 CUMCM (Guangdong Province)",
    date: "Oct. 2025",
  },
  {
    org: "Special Talent Scholarship, Shantou University",
    date: "Dec. 2024",
  },
];

export const teaching = [];

export const lastUpdated = "August 2026";
