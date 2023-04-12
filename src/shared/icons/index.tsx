import React from 'react';
import SVG from 'react-inlinesvg';
import { list } from './list';

type IconsProps = {
  src: keyof typeof list;
};

export function Icons({ src }: IconsProps) {
  return <SVG src={list[src]} />;
}
