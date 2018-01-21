import React from 'react';
import { Text, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { H1, H2, H3, H4, Label, Body, MoneyLarge, Money, MoneySmall } from '../../lib/components/Typography';
import fontMaker from '../../lib/components/utilities/FontMaker';

storiesOf('Typography', module)
  .add('Headers', () =>
    <View style={{ marginLeft: 16}} >
      <H1>Header 1</H1>
      <H2>Header 2</H2>
      <H3>Header 3</H3>
      <H4>Header 4</H4>
    </View>
  ).add('Copies', () =>
    <View style={{ marginLeft: 16 }}>
      <Label>Label</Label>
      <Body>Body. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Duis eu laoreet risus. Phasellus nunc urna, malesuada sed orci sed, euismod varius lectus.
        Vivamus vel mollis sapien. Aliquam dapibus sodales tellus, vel pulvinar erat porttitor in.
        Duis sodales auctor luctus. Sed hendrerit erat leo, in consectetur lorem interdum vitae.
        Duis mattis tortor ac sem vehicula, eu blandit massa porttitor.
        Aenean ligula quam, condimentum vitae finibus ut, fermentum in dui.
        Ut dictum metus eros, et malesuada sem ultrices vitae.
        Phasellus urna enim, lobortis vel quam eu, dapibus vestibulum sapien.
        Sed nec orci tristique, tempor libero sit amet, viverra erat.
        Suspendisse dictum, dolor id facilisis porttitor, risus lorem tincidunt est, a mollis nunc lacus vel diam.
        Integer pellentesque tortor sed malesuada cursus. Aliquam pulvinar nec est sit amet feugiat.
        Etiam libero quam, tempus non sapien vitae, volutpat euismod urna. Cras dapibus efficitur iaculis.{"\n"}
        Nam id diam nisl.
        Morbi egestas tempor turpis vel finibus.
        Aliquam vitae elit nisl. Sed volutpat vitae sapien quis convallis.
        Pellentesque vel lectus sed nisl varius posuere eu at risus.
        Nulla euismod sodales mauris, nec facilisis sem tempor non.
      </Body>
    </View>
  ).add('Money', () =>
    <View style={{ marginLeft: 16 }}>
      <MoneySmall>0,63k</MoneySmall>
      <Money>0,63k</Money>
      <MoneyLarge>0,63k</MoneyLarge>
    </View>
  );

storiesOf('Fonts', module)
  .add('Nunito', () =>
  <View style={{ marginLeft: 16 }}>
    <Text style={{ fontSize: 24,
                  ...fontMaker({fontFamily: 'Nunito', fontWeight: '200'})}}>Nunito ExtraLight</Text>
    <Text style={{ fontSize: 24,
                  ...fontMaker({fontFamily: 'Nunito', fontWeight: '300'})}}>Nunito Light</Text>
    <Text style={{ fontSize: 24,
                  ...fontMaker({fontFamily: 'Nunito'})}}>Nunito Regular</Text>
    <Text style={{ fontSize: 24,
                  ...fontMaker({fontFamily: 'Nunito', fontWeight: '600'})}}>Nunito SemiBold</Text>
    <Text style={{ fontSize: 24,
                  ...fontMaker({fontFamily: 'Nunito', fontWeight: 'bold'})}}>Nunito Bold</Text>
    <Text style={{ fontSize: 24,
                  ...fontMaker({fontFamily: 'Nunito', fontWeight: '800'})}}>Nunito ExtraBold</Text>
    <Text style={{ fontSize: 24,
                  ...fontMaker({fontFamily: 'Nunito', fontWeight: '900'})}}>Nunito Black</Text>
  </View>
  ).add('Nunito Italic', () =>
  <View style={{ marginLeft: 16 }}>
    <Text style={{ fontSize: 24,
                  ...fontMaker({fontFamily: 'Nunito',
                    fontWeight: '200', fontStyle: 'italic'})}}>Nunito ExtraLight</Text>
    <Text style={{ fontSize: 24,
                  ...fontMaker({fontFamily: 'Nunito',
                    fontWeight: '300', fontStyle: 'italic'})}}>Nunito Light</Text>
    <Text style={{ fontSize: 24,
                  ...fontMaker({fontFamily: 'Nunito', fontStyle: 'italic'})}}>Nunito Regular</Text>
    <Text style={{ fontSize: 24,
                  ...fontMaker({fontFamily: 'Nunito',
                    fontWeight: '600', fontStyle: 'italic'})}}>Nunito SemiBold</Text>
    <Text style={{ fontSize: 24,
                  ...fontMaker({fontFamily: 'Nunito',
                    fontWeight: 'bold', fontStyle: 'italic'})}}>Nunito Bold</Text>
    <Text style={{ fontSize: 24,
                  ...fontMaker({fontFamily: 'Nunito',
                    fontWeight: '800', fontStyle: 'italic'})}}>Nunito ExtraBold</Text>
    <Text style={{ fontSize: 24,
                  ...fontMaker({fontFamily: 'Nunito',
                    fontWeight: '900', fontStyle: 'italic'})}}>Nunito Black</Text>
  </View>
  );
