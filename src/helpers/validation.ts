import {validateEmail} from "./email-checker";
import {FormErrors, SubmissionError} from "redux-form";
import {rightFileSize, validFileType} from "./file-checker";
import {IFile, IValuesForm} from "pages/movie/components/reviews/types";
import {ISubmit} from "./types";

export const validate = (values: IValuesForm<IFile>): FormErrors<{} | void> => {
    const warnings: IValuesForm<string> = {}
    if (values?.comment && values?.comment.length < 5){
        warnings.comment = "Should be typed more than 5 letters!"
    }
    if (values?.name && values?.name.length < 3){
        warnings.name = "Should be more than 3 letters!"
    }
    if (values?.email && !validateEmail(values.email)) {
        warnings.email = "Should be correct email!"
    }
    if (values?.photo && !checkFile(values.photo)) {
        warnings.photo = "Should be img file and not more than 1MB!"
    }
    if(Object.keys(warnings)){
        return warnings
    }
}

export const submit: ISubmit = (values, addPost, rateField, setIsSubmit, reset, setRateField, setPostIsAdd) => {
    const warnings: IValuesForm<string> = {}
    if (!values?.comment || values?.comment.length < 5){
        warnings.comment = "Should be typed more than 5 letters!"
    }
    if (!values?.name || values?.name.length < 3){
        warnings.name = "Should be more than 3 letters!"
    }
    if (!values?.email || !validateEmail(values.email)) {
        warnings.email = "Should be correct email!"
    }
    if (!values?.photo || !checkFile(values.photo)) {
        warnings.photo = "Should be img file and not more than 1MB!"
    }
    if(!rateField){
        setIsSubmit(true)
    }
    if(Object.keys(warnings).length) throw new SubmissionError(warnings)
    if(!rateField) return
    addPost(values, rateField)
    reset()
    setRateField(0)
    setIsSubmit(false)
    setPostIsAdd(true)
}


const checkFile = ({size, type}: IFile) => {
    return validFileType(type) && rightFileSize(size);
}