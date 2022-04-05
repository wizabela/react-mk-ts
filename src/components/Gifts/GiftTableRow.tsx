import React from 'react';
import {GiftEntity} from 'types';

interface Props {
    gift: GiftEntity,
}

export const GiftsTableRow = (props: Props) => (
    <tr>
        <th>
            {props.gift.id}
        </th>
        <td>
            {props.gift.name}
        </td>
        <td>
            {props.gift.count}
        </td>
    </tr>
);