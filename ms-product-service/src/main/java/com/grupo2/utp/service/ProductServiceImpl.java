package com.grupo2.utp.service;

import com.grupo2.utp.converter.ProductConverter;
import com.grupo2.utp.dto.ProductDTO;
import com.grupo2.utp.entity.Product;
import com.grupo2.utp.exception.BadRequestException;
import com.grupo2.utp.model.ProductModel;
import com.grupo2.utp.repository.ProductRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    @Qualifier("productRepository")
    private ProductRepository productRepository;

    @Autowired
    @Qualifier("productConverter")
    private ProductConverter productConverter;

    @Override
    public List<ProductModel> getAll() {
        List<Product> productList = productRepository.findAll();

        return productConverter.listConverter(productList);
    }

    @Override
    public ProductModel getByProductId(Long productId) {
        var product = productRepository.getById(productId);

        return new ProductModel(product);
    }

    @Override
    public ProductModel getByProductCode(String productCode) {
        var product = productRepository.getByProductCode(productCode);

        return new ProductModel(product);
    }

    @Override
    public ProductModel getByProductName(String productName) {
        var product = productRepository.getByProductName(productName);

        return new ProductModel(product);
    }

    @Override
    public ProductModel getByProductType(String productType) {
        var product = productRepository.getByProductType(productType);

        return new ProductModel(product);
    }

    @Override
    public ProductModel getByProductState(String productState) {
        var product = productRepository.getByProductState(productState);

        return new ProductModel(product);
    }

    @Override
    public Product createProduct(ProductDTO productDTO) {
        boolean checkCode = productRepository.existsByProductCode(productDTO.getProductCode());
        if (checkCode) {
            var message = "Error creating product, the product code already exists";
            log.error(message, HttpStatus.BAD_REQUEST);
            throw new BadRequestException(message);
        }
        var product = new Product();
        product.setProductCode(productDTO.getProductCode());
        product.setProductName(productDTO.getProductName());
        product.setProductType(productDTO.getProductType());
        product.setProductDescription(productDTO.getProductDescription());
        product.setProductPrice(productDTO.getProductPrice().toString());
        product.setProductState(productDTO.getProductState());
        product.setProductStock(productDTO.getProductStock());
        productRepository.save(product);

        return product;
    }

    @Override
    public Product updateProduct(ProductDTO productDTO) {
        //var productCode = productRepository.getByProductCode(productDTO.getProductCode());
        //var product = new Product();

        return null;
    }

    @Override
    public Long deleteProduct(ProductDTO productDTO) {

        return null;
    }

}
