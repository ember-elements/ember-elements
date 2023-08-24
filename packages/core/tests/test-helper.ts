import { setApplication } from '@ember/test-helpers';
import * as QUnit from 'qunit';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';
import 'qunit-dom';

import Application from 'dummy/app';
import config from 'dummy/config/environment';

setup(QUnit.assert);

setApplication(Application.create(config.APP));


start();
