import { JsonObject, JsonProperty } from "json2typescript"
import Authority from "./Authority"
import Auditing from "./Auditing"

@JsonObject("User")
export default class User extends Auditing {
    @JsonProperty("id", Number)
    id?: number = undefined

    @JsonProperty("username", String, true)
    username?: string = undefined

    @JsonProperty("email", String)
    email?: string = undefined

    @JsonProperty("authorities", [Authority], true)
    authorities?: Authority[] = undefined

    @JsonProperty("password", String, true)
    password?: string = undefined

}