package com.machinestalk.entities;

import com.machinestalk.enumerations.ParamType;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;


@Entity
@Data
public class Parameters implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(unique = true)
    private String clee;
    @Enumerated(EnumType.STRING)
    private ParamType paramType;
    @JsonIgnore
    @ManyToOne
    private Paths pathsss;
}
