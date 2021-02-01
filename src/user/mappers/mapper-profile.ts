import { CamelCaseNamingConvention, mapFrom } from "@automapper/core";
import type { MappingProfile } from "@automapper/types";
import { UserDTO } from "../dtos/user.dto";
import { User } from "../entities/user";

export const UserProfile: MappingProfile = (mapper) => {
  mapper.createMap(User, UserDTO, {
    namingConventions: {
      source: new CamelCaseNamingConvention(),
      destination: new CamelCaseNamingConvention(),
    }
  })
  .forMember(
    (user) => user.a2,
    mapFrom((source) => source.a1));
}