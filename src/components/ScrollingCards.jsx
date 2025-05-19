import React, { useRef, useState, useEffect } from "react";
import "./ScrollingCards.css";
import client5 from "../assets/client5.jpeg";
import client6 from "../assets/client6.jpeg";
import client7 from "../assets/client7.jpeg";
import client8 from "../assets/client8.jpeg";
// Card data instead of just image URLs
const cards = [
  {
      image123: client5,
      content: "Strategic Leader",
      backgroundColor: "rgb(0, 104, 139)",
  },
  {
      image123: client6,
      content: "Learning & Development",
      backgroundColor: "rgb(205, 55, 0)",
  },
  {
      image123: client7,
      content: "Motivational Speaker",
      backgroundColor: "rgb(3, 168, 158)",
  },
  {
      image123: client8,
      content: "Instructional Design",
      backgroundColor: "rgb(255, 97, 3)",
  },
];

export default function ZoomCards() {
    const sectionRef = useRef(null);
    const [scrollPos, setScrollPos] = useState(0);
    const [vh, setVh] = useState(window.innerHeight);

    const totalHeight = cards.length * vh;
    const sectionHeightVh = cards.length + 1;

    useEffect(() => {
        const update = () => {
            setVh(window.innerHeight);
            if (!sectionRef.current) return;
            const sectionTop =
                sectionRef.current.getBoundingClientRect().top + window.scrollY;
            const raw = window.scrollY - sectionTop;
            setScrollPos(Math.min(Math.max(raw, 0), totalHeight));
        };

        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        update();
        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, [totalHeight]);

    return (
        <section
            ref={sectionRef}
            className="cards-section"
            style={{ height: `${sectionHeightVh * 100}vh` }}
        >
            <div className="cards-sticky">
                {cards.map((card, i) => {
                    const prog = Math.min(Math.max(scrollPos / vh - i, 0), 1);
                    const scale = prog;
                    return (
                        <div
                            key={i}
                            className="card"
                            style={{
                                backgroundColor: card.backgroundColor,
                                transform: `scale(${scale})`,
                                transformOrigin: "center center",
                                zIndex: i,
                            }}
                        >
                            <div className="card-content">
                                <div className="card-img">
                                    <img src={card.image123} alt="" />
                                </div>
                                <div className="card-cont">
                                    <p>{card.content}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}