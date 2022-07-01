import React from 'react';
import clsx from 'classnames';

type elements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';

type bodyVariants =
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4'
  | 'body5'
  | 'body6'
  | 'body7'
  | 'body8'
  | 'body9'
  | 'body10';

type typographyStates = 'default' | 'primary' | 'secondary' | 'tetiary' | 'error';

interface ITypogrphy {
  component?: elements;
  variant?: bodyVariants;
  style?: React.CSSProperties;
  className?: string;
  state?: typographyStates;
  children: React.ReactNode;
  props?: String[];
}

const elementVariants = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  span: 'span',
};

export const Typography: React.FC<ITypogrphy> = ({
  component,
  variant,
  style,
  className,
  state,
  children,
  ...props
}) => {
  const Component: any = component ? elementVariants[component] : 'p';
  const baseClass = `typography_default fa_typography`;
  const variantClass = variant ? `${baseClass}__${variant}` : '';
  const stateClass = `${baseClass}__${state}`;

  const typographyClassName = clsx(variantClass, stateClass, className);
  return (
    <Component className={typographyClassName} style={style} {...props}>
      {children}
    </Component>
  );
};

Typography.defaultProps = {
  component: 'p',
  state: 'default',
};
