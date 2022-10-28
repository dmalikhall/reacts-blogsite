const blog_reducer = (state, action) => {
    if(action.type === 'GET_PRODUCTS_BEGIN') {
        return {...state, products_loading:true}
    }

    if(action.type === 'GET_PRODUCT_SUCCESS') {
        const architecture_blogs = action.payload.filter((cat)=> cat.category === 'Architecture');
        const design_blogs = action.payload.filter((cat)=> cat.category === 'Design');
        const urbanism_blogs = action.payload.filter((cat)=> cat.category === 'Urbanism');
        const ecobuilding_blogs = action.payload.filter((cat)=> cat.category === 'Ecobuilding');
        return {
            ...state, products_loading: false,
            allBlogs: action.payload,
            architectureBlogs: architecture_blogs,
            designBlogs: design_blogs,
            urbanismBlogs: urbanism_blogs,
            ecobuildingBlogs: ecobuilding_blogs,
        }
    }

    if(action.type === 'GET_PRODUCTS_ERROR'){
        return {...state, products_loading:false, products_error:true}       
    }

}

export default blog_reducer