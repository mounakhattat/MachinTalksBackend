package com.machinestalk.services;


import com.machinestalk.entities.Parameters;
import com.machinestalk.entities.Paths;
import com.machinestalk.repositories.ParametersRepositoty;
import com.machinestalk.repositories.PathsRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
@AllArgsConstructor
public class ParametersServiceImpl implements ParametersService{
    @Autowired
    ParametersRepositoty parametersRepositoty;
    @Autowired
    PathsRepository pathsRepository;
    @Override
    public List<Parameters> findAll() {

        return parametersRepositoty.findAll();
    }

    @Override
    public Parameters save(Parameters parameters) {
        return parametersRepositoty.save(parameters);
    }
    @Override
    public Parameters update(Parameters parameters) {

        return parametersRepositoty.save(parameters);
    }
    @Override
    public Parameters findById(Integer id) {
        return parametersRepositoty.findById(id).get();
    }
    @Override
    public void delete(Integer id) {
        parametersRepositoty.deleteById(id);
    }
    @Override
    public Parameters addParamsAndAssignToPaths(Parameters parameters, Integer id ){
        Paths paths= pathsRepository.findById(id).get();
        parameters.setPathsss(paths);
        parametersRepositoty.save(parameters);
       // pathsRepository.save(paths);
        return parameters;

    }

    @Override
    public Set<Parameters> GetListparameters(Integer id) {
        return parametersRepositoty.GetListparameters(id);
    }


}



