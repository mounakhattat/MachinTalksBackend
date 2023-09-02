package com.machinestalk.entities;

import com.machinestalk.enumerations.ParamType;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;

import java.io.Serializable;


@Entity
@Data
@ToString
public class Parameters implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(unique = true)
    private String clee;
    @Transient
    private String value;
    @Enumerated(EnumType.STRING)
    private ParamType paramType;
    @JsonIgnore
    @ManyToOne
    private Paths pathsss;
}
