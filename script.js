 window.addEventListener("load", () => {
            document.getElementById("invitation").classList.add("loaded");
            createFloatingParticles();
        });

        function createFloatingParticles() {
            const container = document.getElementById('particlesContainer');
            const count = 30;
            const colors = ['#d4af37','#e5c158','#f4d03f','#ffffff'];

            for(let i=0;i<count;i++){
                const p = document.createElement('div');
                p.className='particle';
                p.style.left=Math.random()*100+'%';
                p.style.animationDelay=Math.random()*15+'s';
                p.style.background=colors[Math.floor(Math.random()*colors.length)];
                container.appendChild(p);
            }
        }

        function createConfettiExplosion(x,y){
            const count=30;
            const colors=['#d4af37','#e5c158','#f4d03f','#ffffff','#a8c0e0'];

            for(let i=0;i<count;i++){
                const c=document.createElement('div');
                c.className='firework';
                c.style.background=colors[Math.floor(Math.random()*colors.length)];
                c.style.left=x+'px';
                c.style.top=y+'px';

                const angle=Math.random()*360;
                const distance=Math.random()*200+50;

                c.animate([
                    {transform:`translate(0,0)`,opacity:1},
                    {transform:`translate(${Math.cos(angle)*distance}px,${Math.sin(angle)*distance}px)`,opacity:0}
                ],{duration:1000,easing:'ease-out'});

                document.body.appendChild(c);
                setTimeout(()=>c.remove(),1000);
            }
        }

        document.getElementById("invitation").addEventListener('click', e=>{
            createConfettiExplosion(e.clientX,e.clientY);
        });

        function createFloatingParticles() {
            const container = document.getElementById('particlesContainer');
            const particleCount = 30;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = (10 + Math.random() * 10) + 's';
                
                const colors = ['#d4af37', '#e5c158', '#f4d03f', '#ffffff'];
                particle.style.background = colors[Math.floor(Math.random() * colors.length)];
                
                container.appendChild(particle);
            }
        }

        // Add sparkle effect on hover
        document.addEventListener('DOMContentLoaded', () => {
            createFloatingParticles();

            const categories = document.querySelectorAll('.game-category');
            
            categories.forEach(category => {
                category.addEventListener('mouseenter', (e) => {
                    for (let i = 0; i < 8; i++) {
                        setTimeout(() => {
                            const rect = category.getBoundingClientRect();
                            const x = rect.left + rect.width / 2;
                            const y = rect.top + rect.height / 2;
                            createSparkle(x, y);
                        }, i * 50);
                    }
                });
            });
        });

        function createSparkle(x, y) {
            const sparkle = document.createElement('div');
            sparkle.style.position = 'fixed';
            sparkle.style.left = x + 'px';
            sparkle.style.top = y + 'px';
            sparkle.style.width = '4px';
            sparkle.style.height = '4px';
            sparkle.style.background = '#fff';
            sparkle.style.borderRadius = '50%';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '9999';
            sparkle.style.boxShadow = '0 0 10px #d4af37';
            
            document.body.appendChild(sparkle);
            
            const angle = Math.random() * Math.PI * 2;
            const distance = 30 + Math.random() * 40;
            const endX = x + Math.cos(angle) * distance;
            const endY = y + Math.sin(angle) * distance;
            
            sparkle.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { transform: `translate(${endX - x}px, ${endY - y}px) scale(0)`, opacity: 0 }
            ], {
                duration: 1000,
                easing: 'ease-out'
            }).onfinish = () => {
                document.body.removeChild(sparkle);
            };
        }