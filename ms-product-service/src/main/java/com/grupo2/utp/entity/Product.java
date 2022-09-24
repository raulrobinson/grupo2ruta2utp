package com.grupo2.utp.entity;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Objects;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "product_name")
    private String productName;

    @Column(name = "product_type")
    private String productType;

    @Column(name = "product_description")
    private String productDescription;

    @Column(name = "product_price")
    private Double productPrice;

    @Column(name = "product_code")
    private int productCode;

    @Column(name = "product_state")
    private boolean productState;

    @Column(name = "product_stock")
    private int productStock;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Product product = (Product) o;
        return id != null && Objects.equals(id, product.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
