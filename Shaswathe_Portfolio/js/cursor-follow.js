
/* =========================================
   CURSOR-FOLLOW.JS
   Interactive hero portrait movement
========================================= */

(() => {

    const visual = document.getElementById("heroVisual");

    if (!visual) return;


    // Enable only on devices with a mouse or precision pointer

    const supportsPointer = window.matchMedia(

        "(hover: hover) and (pointer: fine)"

    ).matches;

    if (!supportsPointer) return;


    const maxMove = 40;


    /* =====================================
       1. POINTER MOVEMENT
    ===================================== */

    function movePortrait(event) {

        const rect = visual.getBoundingClientRect();

        if (!rect.width || !rect.height) return;


        // Calculate pointer position relative to centre

        const x = (event.clientX - rect.left) / rect.width - 0.5;

        const y = (event.clientY - rect.top) / rect.height - 0.5;


        // Apply movement

        visual.style.setProperty(

            "--move-x",

            `${x * maxMove}px`

        );

        visual.style.setProperty(

            "--move-y",

            `${y * maxMove}px`

        );

    }


    /* =====================================
       2. RESET WHEN POINTER LEAVES
    ===================================== */

    function resetPortrait() {

        visual.style.setProperty("--move-x", "0px");

        visual.style.setProperty("--move-y", "0px");

    }


    /* =====================================
       3. EVENT LISTENERS
    ===================================== */

    visual.addEventListener(

        "pointermove",

        movePortrait,

        {
            passive: true
        }

    );


    visual.addEventListener(

        "pointerleave",

        resetPortrait

    );


})();
