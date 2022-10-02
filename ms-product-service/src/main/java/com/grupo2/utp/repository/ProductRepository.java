package com.grupo2.utp.repository;

import com.grupo2.utp.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("productRepository")
public interface ProductRepository extends JpaRepository<Product, Long> {
    Product getByProductCode(String productCode);
    Product getByProductName(String productName);
    Product getByProductType(String productType);
    Product getByProductState(String productState);
    boolean existsByProductCode(String productCode);
}
