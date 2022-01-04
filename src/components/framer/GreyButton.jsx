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
        backgroundColor: "#A0B0BA",
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
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
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
  color: "#07F",
  fontWeight: 600,
  borderRadius: 25,
  backgroundColor: "#AFC2CF",
  whiteSpace: "pre-wrap",
  flexShrink: 0,
};
