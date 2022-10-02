package com.grupo2.utp.model;

import com.grupo2.utp.entity.Product;
import lombok.Data;

@Data
public class ProductModel {
    private Long id;
    private String productName;
    private String productType;
    private String productDescription;
    private String productPrice;
    private String productCode;
    private String productState;
    private String productStock;

    public ProductModel(Product product) {
        this.id = product.getId();
        this.productName = product.getProductName();
        this.productType = product.getProductType();
        this.productDescription = product.getProductDescription();
        this.productPrice = product.getProductPrice();
        this.productCode = product.getProductCode();
        this.productState = product.getProductState();
        this.productStock = product.getProductStock();
    }
}
