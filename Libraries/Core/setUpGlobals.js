/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 */

'use strict';

const packageJson = require('../../package.json');

/**
 * Sets up global variables for React Native.
 * You can use this module directly, or just require InitializeCore.
 */
if (global.window === undefined) {
  // $FlowFixMe[cannot-write]
  global.window = global;
}

if (global.self === undefined) {
  // $FlowFixMe[cannot-write]
  global.self = global;
}

// Set up process
global.process = global.process || {};
global.process.env = global.process.env || {};
global.process.version = packageJson.version || global.process.version || undefined;
if (!global.process.env.NODE_ENV) {
  global.process.env.NODE_ENV = __DEV__ ? 'development' : 'production';
}
