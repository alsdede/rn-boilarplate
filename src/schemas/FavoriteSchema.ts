export default class UserSchema {
  static schema = {
    name: 'Favorite',
    primaryKey: 'id',
    properties: {
      id: { type: 'string', indexed: true },
      title: 'string',
      thumb: 'string',
    },
  };
}
