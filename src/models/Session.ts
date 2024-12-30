import { JsonObject, JsonProperty } from "json2typescript";
import User from "./User";

@JsonObject("Session")
export default class Session {

    static readonly KEY = "Session"
    
    @JsonProperty("token", String, true)
    token?: string = undefined

    @JsonProperty("user", User)
    user?: User = undefined

}