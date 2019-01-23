import { Model } from './model';

export class Order extends Model {
    first: string;
    last: string;

    constructor() {
        super(
            {
                first: {
                    type: 'TEXT'
                },
                last: {
                    type: 'TEXT'
                }
            }
        )
    }
}

// console.log(new User().getFields())