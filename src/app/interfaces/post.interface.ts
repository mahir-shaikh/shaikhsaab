import { COMMENT } from './comment.interface';

export interface POST {
    title: string,
    status: string,
    description: string,
    _id: string,
    creationDate: Date,
    comments: Array<COMMENT>,
    allowComments: Boolean
}