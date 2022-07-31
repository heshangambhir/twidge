/* eslint-disable import/no-unresolved */
import useTauriHandler from '@twidge/utils/hooks/useTauriHandler';
import React, { useEffect } from 'react';
import Spaces, { Space } from '@twidge/utils/types/spaces';
import { styled } from '@twidge/config/stitches.config';
import * as FluentIcons from '@fluentui/react-icons';
import Container from '@twidge/primitives/containers';
import Logo from '../logo';

const Body = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  marginTop: '12px',
  backgroundColor: '$backgroundColor',
  gap: '12px',

  '.space': {
    backgroundColor: '#1F2024',
    width: '35px',
    height: '35px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12px',
  },
});

function SpaceComponent({ space, name }: {
  space: Space,
  name: string
}) {
  const Icon = FluentIcons[name] as any;

  return (
    <div className="space">
      <Icon color={space.color} />
    </div>
  );
}

function Sidebar() {
  const { send, sent, result } = useTauriHandler<Spaces>({ name: 'get_spaces' });

  useEffect(() => {
    send();
  }, []);

  return (
    <Container
      css={{
        width: '60px', minHeight: '100vh', backgroundColor: '$backgroundColor', borderRight: '1px solid $borderColor', paddingTop: '12px',
      }}
      flex="col"
      align="center"
      justify="start"
    >
      <Logo />
      <Body>
        {result && (
          <>
            {result.map((space) => (
              <div>
                <SpaceComponent space={space} name={`${space.icon}`} />
              </div>
            ))}
          </>
        )}
      </Body>

    </Container>
  );
}

export default Sidebar;
