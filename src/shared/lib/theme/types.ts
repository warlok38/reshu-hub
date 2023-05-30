import {
  ComponentNameToClassKey,
  ComponentsOverrides,
  Theme,
} from '@mui/material';
import { Components } from '@mui/material/styles/components';
import { ComponentsVariants } from '@mui/material/styles/variants';

export type StyleOverrideComponentName =
  | keyof ComponentNameToClassKey
  | 'MuiCssBaseline';

export type StyleOverride<TComponentName extends StyleOverrideComponentName> =
  ComponentsOverrides<Theme>[TComponentName];

export type StyleOverridesDictionary = Partial<{
  [TComponentName in StyleOverrideComponentName]: StyleOverride<TComponentName>;
}>;

export type ComponentPropsOverrideData<
  Name extends keyof Components = keyof Components
> = {
  name: Name;
  variants: ComponentsVariants[Name];
};
