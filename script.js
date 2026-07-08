// ─── BACKGROUND SLIDER SCRIPT ───
        document.addEventListener('DOMContentLoaded', function() {
            let currentSlide = 0;
            const slides = document.querySelectorAll('.slide');

            if (slides.length > 1) {
                function showNextSlide() {
                    slides[currentSlide].classList.remove('active');
                    currentSlide = (currentSlide + 1) % slides.length;
                    slides[currentSlide].classList.add('active');
                }
                setInterval(showNextSlide, 6000);
            }

            // ─── FIREFLIES GENERATOR SCRIPT ───
            const firefliesContainer = document.getElementById('fireflies');
            
            // Performance Improvement: Reduce fireflies on mobile
            const fireflyCount = window.innerWidth < 480 ? 15 : 35;

            for (let i = 0; i < fireflyCount; i++) {
                let firefly = document.createElement('div');
                firefly.classList.add('firefly');

                // Random starting position (anywhere on screen)
                let startX = Math.random() * 100;
                let startY = Math.random() * 100;
                
                // Random drift distances
                let moveX = (Math.random() - 0.5) * 200; 
                let moveY = (Math.random() - 0.5) * 200;

                // Randomize animation durations and delays
                let driftDuration = 15 + Math.random() * 25;
                let flashDuration = 2 + Math.random() * 4;
                let animDelay = Math.random() * 10;

                // Apply styles
                firefly.style.left = `${startX}vw`;
                firefly.style.top = `${startY}vh`;
                firefly.style.setProperty('--move-x', `${moveX}px`);
                firefly.style.setProperty('--move-y', `${moveY}px`);
                
                firefly.style.animationDuration = `${driftDuration}s, ${flashDuration}s`;
                firefly.style.animationDelay = `${animDelay}s, ${animDelay}s`;

                firefliesContainer.appendChild(firefly);
            }
        });