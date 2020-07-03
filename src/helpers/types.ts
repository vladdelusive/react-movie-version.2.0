import {IAddPost, IFile, IValuesForm} from "../pages/movie/components/reviews/types";

export type ISubmit = (
    values: IValuesForm<IFile>,
    addPost: IAddPost,
    rateField: number,
    setIsSubmit: (b:boolean) => void,
    reset: () => void,
    setRateField: (n:number) => void,
    setPostIsAdd: (b:boolean) => void,
) => void