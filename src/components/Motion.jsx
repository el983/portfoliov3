import {
    motion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import { useRef } from "react";
import "./Motion.css"; // Import the CSS file
import one from '../assets/1.jpg'
import two from '../assets/2.jpg'
import three from '../assets/3.jpg'
function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

// Array of image URLs
const images = [
    { src: one, text: "A beautiful sunrise over the mountains." },
    { src: two, text: "A peaceful cityscape at night with glowing lights." },
    { src: three, text: "A serene beach with golden sand and blue waves." }
];

function Image({ src, id,text }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
        <section className="img-container">
            <div  ref={ref}>
                <img src={src} alt={`Image #00${id}`} />
            </div>
            <div className="content">
            <motion.h2
                initial={{ visibility: "hidden" }}
                animate={{ visibility: "visible" }}
                style={{ y }}
            >{`#00${id}`}
            </motion.h2>
            <motion.p
            initial={{ visibility: "hidden" }}
            animate={{ visibility: "visible" }}
            style={{ y }}
            >
                <p className="image-text">{text}</p>

            </motion.p>
            </div>
            
            

        </section>
    );
}

export default function Motion() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div id="parallax-example">
            {images.map((image, index) => (
                <Image key={index} src={image.src} id={index + 1} text={image.text} />
            ))}
            <motion.div className="progress" style={{ scaleX }} />
        </div>
    );
}
