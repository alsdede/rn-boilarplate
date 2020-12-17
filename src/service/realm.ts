import Realm from 'realm';
import UserSchema from '../schemas/UserSchema';

export default function getRealmApp() {
  return Realm.open({
    schema: [UserSchema],
  });
}
