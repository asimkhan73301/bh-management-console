// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PlasmicCard } from "./plasmic/bh_management_console/PlasmicCard";

function Card_(props, ref) {
  // Use PlasmicCard to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicCard are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all CardProps here, but feel free
  // to do whatever works for you.
  return <PlasmicCard root={{ ref }} {...props} />;
}

const Card = React.forwardRef(Card_);

export default Card;
