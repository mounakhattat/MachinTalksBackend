package com.machinestalk.services;

import com.machinestalk.entities.Application;

import com.machinestalk.repositories.ApplicationRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ApplicationServiceImpl implements ApplicationService {
ApplicationRepository applicationRepository ;
    @Override
    public List<Application> findAll() {

        return applicationRepository.findAll();
    }

    @Override
    public Application save(Application application) {
        return applicationRepository.save(application);
    }
    @Override
    public Application update( Application application) {

        return applicationRepository.save(application);
    }
    @Override
    public Application findById(Integer id) {
        return applicationRepository.findById(id).get();
    }
    @Override
    public void delete(Integer id) {
        applicationRepository.deleteById(id);
    }

}
