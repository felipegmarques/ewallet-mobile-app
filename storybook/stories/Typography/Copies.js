import React from 'react';
import { View } from 'react-native';

import { Label, Body } from '../../../lib/components/Typography';

export default () =>
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

