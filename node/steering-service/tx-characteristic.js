
const bleno = require('bleno');
const debug = require('debug');
const trace = debug('fortiusant:tx');

const CharacteristicUserDescription = '2901';
const TxFeature = '347b0032-7635-408b-8918-8ff3949ce592';

class TxCharacteristic extends bleno.Characteristic {
  constructor() {
    trace('[TxCharacteristic] constructor');
    super({
      uuid: TxFeature,
      properties: ['indicate'],
    });

    this.indicate = null;
  }

  onSubscribe(maxValueSize, updateValueCallback) {
    trace('[TxCharacteristic] onSubscribe');
    this.indicate = updateValueCallback;

    return this.RESULT_SUCCESS;
  };

  onUnsubscribe() {
    trace('[TxCharacteristic] onUnsubscribe');
    this.indicate = null;
    return this.RESULT_UNLIKELY_ERROR;
  };
}

module.exports = TxCharacteristic;