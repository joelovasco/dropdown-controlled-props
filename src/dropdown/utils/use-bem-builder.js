import cn from "classnames";

export const useBemBuilder = blocks => {
  const cleanedBlocks = blocks.filter(block => block);

  const getBlocksWith = elementOrModifier =>
    cleanedBlocks.reduce(
      (classList, block) => cn(classList, `${block}${elementOrModifier}`),
      ""
    );

  return getBlocksWith;
};
