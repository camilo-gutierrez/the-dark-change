export const If = ({ Condition = false, children = null }) => {
  if (Condition && children) {
    return children;
  } else {
    return null;
  }
};
