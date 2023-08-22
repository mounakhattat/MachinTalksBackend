package com.machinestalk.repositories;

import com.machinestalk.entities.Parameters;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Set;


public interface ParametersRepositoty extends JpaRepository<Parameters, Integer> {

    @Query("SELECT p FROM Parameters p where p.pathsss.id =:id ")
    public Set<Parameters> GetListparameters(@Param("id") int id);
}
