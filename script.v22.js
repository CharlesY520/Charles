const courses = {
  c1: {
    for: "适合：无宠物美容基础的学习者",
    title: "C1 零基础入门班",
    description: "从工具使用、基础洗护、剪刀练习和常见犬种造型开始，建立完整的入门操作基础。",
    content: ["美容工具认识与规范操作", "犬猫品种、骨骼与基础洗护", "剪刀练习与贵宾、博美、比熊造型", "中大型犬护理、消毒卫生与门店项目"],
    ability: "完成基础洗护、常见犬种基础造型和门店基础服务",
    certificate: "对应报考NGKC C级职业技能等级证书",
    next: "可继续选择C2就业强化，或进入B1/B2造型进阶",
    price: "6800元",
    duration: "30天"
  },
  c2: {
    for: "适合：希望系统提升并面向就业的人",
    title: "C2 就业强化班",
    description: "包含C1全部内容，增加猫咪洗护、萌系造型、门店经营和更丰富的实操训练。",
    content: ["包含C1全部学习内容", "宠物美容工具设备与多犬种造型", "猫咪去油、去浮毛、控猫与SPA", "基础护理、门店服务与经营训练"],
    ability: "在掌握C级技术的同时，提高门店操作效率与就业适应能力",
    certificate: "对应报考NGKC C级职业技能等级证书",
    next: "适合进入门店就业，也可继续学习B1/B2进阶造型",
    price: "8800元",
    duration: "42天"
  },
  b1: {
    for: "适合：已有基础并想提升萌系造型的人",
    title: "B1 萌系百变造型专修班",
    description: "聚焦萌系线条、日韩系嘴型、创意造型、快速修剪和多犬种造型训练。",
    content: ["萌系线条与日、韩系嘴型", "多个萌系头型与快速修剪", "贵宾、比熊、雪纳瑞造型", "创意染色、胸花与头饰制作"],
    ability: "完成多犬种萌系、日韩系及创意商业造型",
    certificate: "对应报考NGKC B级职业技能等级证书",
    next: "可继续学习B2精修或A级高阶技术",
    price: "6800元",
    duration: "15天"
  },
  b2: {
    for: "适合：希望在B1基础上继续系统提升的人",
    title: "B2 萌系精修班",
    description: "包含B1全部课程，进一步训练身体线条、多犬种专项、高端护理和综合精修能力。",
    content: ["包含B1全部课程内容", "萌系身体、球腿与喇叭腿修剪", "雪纳瑞等多犬种造型与长毛犬护理", "SPA、按摩、口腔护理、染色及猫赛洗"],
    ability: "完成更精细的身体线条、多犬种精修与综合护理",
    certificate: "对应报考NGKC B级职业技能等级证书",
    next: "可继续进入A级精英班，发展高阶与赛事方向",
    price: "11800元",
    duration: "30天"
  },
  c2b1: {
    for: "适合：就业训练与萌系技术一起学习的人",
    title: "C2+B1 萌宠全能创业班",
    description: "组合C2就业强化与B1萌系百变造型内容，兼顾就业能力、造型技术与开店方向。",
    content: ["完整C2就业强化内容", "完整B1萌系百变造型内容", "猫咪低压洗护、SPA与创意染色", "门店实务、就业能力与创业方向训练"],
    ability: "同时具备C级门店就业能力与B级萌系商业造型能力",
    certificate: "对应报考NGKC C级、B级职业技能等级证书",
    next: "适合就业或创业开店，也可继续学习A级精英班",
    price: "13800元",
    duration: "56天"
  },
  a: {
    for: "适合：具备进阶基础并追求高阶技术的人",
    title: "A级精英班",
    description: "训练高阶造型、赛级美容、骨骼与线条分析，以及更完整的综合技术能力。",
    content: ["身体结构、骨骼画图与精准线条", "贵宾、比熊、雪纳瑞高阶造型", "猫咪赛级洗护、雕花染色与拔毛", "赛场美容、包毛上胶与模特选择"],
    ability: "建立高阶精准造型、赛级标准与综合职业能力",
    certificate: "对应A级证书路径，需参加全国赛场比赛",
    next: "可向赛事、教学、高端门店或个人品牌方向发展",
    price: "18800元",
    duration: "30天"
  },
  abc: {
    for: "适合：希望完成全阶系统学习的人",
    title: "C+B+A 商业班",
    description: "覆盖C级就业、B级精修与A级精英阶段，并加入门店运营、市场与商业方向内容。",
    content: ["C级就业、B级精修与A级精英课程", "市场调研、健康护理与门店运营", "营销推广、经营能力与前沿技术", "A级考前特训与全阶商业训练"],
    ability: "系统覆盖门店服务、进阶造型、高阶技术和经营管理",
    certificate: "对应C级、B级及A级证书学习与报考路径",
    next: "适合希望系统就业、创业开店或长期职业发展的学员",
    price: "38000元",
    duration: "90天"
  },
  special: {
    for: "适合：希望拓展猫咪业务、门店增值项目或专项技术的人",
    title: "猫咪·烘焙与特色专项课程",
    description: "重点覆盖猫咪洗护、SPA、赛级护理、猫咪创业，以及宠物烘焙、蛋糕和鲜食等增长方向，同时提供梗犬拔毛与等级考试强化。",
    content: [
      "赛级猫咪护理班｜2800元 · 5天",
      "猫咪创业班｜5800元 · 7天",
      "梗犬专业拔毛｜5800元起 · 6—15天",
      "C/B/A等级考试强化｜500元起 · 5天",
      "宠物烘焙兴趣班｜2900元 · 3天",
      "宠物烘焙创业班｜5900元 · 6天"
    ],
    ability: "拓展猫咪服务、宠物烘焙、梗犬拔毛或等级考试专项能力",
    certificate: "等级考试强化对应C/B/A考前训练，其他专项按课程目标学习",
    next: "可单独学习，也可搭配C/B/A主课程形成更完整的职业能力",
    price: "500元起",
    duration: "3—15天",
    compact: true
  }
};

const panel = document.querySelector(".course-panel");
const courseButtons = document.querySelectorAll("[data-course]");
const courseFor = document.querySelector("[data-course-for]");
const courseTitle = document.querySelector("[data-course-title]");
const courseDescription = document.querySelector("[data-course-description]");
const coursePrice = document.querySelector("[data-course-price]");
const courseDuration = document.querySelector("[data-course-duration]");
const courseContent = document.querySelector("[data-course-content]");
const courseAbility = document.querySelector("[data-course-ability]");
const courseCertificate = document.querySelector("[data-course-certificate]");
const courseNext = document.querySelector("[data-course-next]");

courseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = courses[button.dataset.course];
    if (!selected || button.getAttribute("aria-selected") === "true") return;

    courseButtons.forEach((item) => item.setAttribute("aria-selected", "false"));
    button.setAttribute("aria-selected", "true");
    panel.classList.add("is-changing");

    window.setTimeout(() => {
      courseFor.textContent = selected.for;
      courseTitle.textContent = selected.title;
      courseDescription.textContent = selected.description;
      courseContent.innerHTML = selected.content.map((item) => `<li>${item}</li>`).join("");
      courseAbility.textContent = selected.ability;
      courseCertificate.textContent = selected.certificate;
      courseNext.textContent = selected.next;
      coursePrice.textContent = selected.price;
      courseDuration.textContent = selected.duration;
      panel.classList.toggle("is-special", Boolean(selected.compact));
      panel.classList.remove("is-changing");
    }, 160);
  });
});

document.querySelectorAll("[data-level-course]").forEach((link) => {
  link.addEventListener("click", () => {
    const target = document.querySelector(`[data-course="${link.dataset.levelCourse}"]`);
    if (target) target.click();
  });
});

const teacherData = [
  { name: "杨建芳", role: "校长 · 创始人", summary: "18年宠物行业经验，美多格宠物医院连锁创始人，A级宠物美容师与高级讲师。", background: "宠物医院、宠物门店、美容技术与经营管理", specialty: "宠物店运营与管理、创业开店指导", style: "从真实门店需求出发，帮助学员把技术用于就业和创业。" },
  { name: "乐美玲", role: "宠物美容教师", summary: "13年宠物行业经验，NGKC教师级，多次带领学员获得国际奖项。", background: "C、B、A级美容教学与宠物烘焙", specialty: "多犬种美容、等级课程与宠物烘焙", style: "重视基础动作、作品完成度和赛事能力的逐步训练。" },
  { name: "宋新杰", role: "宠物美容教师", summary: "20年宠物美容教学经验，NGKC教师级，世界宠物协会专家委员。", background: "长期从事宠物美容教学与行业技术研究", specialty: "C、B、A级课程与萌系造型教学", style: "强调骨骼、比例、线条与系统化技术进阶。" },
  { name: "刘文", role: "宠物美容教师", summary: "9年宠物行业经验，NGKC A级美容师，拥有自主创业经验。", background: "宠物美容技术与自主创业实践", specialty: "专业知识、门店实操与美容技巧", style: "耐心指导学员成长，重视专业知识与实操技巧结合。" },
  { name: "徐晔", role: "宠物美容教师", summary: "13年宠物行业经验，兽医本科，NGKC A级美容师，具备猫洗护教师级资质。", background: "兽医专业、宠物美容与猫咪洗护", specialty: "猫赛级洗护、宠物医疗与综合护理", style: "将动物健康、安全护理与美容实操结合。" },
  { name: "杨晨", role: "宠物行业教师", summary: "11年宠物行业经验，高端连锁猫舍联合创始人。", background: "猫舍经营、猫经济与宠物门店实践", specialty: "宠物店开店指导、猫经济资源拓展与多元盈利模式", style: "围绕真实经营场景，帮助学员理解开店与资源配置。" }
];

const teacherStage = document.querySelector("[data-teacher-stage]");
const teacherSlides = [...document.querySelectorAll("[data-teacher]")];
const teacherCurrent = document.querySelector("[data-teacher-current]");
const teacherProfile = document.querySelector("[data-teacher-profile]");
let teacherIndex = 0;

function showTeacher(index) {
  teacherIndex = (index + teacherSlides.length) % teacherSlides.length;
  teacherSlides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-current", slideIndex === teacherIndex);
    slide.classList.toggle("is-prev", slideIndex === (teacherIndex - 1 + teacherSlides.length) % teacherSlides.length);
    slide.classList.toggle("is-next", slideIndex === (teacherIndex + 1) % teacherSlides.length);
  });
  const person = teacherData[teacherIndex];
  teacherCurrent.textContent = String(teacherIndex + 1).padStart(2, "0");
  document.querySelector("[data-teacher-role]").textContent = person.role;
  document.querySelector("[data-teacher-name]").textContent = person.name;
  document.querySelector("[data-teacher-summary]").textContent = person.summary;
  document.querySelector("[data-teacher-background]").textContent = person.background;
  document.querySelector("[data-teacher-specialty]").textContent = person.specialty;
  document.querySelector("[data-teacher-style]").textContent = person.style;
  teacherProfile.classList.add("is-open");
}

document.querySelector("[data-teacher-prev]").addEventListener("click", () => showTeacher(teacherIndex - 1));
document.querySelector("[data-teacher-next]").addEventListener("click", () => showTeacher(teacherIndex + 1));
teacherSlides.forEach((slide) => slide.addEventListener("click", () => showTeacher(Number(slide.dataset.teacher))));
document.querySelectorAll("[data-teacher-index]").forEach((item) => item.addEventListener("click", () => showTeacher(Number(item.dataset.teacherIndex))));

const alumniRail = document.querySelector("[data-alumni-rail]");
const alumniCurrent = document.querySelector("[data-alumni-current]");
const alumniTotal = document.querySelector("[data-alumni-total]");
const alumniSlides = [...alumniRail.children];
let alumniIndex = 0;

alumniTotal.textContent = String(alumniSlides.length).padStart(2, "0");

function showAlumni(index) {
  alumniIndex = (index + alumniSlides.length) % alumniSlides.length;
  alumniSlides[alumniIndex].scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "nearest", inline: "start" });
  alumniCurrent.textContent = String(alumniIndex + 1).padStart(2, "0");
}

document.querySelector("[data-alumni-prev]").addEventListener("click", () => showAlumni(alumniIndex - 1));
document.querySelector("[data-alumni-next]").addEventListener("click", () => showAlumni(alumniIndex + 1));

const credentialSlides = [...document.querySelectorAll(".credential-gallery figure")];
const credentialLightbox = document.querySelector("[data-credential-lightbox]");
const credentialImage = document.querySelector("[data-credential-image]");
const credentialTitle = document.querySelector("[data-credential-title]");
const credentialDescription = document.querySelector("[data-credential-description]");
let credentialIndex = 0;

function showCredential(index, openDialog = false) {
  credentialIndex = (index + credentialSlides.length) % credentialSlides.length;
  const slide = credentialSlides[credentialIndex];
  const sourceImage = slide.querySelector("img");
  credentialImage.src = sourceImage.currentSrc || sourceImage.src;
  credentialImage.alt = sourceImage.alt;
  credentialTitle.textContent = slide.querySelector("figcaption strong").textContent;
  credentialDescription.textContent = slide.querySelector("figcaption span").textContent;
  if (openDialog && !credentialLightbox.open) credentialLightbox.showModal();
}

document.querySelectorAll("[data-credential-zoom]").forEach((button, index) => {
  button.addEventListener("click", () => showCredential(index, true));
});

document.querySelector("[data-credential-close]").addEventListener("click", () => credentialLightbox.close());
document.querySelector("[data-credential-prev]").addEventListener("click", () => showCredential(credentialIndex - 1));
document.querySelector("[data-credential-next]").addEventListener("click", () => showCredential(credentialIndex + 1));

credentialLightbox.addEventListener("click", (event) => {
  if (event.target === credentialLightbox) credentialLightbox.close();
});

credentialLightbox.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") showCredential(credentialIndex - 1);
  if (event.key === "ArrowRight") showCredential(credentialIndex + 1);
});

const menuButton = document.querySelector(".menu-button");
const mainNav = document.querySelector(".main-nav");

menuButton.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!expanded));
  mainNav.classList.toggle("is-open", !expanded);
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    mainNav.classList.remove("is-open");
  });
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll(".reveal");

if (reducedMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => observer.observe(item));
}
