package TestApplication.MachinesTalk.services;

import TestApplication.MachinesTalk.entities.Application;

import java.util.List;

public interface ApplicationService {
    List<Application> findAll();

    Application save (Application application);

    Application update ( Application application);

    Application findById (Integer id);

    void delete(Integer id);
}
