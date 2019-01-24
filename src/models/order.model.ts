import { Model } from 'sequelite';

export class Order extends Model {
    description: string;
    value: number;

    constructor() {
        super(
            {
                description: {
                    type: 'TEXT'
                },
                value: {
                    type: 'REAL'
                }
            }
        )
    }
}