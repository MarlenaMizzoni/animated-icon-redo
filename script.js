// ✅ gsap loaded? 
console.log( gsap );

gsap.from("#cherry", {
    duration: 3,      
    scale: .75,       
    ease: "bounce.out", 
    yoyo: true,
    repeat: -1,
  });

gsap.to(".leaf", {
    rotation: 15,          
    yoyo: true,            
    repeat: -1,            
    duration: 1,         
    ease: "sine.inOut",    
  });

gsap.to("#donut", {
    rotation: 360,        
    repeat: -1,           
    duration: 5,          
    ease: "none",         
  });


 gsap.to("#lollipop", {
    y: -20,              
    repeat: -1,          
    yoyo: true,          
    duration: 5,         
    ease: "bounce.out",  
    rotation: 360,       
    repeatDelay: 0.5,    
  });

  

 