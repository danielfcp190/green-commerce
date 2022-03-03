import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import Auth from '@global-layouts/Auth';
import Default from '@global-layouts/Default';

type AuthType = typeof Auth;
type DefaultType = typeof Default;
type LayoutType = DefaultType | AuthType;

declare module 'next' {
  export interface LayoutPage extends NextPage {
    Layout: LayoutType;
  }
}

declare module 'next/app' {
  export interface LayoutAppProps extends AppProps {
    Component: NextPage & {
      Layout: LayoutType;
    };
  }
}
