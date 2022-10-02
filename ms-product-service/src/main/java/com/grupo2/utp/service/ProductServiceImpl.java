package com.grupo2.utp.service.impl;

import com.grupo2.utp.entity.Product;
import com.grupo2.utp.repository.ProductRepository;
import com.grupo2.utp.service.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class IproductService implements ProductService {

    @Autowired
    ProductRepository productRepository;

    /*@Override
    public Product findProductByCode(int productCode) {
        return productRepository.findProductByCode(productCode);
    }*/

    @Override
    public Product findByProductName(String productName) {
        return productRepository.findByProductName(productName);
    }

    @Override
    public List<Product> findByProductType(String productType) {
        return productRepository.findByProductType(productType);
    }
}
