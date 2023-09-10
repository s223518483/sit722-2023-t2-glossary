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
		reference:
			"https://www.atlassian.com/itsm/service-request-management/slas",
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
		description:
			"Jira is a project management sofware using in agile model",
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
	{
		id: 21,
		term: "Docker",
		description:
			"Docker is pioneer in container technology, the technology leverage build in linux kernel feature like (chroot, namespace, cgroup, file permission) to create a isolated environment for application to run",
		reference: "https://docs.docker.com/get-started/",
	},
	{
		id: 22,
		term: "runc",
		description:
			"Runc is a low level container runtime write in Go language, which allow to create and run container from container image",
		reference: "https://github.com/opencontainers/runc",
	},
	{
		id: 23,
		term: "crun",
		description:
			"crun is other low level container runtime write in C language, crun is create as a replacement of runc to improve the performance of container runtime because container runtime using many system call to create and run container, and the system call usually write in C language",
		reference: "https://github.com/containers/crun",
	},
	{
		id: 24,
		term: "kata-containers",
		description:
			"kata-containers is a lightweight VM technology, the strong point of Kata is allow user manage VMs like they manage container",
		reference: "https://github.com/kata-containers/kata-containers",
	},
	{
		id: 25,
		term: "containerd",
		description:
			"containerd is a high level container runtime create by Docker, The purpose of high	level container is to manage and fetch the image from online repo and hand it to low level container runtime to create and run container",
		reference:
			"https://github.com/containerd/containerd/blob/main/docs/getting-started.md",
	},
	{
		id: 26,
		term: "cri-o",
		description:
			"cri-o is a high level container runtime create by Redhat, the purpose of cri-o is the same as containerd, but cri-o is design from ground up to work with perfect with kubernete",
		reference: "https://github.com/cri-o/cri-o",
	},
	{
		id: 27,
		term: "OCI",
		description:
			"OCI (Open Container Initiative) is a open source project create with purpose to standardize for container interface to allow different container technology layer interact with each other",
		reference: "https://opencontainers.org/about/overview/",
	},
	{
		id: 28,
		term: "CRI",
		description:
			"CRI is another standardize method allow different container technology layer interact with each other, the different is it create by kubernete to allow other container technology interact with kubernete",
		reference: "https://kubernetes.io/docs/concepts/architecture/cri/",
	},
	{
		id: 29,
		term: "Micro Service",
		description:
			"Micro Service is a software development methodology, by leverage container technology to allow to break down a large application into small independent service, each service is run in its own container and communicate with each other via API",
		reference:
			"https://cloud.google.com/learn/what-is-microservices-architecture#:~:text=Microservices%20allow%20a%20large%20application,microservices%20to%20compose%20its%20response.",
	},
	{
		id: 30,
		term: "OAuth",
		description:
			"OAuth is a standardize protocol used for authorization to allow user to grant access to their protect data without sharing their password",
		reference: "https://oauth.net/2/",
	},
	{
		id: 31,
		term: "Azure",
		description:
			"Azure is a cloud computing service create by Microsoft, Azure provide nearly a full stack of cloud service like: IaaS, PaaS, SaaS, Azure is also  intergrate with many Microsoft product like: Microsoft 365",
		reference: "https://azure.microsoft.com/en-us/get-started/",
	},
	{
		id: 32,
		term: "AWS",
		description:
			"AWS is an alternative for azure cloud computing service create by Amazon, AWS is a pioneer in cloud computing service, AWS provide nearly a full stack of cloud service like: IaaS, PaaS, SaaS",
		reference: "https://aws.amazon.com/what-is-aws/?nc1=f_cc",
	},
	{
		id: 33,
		term: "Google Cloud",
		description:
			"Google Cloud is an alternative for azure cloud computing service create by Google, Google Cloud provide nearly a full stack of cloud service like: IaaS, PaaS, SaaS",
		reference: "https://cloud.google.com/products",
	},
	{
		id: 34,
		term: "Cloud Computing Stack",
		description:
			"Cloud Computing Stack is a model to classify the cloud computing service into 3 layer: IaaS, PaaS, SaaS",
		reference:
			"https://www.mongodb.com/cloud-explained/cloud-computing-stack",
	},
	{
		id: 35,
		term: "Docker Swarm",
		description:
			"Docker Swarm is a container orchestration tool create by Docker",
		reference: "https://docs.docker.com/engine/swarm/",
	},
	{
		id: 36,
		term: "Kubernetes",
		description:
			"Kubernetes is a container orchestration tool create by Google, Kubernetes is a pioneer in container orchestration tool",
		reference: "https://kubernetes.io/docs/concepts/",
	},
	{
		id: 37,
		term: "OpenShift",
		description:
			"OpenShift is a container orchestration tool create by Redhat, OpenShift is a alternative for Kubernetes",
		reference:
			"https://www.redhat.com/en/technologies/cloud-computing/openshift",
	},
	{
		id: 38,
		term: "Terraform",
		description:
			"Terraform is a tool to automate create, manage and update infrastructure as code. Ansible is strong on create IaaS",
		reference: "https://developer.hashicorp.com/terraform/intro",
	},
	{
		id: 39,
		term: "Ansible",
		description:
			"Ansible is a tool to automate configuration management, application deployment, and orchestration. Ansible is strong on create PaaS",
		reference: "https://docs.ansible.com/ansible/latest/index.html",
	},
	{
		id: 40,
		term: "vagrant",
		description:
			"Vagrant is a tool to create and configure lightweight, reproducible, and portable development environments. Vargant support many virtualization technology like: VirtualBox, Hyper-V, VMware",
		reference: "https://developer.hashicorp.com/vagrant/intro",
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
