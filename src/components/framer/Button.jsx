import { addPropertyControls, ControlType } from "framer";
import { motion } from "framer-motion";

// Learn more: https://www.framer.com/docs/guides/code-components/

export default function Button(props) {
  const { text, onTap } = props;

  // "...style" enables switching between auto & fixed sizing
  // Learn more: https://www.framer.com/docs/guides/auto-sizing
  return (
    <motion.button
      style={squareStyle}
      onTap={onTap}
      whileHover={{
        scale: 1.05,
        backgroundColor: "#07F",
      }}
    >
      <div className="flex flex-row justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span>{text}</span>
      </div>
    </motion.button>
  );
}

Button.defaultProps = {
  text: "Tap",
};

// Learn More: https://www.framer.com/docs/property-controls/
addPropertyControls(Button, {
  text: {
    title: "Text",
    type: ControlType.String,
  },
  onTap: {
    type: ControlType.EventHandler,
  },
});

const squareStyle = {
  width: 200,
  padding: 20,
  color: "white",
  fontWeight: 600,
  borderRadius: 25,
  backgroundColor: "#09F",
  whiteSpace: "pre-wrap",
  flexShrink: 0,
};
