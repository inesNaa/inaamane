import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="skills"

export default class SkillsController extends Controller {
  static targets = ["progress"];

  connect() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
    this.handleScroll();
  }

  disconnect() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    this.progressTargets.forEach((progress) => {
      const value = progress.querySelector(".progress-bar").dataset.level;
      const position = progress.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (position < windowHeight) {
        progress.querySelector(".progress-bar").style.width = `${value}%`;
      }
    });
  }
}


// test 


// export default class SkillsController extends Controller {
//   static targets = ["progress"];

//   connect() {
//     window.addEventListener("scroll", this.handleScroll.bind(this));
//     this.handleScroll();
//   }

//   disconnect() {
//     window.removeEventListener("scroll", this.handleScroll);
//   }

//   handleScroll() {
//     this.progressTargets.forEach((progress) => {
//       const value = progress.querySelector(".progress-bar").dataset.level;
//       const position = progress.getBoundingClientRect().top;
//       const windowHeight = window.innerHeight;

//       if (position < windowHeight) {
//         const progressTop = position + progress.offsetHeight;
//         const scrollPercent = ((windowHeight - position) / (windowHeight + progress.offsetHeight)) * 100;
//         const level = Math.round(scrollPercent * (value / 100));
//         progress.querySelector(".progress-bar").style.width = `${level}%`;
//       }
//     });
//   }
// }






// export default class SkillsController extends Controller {
//   static targets = ["progress"];
//   filled = new Set();

//   connect() {
//     window.addEventListener("scroll", this.handleScroll.bind(this));
//     this.handleScroll();
//   }

//   disconnect() {
//     window.removeEventListener("scroll", this.handleScroll);
//   }

//   handleScroll() {
//     this.progressTargets.forEach((progress) => {
//       const value = progress.querySelector(".progress-bar").dataset.level;
//       const position = progress.getBoundingClientRect().top;
//       const windowHeight = window.innerHeight;

//       if (!this.filled.has(progress) && position < windowHeight && position + progress.offsetHeight > 0) {
//         this.fillProgressBar(progress, value);
//       }
//     });
//   }

//   fillProgressBar(progress, value) {
//     this.filled.add(progress);
//     const progressBar = progress.querySelector(".progress-bar");
//     const duration = 1000; // Durée de l'animation en millisecondes
//     const increment = value / duration; // Valeur d'augmentation par milliseconde

//     let progressWidth = 0;
//     const startTime = performance.now();

//     const animate = (currentTime) => {
//       const elapsedTime = currentTime - startTime;
//       progressWidth = elapsedTime * increment;

//       if (progressWidth >= value) {
//         progressWidth = value;
//       } else {
//         requestAnimationFrame(animate);
//       }

//       progressBar.style.width = `${progressWidth}%`;
//     };

//     requestAnimationFrame(animate);
//   }
// }





















// export default class SkillsController extends Controller {
//   static targets = ["progress"];
//   filled = false;

//   connect() {
//     window.addEventListener("scroll", this.handleScroll.bind(this));
//     this.handleScroll();
//   }

//   disconnect() {
//     window.removeEventListener("scroll", this.handleScroll);
//   }

//   handleScroll() {
//     this.progressTargets.forEach((progress) => {
//       const value = progress.querySelector(".progress-bar").dataset.level;
//       const position = progress.getBoundingClientRect().top;
//       const windowHeight = window.innerHeight;

//       if (!this.filled && position < windowHeight && position + progress.offsetHeight > 0) {
//         this.fillProgressBar(progress, value);
//       }
//     });
//   }

//   fillProgressBar(progress, value) {
//     this.filled = true;
//     const progressBar = progress.querySelector(".progress-bar");
//     const duration = 1000; // Durée de l'animation en millisecondes
//     const increment = value / duration; // Valeur d'augmentation par milliseconde

//     let progressWidth = 0;
//     const startTime = performance.now();

//     const animate = (currentTime) => {
//       const elapsedTime = currentTime - startTime;
//       progressWidth = elapsedTime * increment;

//       if (progressWidth >= value) {
//         progressWidth = value;
//       } else {
//         requestAnimationFrame(animate);
//       }

//       progressBar.style.width = `${progressWidth}%`;
//     };

//     requestAnimationFrame(animate);
//   }
// }







// export default class SkillsController extends Controller {
//   static targets = ["progress"];

//   connect() {
//     this.observer = new IntersectionObserver(this.handleIntersection.bind(this));
//     this.progressTargets.forEach((progress) => {
//       this.observer.observe(progress);
//     });
//   }

//   disconnect() {
//     this.progressTargets.forEach((progress) => {
//       this.observer.unobserve(progress);
//     });
//   }

//   handleIntersection(entries) {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         const value = entry.target.querySelector(".progress-bar").dataset.level;
//         entry.target.querySelector(".progress-bar").style.width = `${value}%`;
//       }
//     });
//   }
// }


// export default class SkillsController extends Controller {
//   static targets = ["progress"];

//   connect() {
//     this.handleScroll();
//   }

//   handleScroll() {
//     this.progressTargets.forEach((progress) => {
//       const value = progress.querySelector(".progress-bar").dataset.level;
//       const position = progress.getBoundingClientRect().top;
//       const windowHeight = window.innerHeight;

//       if (position < windowHeight) {
//         progress.querySelector(".progress-bar").style.width = `${value}%`;
//       }
//     });
//   }
// }


// export default class SkillsController extends Controller {
//   static targets = ["progress"];

//   connect() {
//     window.addEventListener("scroll", this.handleScroll.bind(this));
//     this.handleScroll();
//   }

//   disconnect() {
//     window.removeEventListener("scroll", this.handleScroll);
//   }


//   handleScroll() {
//     this.progressTargets.forEach((progress) => {
//       const value = progress.querySelector(".progress-bar").dataset.level;
//       const position = progress.getBoundingClientRect().top;
//       const windowHeight = window.innerHeight;

//       if (position < windowHeight) {
//         progress.querySelector(".progress-bar").style.width = `${value}%`;
//       }
//     });
//   }

// }


  // handleScroll() {
  //   this.progressTargets.forEach((progress) => {
  //     const value = progress.querySelector(".progress-bar").dataset.level;
  //     const position = progress.getBoundingClientRect().top;
  //     const windowHeight = window.innerHeight;
  //     const progressHeight = progress.offsetHeight;
  //     const progressTop = position + progressHeight;

  //     if (position < windowHeight && progressTop > 0) {
  //       const scrollPercent = ((windowHeight - position) / (windowHeight + progressHeight)) * 100;
  //       const level = Math.round(scrollPercent * (value / 100));
  //       progress.querySelector(".progress-bar").style.width = `${level}%`;
  //     }
  //   });
  // }
