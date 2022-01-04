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
      {text}
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
