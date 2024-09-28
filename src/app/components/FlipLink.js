import { motion } from 'framer-motion';
const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href, onMouseEnter, onMouseLeave }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-[6vw] xl:text-[8vw] font-black uppercase"
      style={{
        lineHeight: 1,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-200%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className={`inline-block ${l === '黄' ? 'text-[5vw] xl:text-[6vw]' : ''}`} // Change font size for 'z'
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className={`inline-block ${l === '黄' ? 'text-[5vw] xl:text-[6vw]' : ''}`} // Change font size for 'z'
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default FlipLink;