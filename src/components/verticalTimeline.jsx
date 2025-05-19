import React, { useEffect, useState } from "react";
import "./timeline.css"; // Ensure CSS is properly linked

const timelineData = [
  { year: "May 2021 June 2024", text5: "PhD Emotional Intelligence ", text2:"Atlantic International University" },
  { year: "Pursuing", text5: "Post Graduate Program on Strategic HR & Leadership" , text2:"XLRI" },
  { year: "June 2011 May 2014", text5: "Masters in Psychology", text2:" Vinayak Mission University" },
  { year: "June 2010 May 2012", text5: "Masters in Business Management", text2:" Neptune Institute of Management" },
  // { year: "1946", text: "Suspendisse varius volutpat mattis. Vestibulum id magna est." },
  // { year: "1956", text: "Vestibulum id magna est. Suspendisse varius volutpat mattis." },
  // { year: "1957", text: "In mattis elit vitae odio posuere, nec maximus massa varius." },
  // { year: "1967", text: "Aenean condimentum odio a bibendum rhoncus." },
  // { year: "1977", text: "Vestibulum porttitor lorem sed pharetra dignissim." },
  // { year: "1985", text: "In mattis elit vitae odio posuere, nec maximus massa varius." },
  // { year: "2000", text: "Suspendisse varius volutpat mattis. Vestibulum id magna est." },
  // { year: "2005", text: "In mattis elit vitae odio posuere, nec maximus massa varius." }
];

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll(".timeline ul li");
      const newVisibleItems = [];

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          newVisibleItems.push(index);
        }
      });

      setVisibleItems(newVisibleItems);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="timeline" id='timeline123'>
      <h2 className="timeline-heading">Educational Timeline</h2> {/* Added Heading */}
      <ul>
        {timelineData.map((event, index) => (
          <li key={index} className={visibleItems.includes(index) ? "in-view" : ""}>
            <div>
              {/* <time>{event.year}</time>  */}
              <p>{event.text5}</p>
              <p className="text2">{event.text2}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Timeline;
