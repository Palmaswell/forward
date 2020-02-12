import Cookie from 'js-cookie';
import nookies from 'nookies';
import Router from 'next/router';
import uuid from 'uuid/v4';
import { ThemeProvider } from 'emotion-theming';
import * as React from 'react';
import * as Component from '../components';
import * as Container from '../container';
import * as Type from '../types';
import { ColorExtendedProps, ColorManagerContext } from 'a11y-colors/lib';

interface ListPageProps {
  colors: Type.Color[];
}

export default class List extends React.Component<ListPageProps> {
  public static async getInitialProps(ctx) {
    const cookies = await nookies.get(ctx);

    return {
      colors: JSON.parse(cookies.colors)
    }
  }
  public state = {
    isTransitioning: false
  };

  public componentDidMount(): void {
    this.setState({ ...this.state, isTransitioning: true });
  }

  public componentWillUnmount(): void {
    this.setState({ ...this.state, isTransitioning: false });
  }

  public handleClick = (colorContext, color): void => {
    colorContext.setActiveColor(color);
    Cookie.set('activeColor', colorContext.getActiveColor());
    Router.push({
      pathname: '/enhanced'
    });
  }

  private renderColorList = (ctx: ColorManagerContext): JSX.Element => {
    if (ctx.getElements().length === 0 && this.props.colors) {
      ctx.addElements(this.props.colors);
    }
    return(
      <Component.ItemList type={Type.ColorList.primary}>
      {ctx.getElements().map(color => (
        <Component.Item key={uuid()} isActive={false}>
          <Component.Card
            type={Type.ColorTile.secondary}
            name={color.getName()}
            rgb={color.getRGBString()}
            hex={color.getHEXString()}
            onClick={() => this.handleClick(ctx, color)}
          >
            <Component.Tile
              type={Type.ColorTile.secondary}
              bgColor={color.getRGBString()}
              luminance={color.getLuminance()}
              copy="Aa"
            />
          </Component.Card>
        </Component.Item>
      ))}
      </Component.ItemList>
    );
  }

  private renderTopBar = (): JSX.Element => {
    return(
      <Component.Space
      size={[
        Component.Size.M,
        Component.Size.L,
        0,
        Component.Size.L
      ]}
    >
      <Component.TopBar>
        <Component.Space size={[0, 0, 0, Component.Size.XS]}>
          <Component.Headline
            order={Type.HeadlineOrder.h2}
            tag={Type.HeadlineOrder.h1}
          >
            Color contrast accessibility checker
          </Component.Headline>
        </Component.Space>
      </Component.TopBar>
    </Component.Space>
    )
  }

  public render(): JSX.Element {
    return (
      <>
        <Component.Header
        title="Forward - color contrast accessibility checker"
        description="Forward - color contrast accessibility checker"
        />
        <Container.BuiltInConsumer>
          {(builtInCtx: Type.HashTbl<ColorExtendedProps>) => {
            return (
              <ThemeProvider theme={builtInCtx}>
                <Component.Layout>
                  <Component.LayoutItem
                    bgColor={builtInCtx.get("Lynx White").toRGB()}
                  >
                    {this.renderTopBar()}
                    <Component.Space size={[0, Component.Size.L]}>
                      <Container.ColorManagerConsumer>
                        {(ctx) => this.renderColorList(ctx)}
                      </Container.ColorManagerConsumer>
                    </Component.Space>
                  </Component.LayoutItem>
                </Component.Layout>
                <Component.TransitionLayer
                  theme={builtInCtx}
                  transition={this.state.isTransitioning}
                />
              </ThemeProvider>
            );
          }}
        </Container.BuiltInConsumer>
      </>
    );
  }
}
