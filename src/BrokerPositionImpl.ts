import { Broker, BrokerPosition } from './types';
import * as _ from 'lodash';
import t from './intl';
import { padStart, padEnd } from './util';

export default class BrokerPositionImpl implements BrokerPosition {
  broker: Broker;
  longAllowed: boolean;
  shortAllowed: boolean;
  btc: number;
  allowedLongSize: number;
  allowedShortSize: number;

  toString(): string {
    const isOk = b => (b ? 'OK' : 'NG');
    return (
      `${padEnd(this.broker, 10)}: ${padStart(_.round(this.btc, 3), 6)} BTC, ` +
      `${t`LongAllowed`}: ${isOk(this.longAllowed)}, ` +
      `${t`ShortAllowed`}: ${isOk(this.shortAllowed)}`
    );
  }
}
