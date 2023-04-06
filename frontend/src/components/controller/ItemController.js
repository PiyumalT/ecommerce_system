export const ItemController = (req, res) => {
    const productid = req.params;
    getProductId(window.location.href);

    function getProductId(url) {
        const urlParts = url.split('/');
        const productInfoIndex = urlParts.indexOf('ProductInfo');
        
        if (productInfoIndex !== -1) {
          const nextIndex = productInfoIndex + 1;
          if (nextIndex < urlParts.length) {
            console.log(urlParts[nextIndex]);
          } else {
            console.log('No text after ProductInfo');
          }
        } else {
          console.log('URL does not contain ProductInfo');
        }
      }
    

}


export default ItemController;