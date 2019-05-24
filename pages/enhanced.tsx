import Head from "next/head";
import { Global } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import * as React from "react";
import * as Component from "../components";
import * as Container from "../container";
import * as Type from "../types";
import { ColorExtendedProps } from "../color";

export default class extends React.Component {
  public state = {
    isTransitioning: false
  };

  public componentDidMount(): void {
    this.setState({ ...this.state, isTransitioning: true });
  }

  public componentWillUnmount(): void {
    this.setState({ ...this.state, isTransitioning: false });
  }

  public render(): JSX.Element {
    return (
      <>
        <Global styles={Component.getGlobalStyles()} />
        <Head>
          <title>Forward - color contrast accessibility checker</title>
          <meta
            name="description"
            content="Forward - color contrast accessibility checker"
          />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no"
          />
          <link
            rel="preload"
            as="font"
            href="https://fonts.googleapis.com/css?family=Halant|Nunito+Sans"
          />
        </Head>
        <Container.BuiltInConsumer>
          {(builtInCtx: Type.HashTbl<ColorExtendedProps>) => {
            return (
              <ThemeProvider theme={builtInCtx}>
                <Container.ColorManagerConsumer>
                  {colorManagerContext => {
                    console.log(colorManagerContext.getElements().map(c => c.getAA()))
                    return (
                      <>
                        <Component.Layout>
                          <Component.LayoutItem
                            type={Type.Layout.custom}
                            width={42}
                            bgColor={builtInCtx.get("Blue Nights").toRGB()}
                          >
                            <Component.Space size={Component.Size.L}>
                              <Component.Space
                                size={[0, 0, Component.Size.M, 0]}
                              >
                                <Component.Link href="/list">
                                  back
                                </Component.Link>
                              </Component.Space>
                              <Component.Card
                                type={Type.ColorTile.primary}
                                name={colorManagerContext
                                  .getActiveColor()
                                  .getName()}
                                rgb={colorManagerContext
                                  .getActiveColor()
                                  .getRGBString()}
                                hex={`${colorManagerContext
                                  .getActiveColor()
                                  .getHEXString()}`}
                              >
                                <Component.Tile
                                  type={Type.ColorTile.primary}
                                  bgColor={colorManagerContext
                                    .getActiveColor()
                                    .getRGBString()}
                                  luminance={colorManagerContext
                                    .getActiveColor()
                                    .getLuminance()}
                                  copy="Aa"
                                />
                              </Component.Card>
                            </Component.Space>
                          </Component.LayoutItem>
                          <Component.LayoutItem
                            type={Type.Layout.custom}
                            width={58}
                            bgColor={builtInCtx.get("Lynx White").toRGB()}
                          >
                            <Component.Space
                              size={[
                                Component.Size.L,
                                Component.Size.L,
                                0,
                                Component.Size.L
                              ]}
                            >
                              <Component.TopBar>
                                <Component.Space
                                  size={[0, 0, 0, Component.Size.XS]}
                                >
                                  <Component.Headline
                                    order={Type.HeadlineOrder.h3}
                                    tag={Type.HeadlineOrder.h1}
                                  >
                                    Match Overview
                                  </Component.Headline>
                                </Component.Space>
                              </Component.TopBar>
                            </Component.Space>
                            <Component.Space
                              size={[
                                Component.Size.S,
                                Component.Size.L,
                                Component.Size.S
                              ]}
                            >
                              <Component.Layer>
                                <Component.Space
                                  size={[0, 0, 0, Component.Size.XS]}
                                >
                                  <Component.Title
                                    prefix="AAA"
                                    copy="Perfect match 🎉"
                                  />
                                </Component.Space>
                                {colorManagerContext.getActiveColor().getAAA()
                                  .length > 0 ? (
                                  <Container.ColorList
                                    colors={colorManagerContext.getActiveColor().getAAA()}
                                    type={Type.ColorList.secondary}
                                  />
                                ) : (
                                  <Component.Headline
                                    order={Type.HeadlineOrder.h3}
                                    tag={Type.HeadlineOrder.h2}
                                  >
                                    Unfortunately there are no AAA matches
                                  </Component.Headline>
                                )}
                              </Component.Layer>
                            </Component.Space>
                            <Component.Space
                              size={[
                                Component.Size.S,
                                Component.Size.L,
                                Component.Size.L
                              ]}
                            >
                              <Component.Layer>
                                <Component.Space
                                  size={[0, 0, 0, Component.Size.XS]}
                                >
                                  <Component.Title
                                    prefix="AA"
                                    copy="Works well"
                                  />
                                </Component.Space>
                                {colorManagerContext.getActiveColor().getAA()
                                  .length > 0 ? (
                                  <Container.ColorList
                                    colors={colorManagerContext.getActiveColor().getAA()}
                                    type={Type.ColorList.secondary}
                                  />
                                ) : (
                                  <Component.Headline
                                    order={Type.HeadlineOrder.h3}
                                    tag={Type.HeadlineOrder.h2}
                                  >
                                    Unfortunately there are no AA matches
                                  </Component.Headline>
                                )}
                              </Component.Layer>
                            </Component.Space>
                          </Component.LayoutItem>
                        </Component.Layout>
                        <Component.TransitionLayer
                          theme={builtInCtx}
                          transition={this.state.isTransitioning}
                        />
                      </>
                    );
                  }}
                </Container.ColorManagerConsumer>
              </ThemeProvider>
            );
          }}
        </Container.BuiltInConsumer>
      </>
    );
  }
}
