import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
import { CssVarsThemeOptions } from '@mui/material/styles/experimental_extendTheme';
import {
  ComponentPropsOverrideData,
  StyleOverride,
  StyleOverrideComponentName,
  StyleOverridesDictionary,
} from '../types';
import { set } from 'lodash';
import { defaultProps } from '../common/defaultProps';

type CreateThemeOptions = {
  themeOptions: CssVarsThemeOptions;
  styleOverrides: StyleOverridesDictionary;
  componentVariants: ComponentPropsOverrideData[];
};

export function createTheme({
  themeOptions,
  styleOverrides,
  componentVariants,
}: CreateThemeOptions): ReturnType<typeof extendTheme> {
  const theme = extendTheme(themeOptions);

  Object.entries<StyleOverride<StyleOverrideComponentName>>(
    styleOverrides
  ).forEach(([componentName, componentOverride]) => {
    set(theme, `components.${componentName}.styleOverrides`, componentOverride);
  });

  componentVariants.forEach(({ name, variants }) => {
    if (
      theme.components?.[name] == null &&
      process.env['NODE_ENV'] === 'development'
    ) {
      throw new Error(`${name} is not existed into "themeOptions.component`);
    }
    set(theme, `components.${name}.variants`, variants);
  });

  const customComponentsKeys = new Set([...Object.keys(defaultProps)]);

  customComponentsKeys.forEach((componentKey) => {
    set(theme, `component.${componentKey}.defaultProps`, {
      //@ts-expect-error
      ...defaultProps[componentKey],
    });
  });

  return theme;
}
