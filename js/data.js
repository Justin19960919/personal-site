const experiences = [
  {
    title: "Graduate teaching assistant",
    company: "Northeastern University",
    startDate: "Sep 2021",
    endDate: "Dec 2021",
    bulletPoints: [
      "Instructed 30 graduate students with Python for CS5001 Foundations of Computer Science by holding weekly office hours and lab sessions.",
      "Regularly worked alongside professor and fellow TAs to debug and improve coding assignments and synchronize grading policy."
    ],
  },
  {
    title: "Data Analyst Intern",
    company: "Pizza Hut (Taiwan)",
    startDate: "Jul 2019",
    endDate: "Aug 2019",
    bulletPoints: [
      "Analyzed marketing campaign data (R) with statistical methods including regression analysis, chi - square tests, and delivered comprehensive data visualization to target key features, increasing consequential marketing campaign consumers by 15 %.",
      "Developed a KNN model (Python, SQL) using customer purchase records to further segment consumers for precision marketing.",
    ],
  },
];


const projects = [
  {
    imgLink: "../assets/images/basketstat/bs1.png",
    imgAltText: "BasketStat image",
    projectName: "BasketStat",
    githubLink: "https://github.com/Justin19960919/BasketStat",
    websiteLink: "https://basketball-stat.herokuapp.com/",
    description: `
    A full stack Django web app that provides features such as blog
    posting, recording games, calculating statistics, and user login,
    logout functionality. The webapp uses ajax to fetch and render data
    on the screen, and uses a PostgreSQL database as the backend.
    `,
    technologies: [
      "Python",
      "Django",
      "Javascript",
      "Bootstrap",
      "PostgreSQL",
    ],
  },
  {
    imgLink: "../assets/images/kpop101/home.png",
    imgAltText: "kpop101-image",
    projectName: "Kpop 101",
    githubLink: "https://github.com/Justin19960919/face-rec",
    websiteLink: "",
    description: `
    A python Flask web app aimed to provide Users with the experience of
    getting into the KPOP world. People who want to get into kpop often
    suffer from not being able to discriminate KPOP stars and the
    overwhelming information beforehand. This app provides four
    features, mainly: facial recognition, latest news, a newsletter to
    subscribe,and a brief introduction of korean entertainment
    companies.
    `,
    technologies: [
      "Python",
      "Flask",
      "Facial Recognition",
      "HTML",
      "Bootstrap",
      "Google Sheets API",
    ],
  },
];