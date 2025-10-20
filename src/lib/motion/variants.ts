import {
  KeyframeOptions,
  ValueKeyframesDefinition,
  ValueTransition,
  Variants,
} from "framer-motion";
import { DELAY, DISTANCE, DURATION, EASING } from "./constants";

export type FadeInFactoryProps = Partial<{
  distance: ValueKeyframesDefinition;
  duration: ValueTransition["duration"];
  ease: KeyframeOptions["ease"];
  delay: ValueTransition["delay"];
}>;

export const fadeInUp = ({
  distance = DISTANCE.md,
  duration = DURATION.normal,
  ease = EASING.easeOut,
  delay = DELAY.none,
}: FadeInFactoryProps = {}): Variants => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, ease, delay },
  },
});
