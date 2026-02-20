// import { useState, useEffect, useRef } from 'react';

// export const useSpringScroll = (ref, targetPadding = 40, stiffness = 0.1) => {
//   const [springPercentage, setSpringPercentage] = useState(0);
//   const targetValue = useRef(0); // The "Goal" percentage
//   const currentValue = useRef(0); // The "Current" spring position

//   useEffect(() => {
//     let requestRunning = null;

//     const animate = () => {
//       // 1. Calculate distance to goal
//       const distance = targetValue.current - currentValue.current;

//       // 2. Apply spring physics (Lerp)
//       currentValue.current += distance * stiffness;

//       // 3. Update the state for the UI
//       setSpringPercentage(currentValue.current);

//       // 4. If we haven't reached the goal, keep the loop alive
//       if (Math.abs(distance) > 0.0001) {
//         requestRunning = window.requestAnimationFrame(animate);
//       } else {
//         requestRunning = null;
//       }
//     };

//     const handleScroll = () => {
//       if (!ref.current) return;

//       const rect = ref.current.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // Your specific Logic: 
//       // 0% at bottom of screen (windowHeight), 100% at targetPadding
//       const start = windowHeight;
//       const end = targetPadding;
//       const currentPos = rect.top;

//       const rawProgress = (start - currentPos) / (start - end);

//       // Update the "Goal" for the spring to chase
//       targetValue.current = Math.min(Math.max(rawProgress, 0), 1);

//       // Start animation if not already running
//       if (!requestRunning) {
//         requestRunning = window.requestAnimationFrame(animate);
//       }
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       if (requestRunning) window.cancelAnimationFrame(requestRunning);
//     };
//   }, [ref, targetPadding, stiffness]);

//   return springPercentage;
// };

import { useState, useEffect, useRef } from 'react';

export const useLowPowerSpringScroll = (ref, targetPadding = 40, stiffness = 0.1) => {
    const [springPercentage, setSpringPercentage] = useState(0);
    const targetValue = useRef(0);
    const currentValue = useRef(0);
    const isWithinRange = useRef(false); // Only track when visible

    useEffect(() => {
        let requestRunning = null;

        // 1. The Animation Loop (Only runs when target != current)
        const animate = () => {
            const distance = targetValue.current - currentValue.current;

            // If we are close enough, snap to target and stop the loop
            if (Math.abs(distance) < 0.0001) {
                currentValue.current = targetValue.current;
                setSpringPercentage(currentValue.current);
                requestRunning = null;
                return;
            }

            currentValue.current += distance * stiffness;
            setSpringPercentage(currentValue.current);
            requestRunning = window.requestAnimationFrame(animate);
        };

        // 2. The Scroll Handler (Only runs math if element is on screen)
        const handleScroll = () => {
            if (!isWithinRange.current || !ref.current) return;

            const rect = ref.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Logic only runs when relevant
            const rawProgress = (windowHeight - rect.top) / (windowHeight - targetPadding);
            const nextTarget = Math.min(Math.max(rawProgress, 0), 1);

            // Only trigger animation if the target has actually changed
            if (nextTarget !== targetValue.current) {
                targetValue.current = nextTarget;
                if (!requestRunning) {
                    requestRunning = window.requestAnimationFrame(animate);
                }
            }
        };

        // 3. Intersection Observer (The "Power Switch")
        // This turns off handleScroll when the element is off-screen
        const observer = new IntersectionObserver(
            ([entry]) => {
                isWithinRange.current = entry.isIntersecting;
            },
            { rootMargin: '100px' } // Start listening slightly before it appears
        );

        if (ref.current) observer.observe(ref.current);

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
            if (requestRunning) window.cancelAnimationFrame(requestRunning);
        };
    }, [ref, targetPadding, stiffness]);

    return springPercentage;
};