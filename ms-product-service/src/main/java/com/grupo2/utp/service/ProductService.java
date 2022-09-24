package com.grupo2.utp.service;

import com.grupo2.utp.entity.Product;

import java.util.List;


public interface ProductService {
    Product findByProductCode(int productCode);
    Product findByProductName(String productName);
    List<Product> findByProductType(String productType);
}
