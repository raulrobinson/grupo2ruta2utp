package com.grupo2.utp.controller;

import com.grupo2.utp.dto.ProductDTO;
import com.grupo2.utp.entity.Product;
import com.grupo2.utp.model.ProductModel;
import com.grupo2.utp.service.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/products")
public class ProductController {

    @Autowired
    ProductService productService;

    // --------------- RETRIEVE ALL PRODUCTS FROM STORE -------------------------------------------//
    @GetMapping("/all")
    public ResponseEntity<List<ProductModel>> getAllProducts() {
        var productList = productService.getAll();
        if (productList.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok().body(productList);
    }

    // --------------- RETRIEVE PRODUCT BY ID - CODE - NAME - TYPE - STATE -----------------------//
    // --------------- TYPE: A = Foods. M = Medicine ---------------------------------------------//
    @GetMapping("")
    public List<ProductModel> findByProduct(
            @RequestParam(value = "productId", required = false) String productId,
            @RequestParam(value = "productCode", required = false) String productCode,
            @RequestParam(value = "productName", required = false) String productName,
            @RequestParam(value = "productType", required = false) String productType,
            @RequestParam(value = "productState", required = false) String productState
    ) {
        if (null != productId) {
            List<ProductModel> response = new ArrayList<>();
            response.add(productService.getByProductId(Long.valueOf(productId)));
            return response;
        }
        if (null != productCode) {
            List<ProductModel> response = new ArrayList<>();
            response.add(productService.getByProductCode(productCode));
            return response;
        }
        if (null != productName) {
            List<ProductModel> response = new ArrayList<>();
            response.add(productService.getByProductName(productName));
            return response;
        }
        if (null != productType) {
            List<ProductModel> response = new ArrayList<>();
            response.add(productService.getByProductType(productType));
            return response;
        }
        if (null != productState) {
            List<ProductModel> response = new ArrayList<>();
            response.add(productService.getByProductState(productState));
            return response;
        }

        return new ArrayList<>();
    }

    // --------------- CREATE PRODUCT ------------------------------------------------//
    @PostMapping("")
    public Product createProduct(@RequestBody ProductDTO productDTO) {

        return productService.createProduct(productDTO);
    }

    // --------------- UPDATE PRODUCT ------------------------------------------------//
    @PutMapping("")
    public Product updateProduct(@RequestBody ProductDTO productDTO) {

        return productService.updateProduct(productDTO);
    }

    // --------------- DELETE PRODUCT ------------------------------------------------//
    @DeleteMapping("")
    public Long deleteProduct(@RequestBody ProductDTO productDTO) {

        return productService.deleteProduct(productDTO);
    }

}
