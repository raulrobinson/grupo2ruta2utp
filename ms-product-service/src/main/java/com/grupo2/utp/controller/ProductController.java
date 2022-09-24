package com.grupo2.utp.controller;

import com.grupo2.utp.entity.Product;
import com.grupo2.utp.service.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    ProductService productService;

    // --------------- RETRIEVE ALL PRODUCT BY TYPE (A = Alimentos, M = Medicinas) ---------------

    @GetMapping("/{productType}")
    public ResponseEntity<List<Product>> AllProductByType(@PathVariable(value = "productType") String productType) {
        var productList= productService.findByProductType(productType);
        if (productList.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(productList);
    }

}
