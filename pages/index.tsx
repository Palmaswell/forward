import * as React from 'react';
import Cookie from 'js-cookie';
import Router from 'next/router';
import { ThemeProvider } from 'emotion-theming';
import { ColorExtendedProps } from '../color';
import * as Color from '../color';
import * as Component from '../components';
import * as Container from '../container';
import * as Type from '../types';


const handleClick = (ctx): void => {
  ctx.addElements(Color.palette);
  Cookie.set('colors', Color.palette);
  Router.push({
    pathname: '/list'
  });
};

export default function Index(): JSX.Element {
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
                  type={Type.Layout.custom}
                  width={42}
                  bgColor={builtInCtx.get("Blue Nights").toRGB()}
                >
                  <Component.Space
                    size={[
                      Component.Size.XL,
                      Component.Size.L,
                      Component.Size.L,
                      Component.Size.XL
                    ]}
                  >
                    <Component.Headline
                      color={builtInCtx.get("Lynx White").toRGB()}
                      order={Type.HeadlineOrder.h1}
                      tag={Type.HeadlineOrder.h1}
                      type={Type.Headline.secondary}
                    >
                      Design UI's for everyone
                    </Component.Headline>
                    <Component.Copy
                      color={builtInCtx.get("Lynx White").toRGB()}
                      tag={Type.CopyTag.p}
                    >
                      The design needs to meet color contrast requirements for
                      people with vision or color perception deficiencies.
                    </Component.Copy>
                    <Container.ColorManagerConsumer>
                      {ctx => {
                        return (
                          <>
                          <Container.Upload ctx={ctx} />
                          <Component.LinkBtn onClick={() => handleClick(ctx)}>
                            Use default palette >
                          </Component.LinkBtn>
                          </>
                        );
                      }}
                  </Container.ColorManagerConsumer>
                  </Component.Space>
                </Component.LayoutItem>
                <Component.LayoutItem
                  type={Type.Layout.custom}
                  width={58}
                  bgColor={builtInCtx.get("Blue Nights").toRGB()}
                >
                  <Component.Space
                    size={[
                      Component.Size.XL,
                      Component.Size.XL,
                      Component.Size.L,
                      Component.Size.L
                    ]}
                  >
                    <Component.Card
                      type={Type.ColorTile.primary}
                      name={builtInCtx.get("Fluorescent Red").name}
                      rgb={builtInCtx.get("Fluorescent Red").toRGB()}
                      hex={`${builtInCtx.get("Fluorescent Red").toHEX()}`}
                    >
                      <Component.Tile
                        type={Type.ColorTile.primary}
                        bgColor={builtInCtx.get("Fluorescent Red").toRGB()}
                        luminance={builtInCtx
                          .get("Fluorescent Red")
                          .getLuminance()}
                        copy="Aa"
                      />
                    </Component.Card>
                  </Component.Space>
                </Component.LayoutItem>
              </Component.Layout>
              <Component.TransitionLayer
                theme={builtInCtx}
                transition={false}
              />
            </ThemeProvider>
          );
        }}
      </Container.BuiltInConsumer>
    </>
  );
}
