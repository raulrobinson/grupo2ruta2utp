package com.grupo2.utp.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {
    private Long id;
    private String productName;
    private String productType;
    private String productDescription;
    private Double productPrice;
    private String productCode;
    private String productState;
    private String productStock;
}
