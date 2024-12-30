import { JsonConverter, JsonCustomConvert, JsonObject, JsonProperty } from "json2typescript"

export enum AuthorityName {
    SUPER_ADMIN = "SUPER_ADMIN",
    ADMIN = "ADMIN",
    MOD = "MOD",
}

@JsonConverter
class RoleConverter implements JsonCustomConvert<AuthorityName> {
    deserialize(data: string): AuthorityName { return (<any>AuthorityName)[data] }
    serialize(data: AuthorityName): any { return data.toString() }
}

@JsonObject("Authority")
export default class Authority {

    @JsonProperty("id", RoleConverter, true)
    role?: AuthorityName = undefined

    @JsonProperty("enabled", Boolean, true)
    enabled?: boolean = true


}