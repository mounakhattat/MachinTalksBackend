package com.machinestalk.services;

import com.machinestalk.entities.Scenario;
import com.machinestalk.entities.Setup;
import com.machinestalk.repositories.SetupRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class SetupServiceImpl implements SetupService {
    @Autowired
    SetupRepository setupRepository ;
    @Override
    public List<Setup> findAll() {
        return setupRepository.findAll();
    }
    @Transactional
    @Override
    public Setup save(Setup setup) throws Exception {
        assignScenarioToSetup(setup);
        return setupRepository.save(setup);
    }

    @Override
    public Setup update( Setup setup) {
        return setupRepository.save(setup);
    }
    @Override
    public Setup findById(Integer id) {
        return setupRepository.findById(id).get();
    }
    @Override
    public void delete(Integer id) {
        setupRepository.deleteById(id);
    }


    @Override
    public void assignScenarioToSetup(Setup setup) {
        List<Scenario> scenarios = setup.getScenarios().stream().map(sc -> {
            sc.setSetup(setup);
            return sc;
        }).collect(Collectors.toList());
        setup.setScenarios(scenarios);
    }
}
