import React, { useEffect, useRef } from 'react';

const Stack = () => {
  const cardsContainerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;

    // Initialize IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { target } = entry;
          const cardIndex = parseInt(target.getAttribute('data-index'));
          const scale = 1 - (cards.length - 1 - cardIndex) * 0.1;

          if (entry.isIntersecting) {
            const brightness = entry.intersectionRatio > 0.5 ? 1 : 0.6;
            target.style.transform = `scale(${scale})`;
            target.style.filter = `brightness(${brightness})`;
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: Array.from({ length: 101 }, (_, i) => i / 100), // Threshold array for smooth animation
      }
    );

    // Observe each card
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <> 
    <div className="space space--small"></div>
    <div className="cards" ref={cardsContainerRef}>
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className="card"
          data-index={index}
          ref={(el) => (cardRefs.current[index] = el)}
          style={{ paddingTop: `${20 + index * 20}px` }}
        >
          <div className="card__inner">
            <div className="card__image-container">
              <img
                className="card__image"
                src="https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100"
                alt=""
              />
            </div>
            <div className="card__content">
              <h1 className="card__title">Card Title</h1>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta
                error nam eaque. Eum fuga laborum quos expedita iste saepe
                similique, unde possimus quia at magnam sed cupiditate?
                Reprehenderit, harum!
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="space"></div>
    </>
  );
};

export default Stack;
