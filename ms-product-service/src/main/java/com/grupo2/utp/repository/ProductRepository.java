package com.grupo2.utp.repository;

import com.grupo2.utp.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    Product findByProductCode(int productCode);
    Product findByProductName(String productName);
    List<Product> findByProductType(String productType);
}
