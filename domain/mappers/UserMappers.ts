import {User} from "../entities/user"
import {UserDto} from "../dtos/UserDto"
import {Master} from "../entities/master"

declare global {
  interface Array<T> {
    toUserDtos(this: User[]): UserDto[];
  }
}

Array.prototype.toUserDtos = function(this: User[]): UserDto[] {
  return this.map(user => ({
    id: user.id,
    name: user.shortName,
    master: user instanceof Master,
    teamId: user.teamId
  }));
};
