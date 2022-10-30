import ValidationError from "../../response/error";

export default class ErrorUtil {
    public static getErrorList(errors): ValidationError[] {
        return errors.details.map(errorDetail => {
            let validationError: ValidationError = {
                field: errorDetail.path[0],
                message: errorDetail.message,
            }
            return validationError;
        });

    }
}