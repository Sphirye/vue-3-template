import DateTimeConverter from "@/services/converters/DateTimeConverter";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateTime } from "luxon";

@JsonObject("Auditing")
export default class Auditing {

    @JsonProperty("createdDate", DateTimeConverter, true)
    private _createdDate?: DateTime = undefined

    // @JsonProperty("createdBy", User, true)
    // private _createdBy?: User = undefined

    // get createdBy(): User | undefined {
    //     return this._createdBy;
    // }
    // set createdBy(value: User | undefined) {
    //     this._createdBy = value;
    // }
    get createdDate(): DateTime | undefined {
        return this._createdDate;
    }
    set createdDate(value: DateTime | undefined ) {
        this._createdDate = value;
    }

}