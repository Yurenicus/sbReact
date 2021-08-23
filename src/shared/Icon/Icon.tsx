import * as React from 'react';
import { BlockIcon, CommentsIcon, MenuIcon, SaveIcon, ShareIcon, WarningIcon } from '../Icons';
import styles from './icon.scss';
import classNames from 'classnames';

export enum EIcons {
  block  = 'BlockIcon',
  comments = 'CommentsIcon',
  menu = 'MenuIcon',
  save = 'SaveIcon',
  share = 'ShareIcon',
  warning = 'WarningIcon',
}

type ISizes = 31 | 28 | 20 | 16 | 14 | 12 | 10;

interface IIconProps {
  size?: ISizes;
  name: EIcons;
}

export function Icon(props: IIconProps) {
  const { 
    name = EIcons, 
    size,
  } = props;

  let children: React.ReactNode = undefined;
  switch (name) {
    case 'BlockIcon':
      children = <BlockIcon />
      break;
    case 'CommentsIcon':
      children = <CommentsIcon />
      break;
    case 'MenuIcon':
      children = <MenuIcon />
      break;
    case 'SaveIcon':
      children = <SaveIcon />
      break;
    case 'ShareIcon':
      children = <ShareIcon />
      break;
    case 'WarningIcon':
      children = <WarningIcon />
      break;
  
    default:
      break;
  }

  const classes = classNames(
    styles[`s${size}`],
  );

  return (
    <span className={classes}>
      {children}
    </span>
  );
}
