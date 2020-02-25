const imageProvider = {
    data() {
        return {
            message: ''
        }
    },
    methods: {
        getDataBasePhoto(imageName) {
            // return require(`../../../server/public/images/${imageName}`); for localdisk location
            return `https://e-shop-product-image.s3.us-east-2.amazonaws.com/${imageName}`;
        }
    },
}

export default imageProvider;