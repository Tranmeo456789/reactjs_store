import * as request from '~/utils/request';

export const category = async (type = 'all') => {
    try {
        const res = await request.get('cat/product', {
            params: {
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
