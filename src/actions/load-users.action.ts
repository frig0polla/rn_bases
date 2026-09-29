
import axios from 'axios'
import React from 'react'
import type { ReqResUserListResponse } from '../interfaces/reqres.response'

export const loadUsersAction = async (page: number = 1) => {
 
    try {
        const { data } = await axios.get<ReqResUserListResponse>('https://reqres.in/api/users',
            {
                params: {
                    page: page
                },
                headers: {
                    'x-api-key': 'free_user_3JwmSTAv7KW4uWktedx2abURVNs'
                }
            }
        );

                return data.data
    } catch (error) {
        console.log('Error loading users:', error);
        return [];
    }

}