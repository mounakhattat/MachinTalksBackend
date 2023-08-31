package com.machinestalk.services;

import com.machinestalk.entities.Paths;
import org.springframework.data.domain.Page;

import java.util.List;

public interface PathsService {
    List<Paths> findAll();

    Paths save (Paths paths);

    Paths update ( Paths paths) throws Exception;

    Paths findById (Integer id);

    void delete(Integer id);
     Paths addPathsAndAssignToApplication(Paths paths,Integer id );

    void assignParamToPath(Paths paths);
    List<Paths> findByApplication_Id (Integer id );
    void assignScenarioToPath(Paths path);
    Page<Paths> findByApplication_IdPage (Integer id , int offset , int pageSize );

}
