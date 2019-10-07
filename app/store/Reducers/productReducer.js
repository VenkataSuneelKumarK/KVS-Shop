/**
 * Created by kanamars on 07/10/19.
 */
const initialStore = {
    products: [
    ],
    productDetail : null,
    error: null
};

export const getProductsFromServer = () =>{
   return dispatch => {
       setTimeout(()=>{
           dispatch({
               type: "GET-PRODUCTS",
               value:[{
                   "name": "Sony",
                   "model": "Xperia",
                   "details": "abc"
                    },
                   {
                       "name": "Samsumg",
                       "model": "A5",
                       "details": "abcldjfsl"
                   },
                   {
                       "name": "Iphone",
                       "model": "5",
                       "details": "ldjfsl"
                   }]
           })

       }, 300);

   }

};

const productReducer = (store = initialStore, action)=>{
    switch(action.type){
        case 'PRODUCT-TO-SHOW' :
            return{
                ...store,
                productDetail: action.value
            };
            break;
        case 'GET-PRODUCTS' :
            return{
                ...store,
                products: action.value
            };
            break;
        default:
            return store
    }
  return store
};

export default productReducer;