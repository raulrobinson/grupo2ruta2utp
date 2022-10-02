package com.grupo2.utp.converter;

import com.grupo2.utp.entity.Product;
import com.grupo2.utp.model.ProductModel;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component("productConverter")
public class ProductConverter {
    public List<ProductModel> listConverter(List<Product> productList) {
        List<ProductModel> productModels = new ArrayList<>();
        productList.forEach(product -> productModels.add(new ProductModel(product)));
        return productModels;
    }
}
