import * as request from '~/utils/request';

export const productSelling = async () => {
    try {
        const res = await request.get('product/selling', {
            params: {},
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
