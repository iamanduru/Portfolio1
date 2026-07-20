document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav__toggle");
  const navLinks = document.querySelector(".nav__links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      navToggle.classList.toggle("open");
    });
  }


  const titles = [
  "Software Engineer",
  "Secure Systems Builder",
  "Cybersecurity & DigitalForensics Aspirant",
  "Digital Problem Solver",
  "Founder of Ethera",
  "Tech Mentor"
];

  const roleText = document.getElementById("roleText");

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentTitle = titles[titleIndex];

    if (!isDeleting) {
      roleText.textContent = currentTitle.slice(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentTitle.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1400);
        return;
      }
    } else {
      roleText.textContent = currentTitle.slice(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
      }
    }

    const speed = isDeleting ? 45 : 85;
    setTimeout(typeEffect, speed);
  }

  if (roleText) {
    typeEffect();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const skillTabs = document.querySelectorAll(".skills-tab");
  const skillGrids = document.querySelectorAll(".skills-grid");

  skillTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-target");

      skillTabs.forEach((item) => item.classList.remove("active"));
      skillGrids.forEach((grid) => grid.classList.remove("active"));

      tab.classList.add("active");

      const targetGrid = document.getElementById(target);
      if (targetGrid) {
        targetGrid.classList.add("active");
      }
    });
  });
});

// Project Data
const projects = [
  {
    icon: "fa-solid fa-lock",
    category: "backend",
    categoryLabel: "Backend / Security",
    title: "Secure M-Pesa Auth System",
    summary: "M-Pesa-verified access control backend with token-based auth and Swagger-documented APIs.",
    highlights: [
      "Payment verification via Safaricom M-Pesa (STK Push, Paybill/Till)",
      "JWT + UUIDv4 tokens to prevent link-sharing and enforce verified access",
      "Swagger-documented REST APIs designed for easy frontend integration"
    ],
    description:
      "Problem: The film streaming platform needed a way to ensure that only verified, paying users could access content, and to stop people from sharing links or bypassing payments. Solution & Approach: I built a secure, M-Pesa-powered authentication backend using Node.js, Express.js, MySQL, Prisma, and UUIDv4 tokens. Payments are verified via Safaricom M-Pesa APIs, then access tokens are generated and validated through Swagger-documented REST APIs, making the system scalable, auditable, and easy to integrate with any frontend.",
    technologies: [
      "Node.js",
      "Express.js",
      "M-Pesa API",
      "MySQL",
      "Prisma",
      "UUIDv4 Tokens",
      "JWT",
      "Swagger"
    ],
    demoLink: "#",
    codeLink: "https://github.com/iamanduru/MPesa-Auth"
  },
  {
  icon: "fa-solid fa-shield-halved",
  category: "security",
  categoryLabel: "Security Automation",
  title: "API Gateway Security Scanner",
  summary: "Python-based security assessment tool that simulates API Gateway posture checks and flags common misconfigurations.",
  highlights: [
    "Detects missing authentication, weak auth, insecure transport, and permissive CORS",
    "Simulates unauthorized access checks and assigns simple risk levels",
    "Generates structured findings that can be extended into real AWS security validation"
  ],
  description:
    "A modular Python security utility built to simulate API Gateway security assessments. The tool reviews API definitions for missing authentication, weak authentication methods, lack of HTTPS enforcement, overly permissive CORS, and possible unauthorized access exposure. It then classifies findings by risk level and generates a structured report. The project is designed as a prototype for future extension into live AWS API Gateway scanning using boto3.",
  technologies: ["Python", "API Security", "Security Automation", "Risk Classification", "JSON Reporting"],
  codeLink: "https://github.com/iamanduru/API_Security"
},
  {
    icon: "fa-solid fa-shield-heart",
    category: "web",
    categoryLabel: "Desktop / Software",
    title: "GBV Reporting & Support Platform",
    summary: "Secure reporting system for GBV incidents with structured admin workflows and reliable data storage.",
    highlights: [
      "Structured report management with admin dashboard",
      "MVC + DAO/SDAO architecture for maintainability",
      "Built for safe reporting and service coordination"
    ],
    description:
      "I built a desktop application using Java Swing, MVC, DAO/SDAO, and MySQL to support secure incident reporting and administrative management. The system separates UI, logic, and data cleanly, making it easier to maintain and extend.",
    technologies: ["Java", "Java Swing", "MVC", "DAO/SDAO", "MySQL", "JDBC", "Maven"],
    demoLink: "#",
    codeLink: "https://github.com/iamanduru/GBVSystem"
  },
  {
    icon: "fa-solid fa-spa",
    category: "web",
    categoryLabel: "Web App",
    title: "Therapist Portfolio Website",
    summary: "Calm, accessible therapist website designed to build trust and make services easy to understand.",
    highlights: [
      "Responsive and accessibility-aware design",
      "Subtle animation for a professional feel",
      "Fast-loading, trust-centered content structure"
    ],
    description:
      "I designed and built a responsive therapist website using HTML, CSS, JavaScript, and Animate.css. The focus was trust, clarity, emotional safety, and a user-friendly content flow.",
    technologies: ["HTML", "CSS", "JavaScript", "Animate.css"],
    demoLink: "https://therapist101.netlify.app/",
    codeLink: "https://github.com/iamanduru/Therapist"
  },
  {
    icon: "fa-solid fa-mouse-pointer",
    category: "web",
    categoryLabel: "Frontend / UX",
    title: "Cursor Ripple",
    summary: "Lightweight interactive cursor trail built with Canvas for subtle UX delight on landing pages.",
    highlights: [
      "Canvas-based interactive effect",
      "Customizable and lightweight",
      "Easy to plug into portfolios and landing pages"
    ],
    description:
      "A lightweight HTML5 Canvas interaction effect built to add subtle delight to landing pages without hurting performance.",
    technologies: ["HTML", "CSS", "JavaScript", "Canvas"],
    demoLink: "https://iamanduru.github.io/cursor-ripple/",
    codeLink: "https://github.com/iamanduru/cursor-ripple"
  },
  {
    icon: "fa-solid fa-hospital",
    category: "web",
    categoryLabel: "Web App",
    title: "SerenityCare Clinic Website",
    summary: "Trust-focused clinic website with clear service structure, team profiles, and patient-friendly navigation.",
    highlights: [
      "Clear service and team presentation",
      "Responsive patient-friendly interface",
      "Built for readability and trust"
    ],
    description:
      "A responsive clinic website built with HTML5, CSS3, JavaScript, and Animate.css. It helps patients quickly understand services, meet the team, and navigate with confidence.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Animate.css"],
    demoLink: "https://serenitycare.netlify.app/",
    codeLink: "https://github.com/iamanduru/SerenityCare"
  },
  {
    icon: "fa-solid fa-boxes-stacked",
    category: "backend",
    categoryLabel: "Backend / API",
    title: "Inventory & Procurement Backend",
    summary: "Auditable procurement backend with RBAC workflows for requests, approvals, receiving, and payments.",
    highlights: [
      "Workflow-aligned modular backend architecture",
      "RBAC + JWT secured APIs",
      "Audit-friendly design using Prisma and MySQL"
    ],
    description:
      "A modular API-first backend designed around real procurement workflows. Built with Node.js, Express.js, Prisma, and MySQL, with secure access controls and extensible domain logic.",
    technologies: ["Node.js", "Express.js", "Prisma", "MySQL", "REST APIs", "JWT", "RBAC", "Swagger"],
    demoLink: "#",
    codeLink: "https://github.com/iamanduru/inventory-procurement-backend"
  },
  {
    icon: "fa-solid fa-ticket",
    category: "web",
    categoryLabel: "Full Stack",
    title: "Online Ticketing System",
    summary: "Fraud-resistant ticketing workflow with QR verification, payment confirmation, and automated ticket issuing.",
    highlights: [
      "End-to-end event and ticket workflow",
      "Receipt validation and secure ticket issuing",
      "React frontend + Node/Express backend"
    ],
    description:
      "A full digital ticketing system designed for real-world event management, secure payment confirmation, automated ticket generation, and QR-based validation.",
    technologies: ["Node.js", "Express.js", "Prisma", "MySQL", "React", "Tailwind CSS", "QR Verification", "JWT"],
    demoLink: "#",
    codeLink: {
      backend: "https://github.com/iamanduru/OTBackend/tree/auth",
      frontend: "https://github.com/iamanduru/OTFrontend"
    }
  },
  {
    icon: "fa-solid fa-network-wired",
    category: "security",
    categoryLabel: "Security / Python",
    title: "Network Security Test Lab",
    summary: "Root-required network diagnostics script that validates interfaces, connectivity, DNS, and local listeners.",
    highlights: [
      "Interface and IP inspection",
      "ICMP/TCP connectivity checks",
      "Listener and process mapping via /proc"
    ],
    description:
      "A practical Python-based network security lab script for host-level diagnostics, DNS checks, local listener inspection, and network posture visibility.",
    technologies: ["Python", "Linux /proc", "Sockets", "subprocess", "iproute2", "ss", "TCP/ICMP checks"],
    demoLink: "#",
    codeLink: "https://github.com/iamanduru/Network_Security_with_Python"
  },
  {
  icon: "fa-solid fa-radar",
  category: "security",
  categoryLabel: "Security Automation",
  title: "Threat Intelligence Ingestion & Triage Tool",
  summary: "Python utility for ingesting AlienVault OTX pulses, extracting indicators of compromise, and producing priority-based analyst reports.",
  highlights: [
    "Integrates with AlienVault OTX to retrieve subscribed threat intelligence pulses",
    "Extracts tags and IoCs, then applies simple rule-based prioritization",
    "Produces a readable export for threat review and analyst workflow support"
  ],
  description:
    "This project is a Python-based threat intelligence workflow tool that connects to the AlienVault OTX API, retrieves subscribed pulse data, validates the payload, extracts indicators of compromise, and assigns priority based on high-risk categories such as phishing, ransomware, malware, and credential theft. It then generates a report for quick review, making it a strong prototype for security automation, CTI enrichment, and analyst support use cases.",
  technologies: ["Python", "Requests", "AlienVault OTX API", "Threat Intelligence", "IoC Analysis", "Security Reporting"],
  codeLink: "https://github.com/iamanduru/AppliedCTI"
},
{
  icon: "fa-solid fa-file-shield",
  category: "security",
  categoryLabel: "Static Analysis",
  title: "PDF Static Analyzer",
  summary: "Python-based utility for triaging suspicious PDF files through string extraction, hash generation, keyword detection, and report export.",
  highlights: [
    "Extracts readable strings from binary PDF data for fast suspicious-content triage",
    "Computes MD5 and SHA-256 hashes to support integrity tracking and evidence handling",
    "Exports both text and JSON reports with simple risk classification"
  ],
  description:
    "A lightweight Python security and forensics utility built to support static triage of suspicious PDF files. The tool reads PDF content in binary mode, extracts printable strings, computes file hashes, identifies suspicious indicators such as JavaScript and execution-related actions, assigns a basic risk level, and exports structured reports for analyst review.",
  technologies: ["Python", "Static Analysis", "Hashing", "Regex", "JSON Reporting", "Digital Forensics"],
  codeLink: "https://github.com/iamanduru/static_analysis"
},
{
  icon: "fa-solid fa-bug",
  category: "security",
  categoryLabel: "Malware Triage",
  title: "Static Malware Analyzer",
  summary: "Python-based malware triage utility that hashes suspicious binaries, simulates disassembly, detects obfuscation-like patterns, and exports structured reports.",
  highlights: [
    "Computes MD5 and SHA-256 hashes to support evidence tracking and sample identification",
    "Generates a simulated disassembly view and flags suspicious obfuscation-like instruction patterns",
    "Detects embedded payload markers and exports both text and JSON reports"
  ],
  description:
    "A lightweight Python static analysis tool built for first-pass triage of suspicious binary samples. The utility safely loads a file, computes cryptographic hashes, generates a simulated disassembly-style output, checks for suspicious obfuscation patterns, detects embedded payload markers, assigns a simple risk level, and exports structured findings for analyst review.",
  technologies: ["Python", "Static Analysis", "Hashing", "Binary Triage", "JSON Reporting", "Security Automation"],
  codeLink: "https://github.com/iamanduru/Malware_Analyzer"
}
  
];

const projectsGrid = document.getElementById("projectsGrid");
const projectsCounter = document.getElementById("projectsCounter");
const paginationInfo = document.getElementById("projectsPaginationInfo");
const prevProjectsBtn = document.getElementById("prevProjects");
const nextProjectsBtn = document.getElementById("nextProjects");
const filterButtons = document.querySelectorAll(".project-filter");

let activeFilter = "all";
let currentPage = 1;
const projectsPerPage = 6;

function getFilteredProjects() {
  if (activeFilter === "all") return projects;
  return projects.filter(project => project.category === activeFilter);
}

function truncateTech(technologies, limit = 6) {
  return technologies.slice(0, limit);
}

function createCodeLinks(codeLink) {
  if (!codeLink || codeLink === "#") {
    return "";
  }

  if (typeof codeLink === "string") {
    return `
      <a href="${codeLink}" target="_blank" rel="noopener" class="project-link project-link--secondary">
        <i class="fa-brands fa-github"></i>
        <span>Code</span>
      </a>
    `;
  }

  if (typeof codeLink === "object") {
    return `
      <a href="${codeLink.backend}" target="_blank" rel="noopener" class="project-link project-link--secondary">
        <i class="fa-brands fa-github"></i>
        <span>Backend Code</span>
      </a>
      <a href="${codeLink.frontend}" target="_blank" rel="noopener" class="project-link project-link--secondary">
        <i class="fa-brands fa-github"></i>
        <span>Frontend Code</span>
      </a>
    `;
  }

  return "";
}

function renderProjects() {
  const filteredProjects = getFilteredProjects();
  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / projectsPerPage));

  if (currentPage > totalPages) currentPage = totalPages;

  const start = (currentPage - 1) * projectsPerPage;
  const end = start + projectsPerPage;
  const currentProjects = filteredProjects.slice(start, end);

  projectsGrid.innerHTML = currentProjects
    .map((project, index) => {
      const projectId = `project-${start + index}`;

      return `
        <article class="project-card">
          <div class="project-card__top">
            <span class="project-card__category">${project.categoryLabel}</span>
            <div class="project-card__icon">
              <i class="${project.icon}"></i>
            </div>
          </div>

          <h3 class="project-card__title">${project.title}</h3>

          <p class="project-card__summary">${project.summary}</p>

          <div class="project-card__highlights-wrap">
            <div class="project-card__section-label">Highlights</div>
            <ul class="project-card__highlights">
              ${project.highlights.map(item => `<li>${item}</li>`).join("")}
            </ul>
          </div>

          <button class="project-card__toggle" type="button" data-target="${projectId}">
            View Description
          </button>

          <p class="project-card__description" id="${projectId}">
            ${project.description}
          </p>

          <div class="project-card__tech-wrap">
            <div class="project-card__section-label">Technologies</div>
            <div class="project-card__tech">
              ${truncateTech(project.technologies).map(tech => `<span>${tech}</span>`).join("")}
            </div>
          </div>

          <div class="project-card__links">
            ${
              project.demoLink && project.demoLink !== "#"
                ? `
                <a href="${project.demoLink}" target="_blank" rel="noopener" class="project-link project-link--primary">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  <span>Live Demo</span>
                </a>
              `
                : ""
            }
            ${createCodeLinks(project.codeLink)}
          </div>
        </article>
      `;
    })
    .join("");

  projectsCounter.textContent = `${filteredProjects.length} Project${filteredProjects.length !== 1 ? "s" : ""}`;
  paginationInfo.textContent = `Page ${currentPage} of ${totalPages}`;
  prevProjectsBtn.disabled = currentPage === 1;
  nextProjectsBtn.disabled = currentPage === totalPages;

  bindProjectToggles();
}

function bindProjectToggles() {
  const toggleButtons = document.querySelectorAll(".project-card__toggle");

  toggleButtons.forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const description = document.getElementById(targetId);
      const card = button.closest(".project-card");

      if (!description || !card) return;

      const isExpanded = card.classList.contains("expanded");

      card.classList.toggle("expanded");
      button.textContent = isExpanded ? "View Description" : "Hide Description";
    });
  });
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    activeFilter = button.getAttribute("data-filter");
    currentPage = 1;
    renderProjects();
  });
});

prevProjectsBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderProjects();
  }
});

nextProjectsBtn.addEventListener("click", () => {
  const filteredProjects = getFilteredProjects();
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  if (currentPage < totalPages) {
    currentPage++;
    renderProjects();
  }
});

document.addEventListener("DOMContentLoaded", renderProjects);


document.addEventListener("DOMContentLoaded", () => {
  const statNumbers = document.querySelectorAll(".stat-number");
  const statsSection = document.querySelector(".stats-section");

  if (!statsSection || !statNumbers.length) return;

  let hasAnimated = false;

  function animateCounter(counter) {
    const target = Number(counter.getAttribute("data-target"));
    const suffix = counter.getAttribute("data-suffix") || "";
    const duration = 1800;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easedProgress * target);

      counter.textContent = `${currentValue}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = `${target}${suffix}`;
      }
    }

    requestAnimationFrame(updateCounter);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          statNumbers.forEach((counter) => animateCounter(counter));
          hasAnimated = true;
          observer.unobserve(statsSection);
        }
      });
    },
    {
      threshold: 0.35
    }
  );

  observer.observe(statsSection);
});


const reports = [
  {
  icon: "fa-brands fa-linux",
  title: "Ubuntu System Hardening Assessment",
  meta: "Linux Security Assessment • Jan 2026",
  abstract:
    "Reviewed an Ubuntu workstation against baseline hardening requirements for local accounts, privilege control, password aging, and SSH configuration. The assessment identified high-risk issues including unauthorized access, excessive sudo privileges, missing password controls, and insecure SSH settings, followed by a prioritized remediation plan.",
  tags: ["Linux Hardening", "SSH Security", "Least Privilege", "Password Policy", "Access Control"],
  file: "./reports/System Hardening Assessment Report.pdf"
},
{
  icon: "fa-solid fa-network-wired",
  title: "Enterprise Security Architecture Assessment",
  meta: "Architecture Review • Mar 2026",
  abstract:
    "Reviewed the security design of a segmented enterprise environment with dedicated web, database, internal, and compliance zones. Assessed segmentation logic, firewall controls, server hardening, monitoring architecture, and alignment with PCI-sensitive security principles, with recommendations for logging maturity, hardening, and validation.",
  tags: ["Security Architecture", "Segmentation", "PCI DSS", "Hardening", "Vulnerability Management"],
  file: "./reports/Security Architecture Assessment Report.pdf"
},
{
  icon: "fa-solid fa-magnifying-glass",
  title: "Digital Forensics Examination — FAT32 File Recovery & Metadata Analysis",
  meta: "Digital Forensics Report • Mar 2026",
  abstract:
    "Examined a FAT32 forensic disk image to identify deleted files, analyze file system metadata, recover evidentiary images, and validate integrity through hash comparison. Key findings included successful recovery of deleted JPEG and PNG files, a significant timestamp anomaly, and a binary mismatch between one CLI-recovered file and its scripted carving output.",
  tags: ["Digital Forensics", "FAT32", "File Recovery", "Metadata Analysis", "Hash Validation"],
  file: "./reports/Digital Forensics Examination Report.pdf"
},
{
  icon: "fa-solid fa-triangle-exclamation",
  title: "Incident Response Assessment — Phishing-Led Intrusion Review",
  meta: "Incident Response Review • Mar 2026",
  abstract:
    "Assessed a suspected phishing-led compromise involving possible persistence, document tampering, and data exfiltration. The report evaluated preparedness, detection, containment, eradication, recovery, and post-incident improvement needs, identifying major gaps in SIEM visibility, endpoint telemetry, governance, and forensic readiness.",
  tags: ["Incident Response", "Phishing", "Data Exfiltration", "Preparedness", "Containment"],
  file: "./reports/Incident Response Assessment Report.pdf"
},
{
  icon: "fa-solid fa-triangle-exclamation",
  title: "Legacy Infrastructure Vulnerability Assessment",
  meta: "Vulnerability Assessment • Mar 2026",
  abstract:
    "Reviewed a legacy server representing a smart-city operations environment to identify exposed services, validate critical weaknesses, and assess business risk. The assessment found a severe attack surface, including a critical bindshell, Telnet and r-services exposure, externally reachable databases, and limited monitoring capability.",
  tags: ["Vulnerability Assessment", "Attack Surface", "Service Exposure", "CIS Controls", "Smart-City Security"],
  file: "./reports/Vulnerability Assessment Report.pdf"
},
{
  icon: "fa-solid fa-cloud",
  ttitle: "SecureHealth HIPAA Cloud Migration Risk Assessment",
  meta: "Cloud Security Risk Assessment • Mar 2026",
  abstract:
    "Assessed a healthcare cloud migration against HIPAA and ISO 27001-style risk management principles, focusing on PHI protection, privileged access, EHR permissions, backup resilience, and cloud administration. Highest-priority risks included unencrypted PHI in cloud storage and lack of MFA for administrative access to virtual machines.",
  tags: ["HIPAA", "Cloud Security", "ISO 27001", "PHI Protection", "Risk Management"],
  file: "./reports/HIPAA Cloud Security Risk Assessment Report.pdf"
},
{
  icon: "fa-solid fa-car",
  title: "STRIDE Threat Model — Connected Vehicle Platform",
  meta: "Threat Modeling / STRIDE • Mar 2026",
  abstract:
    "Applied the STRIDE framework to a connected and autonomous vehicle ecosystem covering vehicle identity, cloud telemetry, OTA firmware delivery, secure messaging, and partner APIs. The highest-priority risks were firmware tampering, denial-of-service against authentication and update infrastructure, and API data exposure or misuse.",
  tags: ["STRIDE", "Threat Modeling", "OTA Security", "API Security", "Automotive Cybersecurity"],
  file: "/reports/AutoDrive_STRIDE_Threat_Model_Report.pdf"
},
{
  icon: "fa-solid fa-industry",
  title: "Industrial IoT Architecture Assessment",
  meta: "IIoT Architecture Review • Mar 2026",
  abstract:
    "Evaluated an industrial IoT design for predictive maintenance, overheating detection, and energy optimization across a manufacturing environment. The assessment reviewed sensing, edge processing, MQTT communication, cloud integration, dashboard design, and security-by-design controls, with key recommendations around gateway hardening, credential governance, segmentation, and fail-safe operations.",
  tags: ["IIoT", "MQTT", "Edge Computing", "Architecture Review", "Security by Design"],
  file: "/reports/Industrial IoT Architecture Assessment.pdf"
},
{
  icon: "fa-solid fa-traffic-light",
  title: "Smart City IoT Security Assessment",
  meta: "IoT / OT Security Assessment • Mar 2026",
  abstract:
    "Assessed the security posture of a smart traffic management environment including traffic lights, CCTV, vehicle sensors, an edge gateway, and cloud analytics. Major findings included default and shared credentials, outdated firmware, insecure protocols such as Telnet and FTP, incomplete segmentation, weak encryption, and immature monitoring and incident response.",
  tags: ["Smart City Security", "IoT Security", "OT Security", "Critical Infrastructure", "Segmentation"],
  file: "/reports/Smart_City_IoT_Security_Assessment.pdf"
},
{
  icon: "fa-solid fa-binoculars",
  title: "Wazuh Threat Hunting Report — IOC Investigation",
  meta: "Threat Hunting / SIEM Analysis • Feb 2026",
  abstract:
    "Investigated suspicious activity in a Wazuh SIEM environment and identified repeated RDP brute-force attempts, internal SMB probing, and suspicious web traffic consistent with reconnaissance or attempted initial access. The report mapped observed behavior to MITRE ATT&CK and prioritized mitigations for remote access hardening, segmentation, and alert correlation.",
  tags: ["Wazuh", "Threat Hunting", "MITRE ATT&CK", "RDP Brute Force", "SMB Probing"],
  file: "/reports/Wazuh_Threat_Hunting_Report.pdf"
},
{
  icon: "fa-solid fa-crosshairs",
  title: "APT29 Threat Hunting Assessment — Intrusion Scenario Analysis",
  meta: "Threat Hunting / APT Analysis • Feb 2026",
  abstract:
    "Analyzed an APT29-inspired intrusion scenario involving spearphishing, fileless PowerShell execution, DLL side-loading, privilege escalation, lateral movement through RDP and WMI, and encrypted exfiltration over HTTPS. The report mapped the attack chain to MITRE ATT&CK and recommended layered controls for phishing resistance, endpoint monitoring, privileged activity detection, and exfiltration response.",
  tags: ["APT29", "Threat Hunting", "PowerShell", "Lateral Movement", "Data Exfiltration"],
  file: "/reports/APT29_Threat_Hunting_Report.pdf"
},
{
  icon: "fa-solid fa-scissors",
  title: "Digital Forensics File Carving Examination",
  meta: "Digital Forensics / File Carving • Mar 2026",
  abstract:
    "Recovered deleted, hidden, and inaccessible files from a forensic disk image using signature analysis and a Python-based carving workflow. The examination retained only validated JPEG, PNG, and PDF outputs, combining hex-level review, MD5 hashing, and file-openability checks to preserve evidentiary reliability.",
  tags: ["File Carving", "Digital Forensics", "Python", "Hash Validation", "Evidence Recovery"],
  file: "/reports/Forensic_File_Carving_Report.pdf"
},
{
  icon: "fa-solid fa-diagram-project",
  title: "Hybrid Cloud Shared Responsibility and Compliance Assessment",
  meta: "Hybrid Cloud / Compliance Review • Mar 2026",
  abstract:
    "Reviewed security responsibility allocation and compliance readiness in a hybrid healthcare cloud environment handling PHI. The assessment found partial maturity, with major gaps around backup encryption, MFA enforcement, centralized key management, centralized logging, and tested hybrid disaster recovery.",
  tags: ["Hybrid Cloud", "HIPAA", "Shared Responsibility", "PHI Security", "Compliance"],
  file: "/reports/Hybrid_Cloud_Shared_Responsibility_Compliance_Report.pdf"
},
{
  icon: "fa-solid fa-file-code",
  title: "Regex Log Parsing and Security Analysis",
  meta: "Log Analysis / IoC Identification • Feb 2026",
  abstract:
    "Used regex-driven parsing of web and server logs to identify indicators of compromise associated with failed logins, unauthorized access attempts, repeated suspicious IP activity, targeted record access, and off-hours behavior. The report demonstrated a lightweight triage approach for surfacing brute-force, privilege probing, and potential data-access anomalies.",
  tags: ["Regex", "Log Analysis", "IoC Detection", "Brute Force", "Security Monitoring"],
  file: "/reports/Regex_Log_Parsing_Analysis_Report.pdf"
},
{
  icon: "fa-solid fa-network-wired",
  title: "Secure Micro-Segmentation Assessment",
  meta: "Zero Trust / Segmentation Review • Mar 2026",
  abstract:
    "Assessed a micro-segmented network design intended to reduce lateral movement and improve visibility through deny-rule logging. The review confirmed successful enforcement of explicit trust boundaries between management, application, and restricted zones, with recommendations for SIEM correlation, IDS/NDR coverage, and ongoing rule validation.",
  tags: ["Micro-Segmentation", "Zero Trust", "Firewall Rules", "Lateral Movement", "SIEM"],
  file: "/reports/Secure_Micro_Segmentation_Report.pdf"
}

];

const reportsGrid = document.getElementById("reportsGrid");
const reportsCounter = document.getElementById("reportsCounter");
const reportsPaginationInfo = document.getElementById("reportsPaginationInfo");
const prevReportsBtn = document.getElementById("prevReports");
const nextReportsBtn = document.getElementById("nextReports");

let currentReportsPage = 1;
const reportsPerPage = 6;

function renderReports() {
  if (!reportsGrid) return;

  const totalPages = Math.max(1, Math.ceil(reports.length / reportsPerPage));
  if (currentReportsPage > totalPages) currentReportsPage = totalPages;

  const start = (currentReportsPage - 1) * reportsPerPage;
  const end = start + reportsPerPage;
  const currentReports = reports.slice(start, end);

  reportsGrid.innerHTML = currentReports
    .map(
      (report) => `
        <article class="report-card">
          <div class="report-card__top">
            <div class="report-card__icon">
              <i class="${report.icon}"></i>
            </div>
            <div>
              <h3 class="report-card__title">${report.title}</h3>
              <div class="report-card__meta">${report.meta}</div>
            </div>
          </div>

          <p class="report-card__abstract">${report.abstract}</p>

          <div class="report-card__tags">
            ${report.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>

          <a href="${report.file}" target="_blank" rel="noopener" class="report-card__link">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
            <span>Open Report</span>
          </a>
        </article>
      `
    )
    .join("");

  if (reportsCounter) {
    reportsCounter.textContent = `${reports.length} Report${reports.length !== 1 ? "s" : ""}`;
  }

  if (reportsPaginationInfo) {
    reportsPaginationInfo.textContent = `Page ${currentReportsPage} of ${totalPages}`;
  }

  if (prevReportsBtn) {
    prevReportsBtn.disabled = currentReportsPage === 1;
  }

  if (nextReportsBtn) {
    nextReportsBtn.disabled = currentReportsPage === totalPages;
  }
}

if (prevReportsBtn) {
  prevReportsBtn.addEventListener("click", () => {
    if (currentReportsPage > 1) {
      currentReportsPage--;
      renderReports();
    }
  });
}

if (nextReportsBtn) {
  nextReportsBtn.addEventListener("click", () => {
    const totalPages = Math.ceil(reports.length / reportsPerPage);
    if (currentReportsPage < totalPages) {
      currentReportsPage++;
      renderReports();
    }
  });
}

document.addEventListener("DOMContentLoaded", renderReports);


document.addEventListener("DOMContentLoaded", () => {
  const footerYear = document.getElementById("footerYear");
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
});