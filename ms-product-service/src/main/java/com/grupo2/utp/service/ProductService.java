package com.grupo2.utp.service;

import com.grupo2.utp.dto.ProductDTO;
import com.grupo2.utp.entity.Product;
import com.grupo2.utp.model.ProductModel;

import java.util.List;

public interface ProductService {
    List<ProductModel> getAll();
    ProductModel getByProductId(Long productId);
    ProductModel getByProductCode(String productCode);
    ProductModel getByProductName(String productName);
    ProductModel getByProductType(String productType);
    ProductModel getByProductState(String productState);
    Product createProduct(ProductDTO productDTO);
    Product updateProduct(ProductDTO productDTO);
    Long deleteProduct(ProductDTO productDTO);
}
