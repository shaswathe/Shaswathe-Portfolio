
/* =========================================
   ANIMATIONS.JS
   Scroll reveal and timeline animation
========================================= */


/* =========================================
   1. SCROLL REVEAL ANIMATION
========================================= */

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    document.querySelectorAll(".reveal").forEach(element => {

        observer.observe(element);

    });

} else {

    // Fallback for older browsers

    document.querySelectorAll(".reveal").forEach(element => {

        element.classList.add("visible");

    });

}


/* =========================================
   2. TIMELINE SCROLL PROGRESS
========================================= */

const timelineLine = document.getElementById("timelineProgress");

const timeline = document.querySelector(".timeline");


function updateTimeline() {

    if (!timelineLine || !timeline) return;

    const rect = timeline.getBoundingClientRect();

    const progress = window.innerHeight * 0.72 - rect.top;

    const height = Math.max(

        0,

        Math.min(
            timeline.offsetHeight,
            progress
        )

    );

    timelineLine.style.height = height + "px";

}


/* =========================================
   3. SCROLL AND RESIZE EVENTS
========================================= */

window.addEventListener(

    "scroll",

    updateTimeline,

    {
        passive: true
    }

);


window.addEventListener(

    "resize",

    updateTimeline

);


// Initial timeline update

updateTimeline();
