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
export const productFeature = async () => {
    try {
        const res = await request.get('product/selling', {
            params: {},
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const CatIsProduct = async () => {
    try {
        const res = await request.get('product/cat', {
            params: {
            
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
