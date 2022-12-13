import BusinessObject from "./BusinessObject";

import { dateToJSONFormat } from "../components/helpers/HelperFunctions";

class MessageBO extends BusinessObject {
    constructor(aOccurrence) {
        super();
        this.occurrence = aOccurrence;
    }

    setOccurrence(aOccurrence) {
        this.occurrence = aOccurrence;
    }

    getOccurrence() {
        return this.occurrence;
    }

    formatDatesJSONReady() {
        this.occurrence = dateToJSONFormat(this.occurrence);
    }

    static fromJSON(events, boType) {
        let result = [];
        if (Array.isArray(events)) {
            events.forEach((f) => {
                Object.setPrototypeOf(f, boType.prototype);
                f.setOccurrence(new Date(f.getOccurrence()));
                result.push(f);
            });
        } else {
            let f = events;
            Object.setPrototypeOf(f, boType.prototype);
            f.setOccurrence(new Date(f.getOccurrence()));
            result.push(f);
        }

        return result;
    }
}

export default MessageBO;