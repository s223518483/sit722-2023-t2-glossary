var express = require("express");
var router = express.Router();

const table_data = [
  {
    id: 1,
    term: "DevOps",
    description:
      "DevOps is a philosophy and methology try to unite the devepment process and operation process to increase the effiency and acuurancy of the workload ",
    reference: "https://aws.amazon.com/devops/what-is-devops/",
  },
  {
    id: 2,
    term: "ROI",
    description:
      "ROI (Return on Investment) is a metric unit to caculate and evelution the effieciency and profit of a bussiness investment ",
    reference:
      "https://services.google.com/fh/files/misc/whitepaper_roi_of_devops_transformation_2020_google_cloud.pdf",
  },
  {
    id: 3,
    term: "Waterfall model",
    description:
      "Waterfall model is one the frist model in Software development lifecycle, every phase in this model is execute in linear phase by phase from: Planing - Analyst - Design - Coding - Testing - Deploymnet - Maintenance",
    reference: "https://management.org/waterfall-methodology",
  },
  {
    id: 4,
    term: "Agile",
    description:
      "Agile is a software development methology had design to overcome the weakness of Waterfall model in flexibility and lack of stackeholder interaction",
    reference: "https://www.atlassian.com/agile",
  },
  {
    id: 5,
    term: "Git",
    description:
      "Git is distributed version control system design to management source code and a replacement of SVN",
    reference: "https://git-scm.com/",
  },
  {
    id: 6,
    term: "Nodejs",
    description:
      "Node is open source cross-plafrom javascript runtime with ability to interect with operating system , which allow developer have ability to develop full-stack web service by using only javascript",
    reference: "https://nodejs.org/en/about",
  },
  {
    id: 7,
    term: "GitHub",
    description:
      "GitHub is cloud storage implement git technology to allow individual or organiztion host their repositories in the cloud for collaboration",
    reference: "https://docs.github.com/en/get-started/using-git/about-git",
  },
  {
    id: 8,
    term: "JIT",
    description:
      "JIT(Just-In-Time compiler) is a methodlogy to improve the performance of the program by combine both compliler and interprter technology ",
    reference:
      "https://www.freecodecamp.org/news/just-in-time-compilation-explained/",
  },
  {
    id: 9,
    term: "DevSecOps",
    description:
      "DevSecOps is a DevOps model where security is become main focus in all aspect of the project",
    reference: "https://aws.amazon.com/devops/what-is-devops/",
  },
  {
    id: 10,
    term: "VScode",
    description:
      "Vscode is a open source cross-plafrom code editor ability using extensions",
    reference: "https://code.visualstudio.com/docs/supporting/faq",
  },
  {
    id: 11,
    term: "DevOps Cycle is the phase in DevOps ",
    description:
      "DevOps Cycle is the phase in DevOps, it contain 8 phase: Discover - Plan - Build - Test - Deploy - Operate - Observe - Continuous feedback",
    reference: "https://www.atlassian.com/devops",
  },
  {
    id: 12,
    term: "SLA",
    description:
      "SLA is service level agreement is documnet about agreement between customer and Project development team like: uptime, the scope of service, payment, measure metric...",
    reference: "https://www.atlassian.com/itsm/service-request-management/slas",
  },
  {
    id: 14,
    term: "KPI",
    description:
      "KPI (Key Performance Indicator) is a performing metric to evaluate the team distance to the outcome objective",
    reference: "https://www.atlassian.com/blog/productivity/okr-vs-kpi",
  },
  {
    id: 15,
    term: "Jira",
    description: "Jira is a project management sofware using in agile model",
    reference: "https://www.atlassian.com/software/jira",
  },
  {
    id: 16,
    term: "Docker",
    description:
      "Docker is all in one container technology allow software developer to build, test, and deploy software quickly",
    reference: "https://www.docker.com/why-docker/",
  },
  {
    id: 17,
    term: "Kubernete",
    description:
      "kubernete is a container orchestration, which allow to manage, orchestra and operate multi-container as the same time",
    reference: "https://kubernetes.io/docs/concepts/overview/",
  },
  {
    id: 18,
    term: "Jenkins",
    description:
      "Jenkins is a tool to create a automation pipeline in DevOps philosophy",
    reference: "https://www.jenkins.io/",
  },
  {
    id: 19,
    term: "CI/CD",
    description:
      "Continuous integration and Continuous delivery is a philosophy implement automation technology to automate all the phase of DevOps life cycle",
    reference: "https://www.redhat.com/en/topics/devops/what-is-ci-cd",
  },
  {
    id: 20,
    term: "JSplunk",
    description:
      "Splunk is software used for collect and monitor and analyst data of organization, using in monitor phase of DevOps life cycle",
    reference: "https://www.splunk.com/en_us/about-us/why-splunk.html",
  },
];

const desc = "This is a collection of term and sort deffination fo SIT722";

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "SIT722_Task_1.2",
    intro: desc,
    table_dt: table_data,
  });
});

module.exports = router;
