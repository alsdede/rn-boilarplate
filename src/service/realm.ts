import Realm from 'realm';
import FavoriteSchema from '../schemas/FavoriteSchema';
import UserSchema from '../schemas/UserSchema';

export default function getRealmApp() {
  return Realm.open({
    schema: [UserSchema, FavoriteSchema],
  });
}
