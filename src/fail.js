import React from 'react';
import { Panel } from '@sencha/ext-modern';
import { renderWhenReady } from '@sencha/ext-react';

const Fail = () => <Panel />;

export default renderWhenReady(Fail);
