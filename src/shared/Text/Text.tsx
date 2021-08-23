import * as React from 'react';
import styles from './text.scss';
import classNames from 'classnames';

export enum EColor {
  black  = 'black',
  white = 'white',
  orange = 'orange',
  green = 'green',
  greyF3 = 'greyF3',
  greyF4 = 'greyF4',
  greyD9 = 'greyD9',
  greyC4 = 'greyC4',
  grey99 = 'grey99',
  grey66 = 'grey66'
}

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

interface ITextProps {
  As?: 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4';
  children?: React.ReactNode;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColor;
  bold?: boolean;
}

export function Text(props: ITextProps) {
  const { 
    As = 'span', 
    color = EColor.black, 
    bold = false,
    children, 
    size, 
    mobileSize, 
    tabletSize, 
    desktopSize 
  } = props;

  const classes = classNames(
    styles[`s${size}`],
    { [styles[`m${mobileSize}`]]: mobileSize},
    { [styles[`t${tabletSize}`]]: tabletSize},
    { [styles[`d${desktopSize}`]]: desktopSize},
    styles[color],
    { [styles.bold]: bold }
  );

  return (
    <As className={classes}>
      {children}
    </As>
  );
}
